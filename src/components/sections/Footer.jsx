import { Container } from "../ui/Container";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-ink text-canvas pt-32 pb-12 overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <img src="/Edflo-logo.svg" alt="Edflo" className="h-16 bg-white rounded-xl p-2" />
              <h2 className="text-3xl font-semibold tracking-tight flex items-baseline">
                Edflo<span className="w-2 h-2 bg-coral inline-block ml-[5px] rounded-[1px]"></span>
              </h2>
            </div>
            <p className="text-canvas/60 text-lg mb-8 max-w-sm leading-relaxed">
              Building the future infrastructure for modern education. 
            </p>
          </div>
          
          <div className="md:col-span-6 flex flex-col md:items-end">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-canvas mb-2 tracking-wide">Product</h4>
                <a href="/#" className="text-sm text-canvas/60 hover:text-coral transition-colors">Home</a>
                <a href="/#problem" className="text-sm text-canvas/60 hover:text-coral transition-colors">The Problem</a>
                <a href="/#ecosystem" className="text-sm text-canvas/60 hover:text-coral transition-colors">Platform</a>
                <a href="/#capabilities" className="text-sm text-canvas/60 hover:text-coral transition-colors">Capabilities</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-canvas mb-2 tracking-wide">Company</h4>
                <a href="/#trust" className="text-sm text-canvas/60 hover:text-coral transition-colors">Trust & Security</a>
                <a href="mailto:hello@edflo.com" className="text-sm text-canvas/60 hover:text-coral transition-colors">Contact Sales</a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-canvas/10"></div>
      </Container>

      {/* Mega Typography Marquee (Full width) */}
      <div className="w-full pt-16 mb-8 overflow-hidden flex whitespace-nowrap relative left-0 right-0">
        <div className="animate-marquee flex gap-12 items-center">
          {[...Array(2)].map((_, i) => (
            <h2 key={i} className="text-[15vw] leading-none font-bold tracking-tighter text-canvas/5 select-none shrink-0 flex items-center">
              EDFLO<span className="w-[4vw] h-[4vw] bg-canvas/5 rounded-[4px] inline-block mx-[6vw]"></span>
              EDFLO<span className="w-[4vw] h-[4vw] bg-canvas/5 rounded-[4px] inline-block mx-[6vw]"></span>
              EDFLO<span className="w-[4vw] h-[4vw] bg-canvas/5 rounded-[4px] inline-block mx-[6vw]"></span>
            </h2>
          ))}
        </div>
      </div>
      
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-canvas/40">
          <p>© 2026 Edflo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-canvas transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-canvas transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
