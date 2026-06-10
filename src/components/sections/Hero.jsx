import { Container } from "../ui/Container";
import { GridBackground } from "../ui/GridBackground";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";

// Large Abstract Pixel-Art Grid for Hero
const HeroVisual = () => {
  const pattern = [
    0,0,0,0,0,1,1,2,3,4,3,2,1,0,0,0,0,0,
    0,0,0,0,1,2,3,4,4,4,4,3,2,1,0,0,0,0,
    0,0,0,1,2,3,4,4,3,3,4,4,3,2,1,0,0,0,
    0,0,1,2,3,4,3,2,1,2,3,4,4,3,2,1,0,0,
    0,1,2,3,4,3,2,1,0,1,2,3,4,4,3,2,1,0,
    1,2,3,4,4,3,2,1,0,0,1,2,3,4,4,3,2,1,
    2,3,4,4,3,2,1,0,0,0,0,1,2,3,4,4,3,2,
    3,4,4,3,2,1,0,0,0,0,0,0,1,2,3,4,4,3,
    2,3,4,3,2,1,0,0,0,0,0,1,2,3,4,4,3,2,
    1,2,3,2,1,0,0,0,0,0,1,2,3,4,4,3,2,1,
    0,1,2,1,0,0,0,0,0,1,2,3,4,3,2,1,0,0,
    0,0,1,0,0,0,0,0,1,2,3,4,3,2,1,0,0,0,
    0,0,0,0,0,0,0,1,2,3,4,3,2,1,0,0,0,0,
  ];

  const getColorClass = (val) => {
    switch(val) {
      case 0: return "bg-white/40 border border-ink/5";
      case 1: return "bg-ink/5";
      case 2: return "bg-ink/10";
      case 3: return "bg-coral/30";
      case 4: return "bg-coral shadow-[0_0_15px_rgba(217,119,87,0.5)]";
      default: return "bg-transparent";
    }
  };

  return (
    <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] bg-white border border-ink/5 rounded-xl shadow-sm flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-ink/5 bg-white z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-[2px] bg-ink/10"></div>
          <div className="w-3 h-3 rounded-[2px] bg-ink/10"></div>
          <div className="w-3 h-3 rounded-[2px] bg-ink/10"></div>
        </div>
        <div className="text-[10px] font-mono text-ink/40 uppercase tracking-widest border border-ink/10 px-2 py-0.5 rounded-full">
          Sys.Visualizer
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-canvas/30 p-4 sm:p-8">
        <div 
          className="absolute inset-0 editorial-grid opacity-30"
          style={{ WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 70%)', maskImage: 'radial-gradient(circle at center, black, transparent 70%)' }}
        ></div>
        
        <div className="grid gap-1.5 sm:gap-2 w-full max-w-[480px] relative z-10" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))' }}>
          {pattern.map((val, i) => (
            <div 
              key={i} 
              className={`aspect-square rounded-[2px] transition-all duration-1000 ${getColorClass(val)} ${val === 4 ? 'animate-[pulse_3s_infinite]' : ''}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="h-16 border-t border-ink/5 bg-white z-10 flex items-center px-6 gap-8 overflow-hidden whitespace-nowrap">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-wider text-ink/40">Status</span>
          <span className="text-xs font-mono text-[#10B981] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-[2px] bg-[#10B981] animate-pulse"></span> Online
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-wider text-ink/40">Throughput</span>
          <span className="text-xs font-mono text-ink/80">1.2 TB/s</span>
        </div>
        <div className="flex-col hidden sm:flex">
          <span className="text-[9px] uppercase tracking-wider text-ink/40">Active Nodes</span>
          <span className="text-xs font-mono text-ink/80">342</span>
        </div>
      </div>
    </div>
  );
};

export function Hero({ onOpenWaitlist }) {
  return (
    <section className="relative min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32 noise-bg overflow-hidden flex items-center">
      <div className="absolute top-1/2 left-1/4 w-full h-full max-w-[800px] glow-coral opacity-40 z-0 -translate-x-1/2 -translate-y-1/2"></div>
      <GridBackground className="absolute inset-0 z-0" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-coral/20 bg-white/60 shadow-sm backdrop-blur-sm text-xs font-semibold uppercase tracking-widest text-ink">
                <span className="w-2 h-2 rounded-[2px] bg-coral shadow-[0_0_8px_rgba(217,119,87,0.8)]"></span>
                Campus Operating System
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-8">
                Building the operating system for <span className="text-transparent bg-clip-text bg-linear-to-r from-ink to-coral">modern campuses.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-ink/70 leading-relaxed max-w-xl mb-10">
                Edflo is creating a simpler way for students, faculty, and administrators to manage campus operations from one place.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Button variant="coral" size="lg" className="w-full sm:w-auto" onClick={onOpenWaitlist}>
                Join Waitlist
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '#architecture'}>
                Explore Platform
              </Button>
            </FadeIn>
            
          </div>

          <div className="lg:col-span-6">
            <FadeIn delay={0.4} className="h-full">
              <HeroVisual />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
