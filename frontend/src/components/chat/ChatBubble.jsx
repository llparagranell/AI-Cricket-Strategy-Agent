import ReactMarkdown from 'react-markdown';
import { cn } from '../../utils/cn';
import MessageActions from './MessageActions';

export default function ChatBubble({ message, onRegenerate }) {
  const isUser = message.role === 'user';

  return (
    <article className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div className={cn('max-w-[88%] rounded-3xl px-5 py-4', isUser ? 'bg-accent text-background' : 'glass-card')}>
        <div className="prose prose-invert max-w-none prose-p:my-2 prose-pre:bg-background/80 prose-table:text-sm">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
        <div className={cn('mt-2 text-xs', isUser ? 'text-background/75' : 'text-muted')}>
          {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        {!isUser ? <MessageActions content={message.content} onRegenerate={onRegenerate} /> : null}
        {message.sources?.length ? (
          <div className="mt-3 border-t border-border pt-3 text-xs text-muted">
            Sources: {message.sources.join(', ')}
          </div>
        ) : null}
      </div>
    </article>
  );
}
