import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Search } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import { Input } from '../components/ui/Input';
import { knowledgeCards } from '../data/mockData';

export default function KnowledgeBase() {
  const [query, setQuery] = useState('');
  const filtered = knowledgeCards.filter((card) => `${card.title} ${card.category}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-8">
      <SectionTitle eyebrow="RAG library" title="Knowledge Base" description="Search reusable cricket intelligence and inspect markdown-ready tactical notes." />
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <Input className="pl-11" placeholder="Search venues, tactics, teams..." value={query} onChange={(event) => setQuery(event.target.value)} />
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {filtered.map((card) => (
          <GlassCard key={card.title} hover>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">{card.category}</p>
            <h2 className="mt-3 text-xl font-black">{card.title}</h2>
            <div className="prose prose-invert mt-4 text-muted">
              <ReactMarkdown>{card.content}</ReactMarkdown>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
