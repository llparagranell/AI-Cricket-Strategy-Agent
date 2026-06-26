import { create } from 'zustand';
import { API_URL } from '../services/api';

export const useSettingsStore = create((set) => ({
  apiUrl: API_URL,
  model: 'groq-llama-3.1',
  theme: 'dark',
  saveHistory: true,
  setApiUrl: (apiUrl) => set({ apiUrl }),
  setModel: (model) => set({ model }),
  setTheme: (theme) => set({ theme }),
  setSaveHistory: (saveHistory) => set({ saveHistory }),
}));
