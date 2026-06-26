import { create } from 'zustand';

const welcomeMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    'Ask for a cricket strategy, matchup read, weather impact, pitch report, or playing XI prediction. I will combine the available backend answer with tactical context.',
  createdAt: new Date().toISOString(),
  sources: [],
};

export const useChatStore = create((set) => ({
  messages: [welcomeMessage],
  history: ['Wankhede chase plan', 'Powerplay bowling field', 'Spin vs pace matchup'],
  isTyping: false,
  setTyping: (isTyping) => set({ isTyping }),
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...message }],
    })),
  replaceLastAssistant: (content) =>
    set((state) => ({
      messages: state.messages.map((message, index) =>
        index === state.messages.length - 1 && message.role === 'assistant' ? { ...message, content } : message,
      ),
    })),
  clearChat: () => set({ messages: [welcomeMessage] }),
  addHistory: (item) =>
    set((state) => ({
      history: [item, ...state.history.filter((entry) => entry !== item)].slice(0, 12),
    })),
}));
