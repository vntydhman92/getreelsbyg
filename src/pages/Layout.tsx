import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff] font-sans selection:bg-[#f43f5e]/30 selection:text-amber-200 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
