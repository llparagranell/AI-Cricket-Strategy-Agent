import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import { Input } from '../components/ui/Input';
import Button from '../components/ui/Button';
import { chartData } from '../data/mockData';
import { useAnalysisStore } from '../store/analysisStore';

export default function MatchAnalysis() {
  const { teamA, teamB, venue, predictedWinner, confidence } = useAnalysisStore();

  return (
    <div className="space-y-8">
      <SectionTitle eyebrow="Match intelligence" title="Match Analysis" description="Compare teams, surface strengths and weakness, venue records, and head-to-head patterns." />
      <GlassCard>
        <div className="grid gap-4 md:grid-cols-4">
          <Input defaultValue={teamA} aria-label="Team A" />
          <Input defaultValue={teamB} aria-label="Team B" />
          <Input defaultValue={venue} aria-label="Venue" />
          <Button>Analyze</Button>
        </div>
      </GlassCard>
      <div className="grid gap-5 lg:grid-cols-3">
        <GlassCard className="lg:col-span-1">
          <p className="text-sm text-muted">Predicted Winner</p>
          <h2 className="mt-3 text-4xl font-black">{predictedWinner}</h2>
          <p className="mt-2 text-muted">{confidence}% confidence based on venue, matchup, and phase balance.</p>
        </GlassCard>
        <GlassCard className="lg:col-span-2">
          <h2 className="mb-5 text-xl font-black">Strength vs Risk</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.75)" />
                <YAxis stroke="rgba(255,255,255,0.75)" />
                <Tooltip contentStyle={{ background: '#273338', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 }} />
                <Legend />
                <Bar dataKey="win" fill="#9CB080" radius={[8, 8, 0, 0]} />
                <Bar dataKey="risk" fill="#618764" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {['Strength', 'Weakness', 'Venue Records', 'Head-to-head'].map((title) => (
          <GlassCard key={title}>
            <h3 className="text-xl font-black">{title}</h3>
            <p className="mt-3 text-muted">Use phase scoring, bowling matchups, venue history, and pressure patterns to refine this read.</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
