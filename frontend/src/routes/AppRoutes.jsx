import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const StrategyPage = lazy(() => import('../pages/StrategyPage'));
const MatchAnalysis = lazy(() => import('../pages/MatchAnalysis'));
const Weather = lazy(() => import('../pages/Weather'));
const KnowledgeBase = lazy(() => import('../pages/KnowledgeBase'));
const Settings = lazy(() => import('../pages/Settings'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/strategy" element={<StrategyPage />} />
        <Route path="/match-analysis" element={<MatchAnalysis />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/knowledge" element={<KnowledgeBase />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
