import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import './styles/index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div className="grid min-h-screen place-items-center bg-background text-text">Loading...</div>}>
        <App />
      </Suspense>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#273338',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#FFFFFF',
          },
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>,
);
