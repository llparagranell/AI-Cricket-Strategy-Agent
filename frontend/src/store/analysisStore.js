import { create } from 'zustand';

export const useAnalysisStore = create((set) => ({
  teamA: 'India',
  teamB: 'Australia',
  venue: 'Wankhede Stadium',
  predictedWinner: 'India',
  confidence: 64,
  setMatch: ({ teamA, teamB, venue }) => set({ teamA, teamB, venue }),
  setPrediction: ({ predictedWinner, confidence }) => set({ predictedWinner, confidence }),
}));
