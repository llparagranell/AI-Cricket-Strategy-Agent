import { create } from 'zustand';

export const useWeatherStore = create((set) => ({
  city: 'Banglore',
  summary: {
    temperature: '29 C',
    humidity: '72%',
    rain: '38%',
    wind: '14 km/h',
    condition: 'Humid with late-evening dew',
  },
  setCity: (city) => set({ city }),
  setSummary: (summary) => set({ summary }),
}));
