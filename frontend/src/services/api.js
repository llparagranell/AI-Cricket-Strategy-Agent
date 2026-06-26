import axios from 'axios';

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function healthCheck() {
  const response = await api.get('/');
  return response.data;
}

export async function sendChat(question) {
  const response = await api.post('/chat', { question });
  return response.data;
}

export async function analyzeMatch(payload) {
  const response = await api.post('/analyze', payload);
  return response.data;
}

export async function getWeather(params) {
  const response = await api.get('/weather', { params });
  return response.data;
}

export async function getMatches() {
  const response = await api.get('/matches');
  return response.data;
}

export async function getKnowledge(params) {
  const response = await api.get('/knowledge', { params });
  return response.data;
}
