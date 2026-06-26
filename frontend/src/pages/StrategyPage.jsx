import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { Textarea } from '../components/ui/Input';
import ChatBubble from '../components/chat/ChatBubble';
import TypingIndicator from '../components/chat/TypingIndicator';
import { promptSuggestions } from '../data/mockData';
import { sendChat } from '../services/api';
import { useChatStore } from '../store/chatStore';
import { useWeatherStore } from '../store/weatherStore';
import { useAnalysisStore } from '../store/analysisStore';

export default function StrategyPage() {
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);
  const { messages, history, isTyping, addMessage, setTyping, clearChat, addHistory } = useChatStore();
  const { summary } = useWeatherStore();
  const { teamA, teamB, venue, confidence } = useAnalysisStore();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const submit = async (value = input) => {
    const question = value.trim();
    if (!question) return;

    addMessage({ role: 'user', content: question });
    addHistory(question);
    setInput('');
    setTyping(true);

    try {
      const response = await sendChat(question);
      addMessage({
        role: 'assistant',
        content: response.answer || 'I received an empty response from the strategy engine.',
        sources: response.sources || [],
      });
    } catch (error) {
      const fallback =
        'The FastAPI strategy endpoint is not reachable yet. Start the backend on `http://localhost:8000`, then retry this prompt.\n\n**Suggested tactical frame:** prioritize matchup clarity, toss impact, pitch behavior, and phase-specific risk before making the final call.';
      addMessage({ role: 'assistant', content: fallback, sources: [] });
      toast.error(error?.response?.data?.detail || 'Backend request failed');
    } finally {
      setTyping(false);
    }
  };

  const lastUserMessage = [...messages].reverse().find((message) => message.role === 'user');

  return (
    <div className="grid gap-5 xl:grid-cols-[260px_minmax(0,1fr)_300px]">
      <GlassCard className="hidden xl:block">
        <h2 className="mb-4 text-lg font-black">Conversation History</h2>
        <div className="space-y-2">
          {history.map((item) => (
            <button
              key={item}
              onClick={() => submit(item)}
              className="focus-ring w-full rounded-2xl bg-white/[0.05] px-4 py-3 text-left text-sm text-muted transition hover:bg-white/[0.09] hover:text-text"
            >
              {item}
            </button>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="flex min-h-[76vh] flex-col p-0">
        <div className="border-b border-border p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-black">Strategy Agent</h1>
              <p className="mt-1 text-sm text-muted">RAG, weather, pitch context, and AI reasoning in one conversation.</p>
            </div>
            <Button variant="secondary" onClick={clearChat}>
              <Trash2 className="h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>
        <div className="flex-1 space-y-5 overflow-y-auto p-5">
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} onRegenerate={() => lastUserMessage && submit(lastUserMessage.content)} />
          ))}
          {isTyping ? <TypingIndicator /> : null}
          <div ref={scrollRef} />
        </div>
        <form
          className="border-t border-border p-5"
          onSubmit={(event) => {
            event.preventDefault();
            submit();
          }}
        >
          <Textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                submit();
              }
            }}
            placeholder="Ask about toss strategy, playing XI, pitch behavior, death overs, or winning probability..."
          />
          <div className="mt-3 flex justify-end">
            <Button type="submit" isLoading={isTyping}>
              <Send className="h-4 w-4" />
              Send
            </Button>
          </div>
        </form>
      </GlassCard>

      <div className="space-y-5">
        <GlassCard>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-black">
            <Sparkles className="h-5 w-5 text-accent" />
            Quick Prompts
          </h2>
          <div className="grid gap-2">
            {promptSuggestions.map((prompt) => (
              <button
                key={prompt}
                onClick={() => submit(prompt)}
                className="focus-ring rounded-2xl border border-border bg-white/[0.05] px-4 py-3 text-left text-sm font-bold transition hover:bg-accent hover:text-background"
              >
                {prompt}
              </button>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h2 className="text-lg font-black">Weather Widget</h2>
          <p className="mt-2 text-sm text-muted">{summary.condition}</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {Object.entries(summary).filter(([key]) => key !== 'condition').map(([key, value]) => (
              <div key={key} className="rounded-2xl bg-white/[0.05] p-3">
                <p className="capitalize text-muted">{key}</p>
                <p className="mt-1 font-black">{value}</p>
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h2 className="text-lg font-black">Team Information</h2>
          <p className="mt-2 text-sm text-muted">{teamA} vs {teamB}</p>
          <p className="mt-1 text-sm text-muted">{venue}</p>
          <div className="mt-4 h-2 rounded-full bg-white/[0.08]">
            <div className="h-2 rounded-full bg-accent" style={{ width: `${confidence}%` }} />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
