import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ArrowUpRight, CloudSun, Zap } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import { chartData, recentAnalyses, stats, upcomingMatches } from '../data/mockData';
import { useWeatherStore } from '../store/weatherStore';

export default function Dashboard() {
  const { summary } = useWeatherStore();

  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Command center"
        title="Dashboard"
        description="A tactical overview of recent cricket intelligence, weather signals, upcoming matches, and model-ready strategy prompts."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <GlassCard key={stat.label} hover>
            <p className="text-sm text-muted">{stat.label}</p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-3xl font-black">{stat.value}</span>
              <span className="flex items-center gap-1 text-sm font-bold text-accent">
                {stat.delta}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
        <GlassCard>
          <h2 className="mb-5 text-xl font-black">Animated Strategy Chart</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="win" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9CB080" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#9CB080" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.75)" />
                <YAxis stroke="rgba(255,255,255,0.75)" />
                <Tooltip contentStyle={{ background: '#273338', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 }} />
                <Area type="monotone" dataKey="win" stroke="#9CB080" fill="url(#win)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
        <GlassCard>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-black">
            <CloudSun className="h-5 w-5 text-accent" />
            Weather Summary
          </h2>
          <p className="text-muted">{summary.condition}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {Object.entries(summary).filter(([key]) => key !== 'condition').map(([key, value]) => (
              <div key={key} className="rounded-2xl bg-white/[0.05] p-4">
                <p className="capitalize text-sm text-muted">{key}</p>
                <p className="mt-1 text-xl font-black">{value}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        <GlassCard>
          <h2 className="mb-4 text-xl font-black">Recent Analyses</h2>
          <div className="space-y-3">
            {recentAnalyses.map((item) => <p key={item} className="rounded-2xl bg-white/[0.05] p-3 text-sm text-muted">{item}</p>)}
          </div>
        </GlassCard>
        <GlassCard>
          <h2 className="mb-4 text-xl font-black">Upcoming Matches</h2>
          <div className="space-y-3">
            {upcomingMatches.map((match) => (
              <div key={match.teams} className="rounded-2xl bg-white/[0.05] p-3">
                <p className="font-bold">{match.teams}</p>
                <p className="text-sm text-muted">{match.venue} - {match.time}</p>
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-black">
            <Zap className="h-5 w-5 text-accent" />
            Quick Actions
          </h2>
          {['New strategy', 'Compare teams', 'Check weather', 'Search knowledge'].map((action) => (
            <button key={action} className="focus-ring mb-3 w-full rounded-2xl bg-white/[0.05] px-4 py-3 text-left font-bold transition hover:bg-accent hover:text-background">
              {action}
            </button>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}
