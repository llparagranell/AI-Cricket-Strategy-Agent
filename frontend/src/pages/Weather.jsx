import { CloudRain, Droplets, Thermometer, Wind } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import { useWeatherStore } from '../store/weatherStore';

const icons = { temperature: Thermometer, humidity: Droplets, rain: CloudRain, wind: Wind };
const timeline = ['Now', '3 PM', '6 PM', '9 PM', '12 AM'];

export default function Weather() {
  const { city, summary } = useWeatherStore();

  return (
    <div className="space-y-8">
      <SectionTitle eyebrow={city} title="Weather" description="Translate forecast signals into toss calls, bowling grip, fielding difficulty, and chase advantage." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(summary).filter(([key]) => key !== 'condition').map(([key, value]) => {
          const Icon = icons[key];
          return (
            <GlassCard key={key} hover>
              <Icon className="mb-5 h-8 w-8 text-accent" />
              <p className="capitalize text-sm text-muted">{key === 'rain' ? 'Rain Probability' : key}</p>
              <p className="mt-2 text-3xl font-black">{value}</p>
            </GlassCard>
          );
        })}
      </div>
      <GlassCard>
        <h2 className="mb-5 text-xl font-black">Forecast Timeline</h2>
        <div className="grid gap-3 md:grid-cols-5">
          {timeline.map((time, index) => (
            <div key={time} className="rounded-2xl bg-white/[0.05] p-4 text-center">
              <p className="font-bold">{time}</p>
              <p className="mt-2 text-2xl font-black">{29 - Math.min(index, 2)} C</p>
              <p className="mt-1 text-sm text-muted">{index > 2 ? 'Dew likely' : 'Humid'}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
