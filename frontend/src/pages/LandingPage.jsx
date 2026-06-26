import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BrainCircuit, CloudSun, Database, LineChart, RadioTower } from 'lucide-react';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import Footer from '../components/layout/Footer';

const features = [
  { title: 'AI Strategy', icon: BrainCircuit, text: 'Generate scenario-aware plans for toss, batting phases, bowling rotations, and matchups.' },
  { title: 'Weather Intelligence', icon: CloudSun, text: 'Convert humidity, wind, rain, and dew signals into tactical decisions.' },
  { title: 'Pitch Analysis', icon: LineChart, text: 'Read surface behavior and phase-by-phase scoring risk with analyst-grade framing.' },
  { title: 'Live Match Insights', icon: RadioTower, text: 'Prepare for live data feeds with fast, reusable analysis surfaces.' },
  { title: 'Historical Knowledge', icon: Database, text: 'Use RAG-backed cricket context to ground strategic recommendations.' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative flex min-h-[86vh] items-center px-5 py-10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(97,135,100,0.24),transparent_45%,rgba(156,176,128,0.18))]" />
        <motion.div
          className="absolute left-[10%] top-[16%] h-24 w-24 rounded-full border border-accent/30"
          animate={{ y: [0, 24, 0], rotate: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">Premium AI cricket console</p>
            <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">AI Cricket Strategy Agent</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Generate AI-powered cricket strategies using historical knowledge, weather forecasts, pitch reports and live match insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/strategy">
                <Button type="button">Start Analysis</Button>
              </Link>
              
            </div>
          </div>
          <GlassCard className="relative overflow-hidden p-6">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
            <div className="space-y-4">
              {['Toss recommendation', 'Bowling phase plan', 'Weather impact', 'Winning probability'].map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-2xl border border-border bg-white/[0.05] p-4"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{item}</span>
                    <span className="text-sm text-accent">{84 - index * 7}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/[0.08]">
                    <div className="h-2 rounded-full bg-accent" style={{ width: `${84 - index * 7}%` }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-4 px-5 pb-16 md:grid-cols-2 lg:grid-cols-5">
        {features.map((feature) => (
          <GlassCard key={feature.title} hover>
            <feature.icon className="mb-5 h-8 w-8 text-accent" />
            <h3 className="text-lg font-black">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{feature.text}</p>
          </GlassCard>
        ))}
      </section>
      <Footer />
    </div>
  );
}
