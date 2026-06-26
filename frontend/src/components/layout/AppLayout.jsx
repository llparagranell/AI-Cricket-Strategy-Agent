import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="lg:pl-72">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-5 py-8 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
