import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/sections/Footer";
import { WaitlistModal } from "./components/ui/WaitlistModal";
import { LandingPage } from "./pages/LandingPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const location = useLocation();

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-canvas selection:bg-coral/20 selection:text-ink font-sans flex flex-col">
      <Navbar onOpenWaitlist={openWaitlist} />
      
      <div className="grow">
        <Routes>
          <Route path="/" element={<LandingPage onOpenWaitlist={openWaitlist} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </div>

      <Footer />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}

export default App;
