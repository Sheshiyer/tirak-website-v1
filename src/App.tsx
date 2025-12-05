import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Index from './pages/Index';
import TirakLanding from './pages/TirakLanding';
import Download from './pages/Download';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { DataDeletion } from './pages/DataDeletion';
import NotFound from './pages/NotFound';
import Header from '@/components/Header';
import SocialCTAPopup from '@/components/SocialCTAPopup';
import CityBangkok from './pages/CityBangkok';
import CityChiangMai from './pages/CityChiangMai';
import CityPhuket from './pages/CityPhuket';
import CategoryCulture from './pages/CategoryCulture';
import CategoryAdventure from './pages/CategoryAdventure';
import CategoryWellness from './pages/CategoryWellness';
import CategoryNightlife from './pages/CategoryNightlife';
import CategoryFood from './pages/CategoryFood';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

function ScrollToTopAndFocus() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const el = document.getElementById('main-content');
    if (el) el.focus();
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="tirak-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <ScrollToTopAndFocus />
            <div className="min-h-screen bg-background">
              <Header />
              <main id="main-content" role="main" tabIndex={-1}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/landing" element={<Navigate to="/tirak" replace />} />
                  <Route path="/tirak" element={<TirakLanding />} />
                  <Route path="/download" element={<Download />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/data-deletion" element={<DataDeletion />} />
                  <Route path="/bangkok" element={<CityBangkok />} />
                  <Route path="/chiang-mai" element={<CityChiangMai />} />
                  <Route path="/phuket" element={<CityPhuket />} />
                  <Route path="/culture" element={<CategoryCulture />} />
                  <Route path="/adventure" element={<CategoryAdventure />} />
                  <Route path="/wellness" element={<CategoryWellness />} />
                  <Route path="/nightlife" element={<CategoryNightlife />} />
                  <Route path="/food" element={<CategoryFood />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <SocialCTAPopup />
            </div>
            <Sonner />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
