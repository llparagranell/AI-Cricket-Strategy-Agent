import { Link, NavLink } from 'react-router-dom';
import { BarChart3, BrainCircuit, CloudSun, Database, LayoutDashboard, Menu, Settings, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../utils/cn';

const navItems = [
  // { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Strategy Agent', to: '/strategy', icon: BrainCircuit },
  // { label: 'Knowledge Base', to: '/knowledge', icon: Database },
  // { label: 'Weather', to: '/weather', icon: CloudSun },
  // { label: 'Match Analysis', to: '/match-analysis', icon: BarChart3 },
  // { label: 'Settings', to: '/settings', icon: Settings },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="focus-ring fixed left-4 top-4 z-50 rounded-2xl border border-border bg-background/90 p-3 text-text backdrop-blur lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-background/90 p-5 backdrop-blur-2xl transition-transform lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-lg font-black text-background">AI</div>
            <div>
              <p className="font-black leading-tight">Cricket Strategy</p>
              <p className="text-xs text-muted">Agent Console</p>
            </div>
          </Link>
          <button className="focus-ring rounded-xl p-2 lg:hidden" onClick={() => setOpen(false)} aria-label="Close sidebar">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'focus-ring flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition',
                  isActive ? 'bg-accent text-background' : 'text-muted hover:bg-white/[0.07] hover:text-text',
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      {open ? <button className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu" /> : null}
    </>
  );
}
