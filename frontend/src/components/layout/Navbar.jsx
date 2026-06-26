import { Activity, Bell, Search } from 'lucide-react';
import { Input } from '../ui/Input';
import Button from '../ui/Button';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/70 px-5 py-4 backdrop-blur-2xl lg:px-8">
      <div className="ml-12 flex items-center gap-4 lg:ml-0">
        <div className="relative hidden flex-1 md:block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <Input className="pl-11" placeholder="Search strategies, venues, players..." />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="secondary" className="hidden md:inline-flex">
            <Activity className="h-4 w-4" />
            Backend
          </Button>
          <button className="focus-ring rounded-2xl border border-border bg-white/[0.06] p-3" aria-label="Notifications">
            <Bell className="h-5 w-5 text-muted" />
          </button>
        </div>
      </div>
    </header>
  );
}
