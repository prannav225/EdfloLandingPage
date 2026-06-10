import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";

export function About() {
  // A deterministic 10x10 grid pattern representing an abstract data flow
  const pattern = [
    0,0,0,0,1,2,1,0,0,0,
    0,0,1,2,3,4,2,1,0,0,
    0,1,3,4,4,4,3,1,0,0,
    1,2,4,4,4,3,2,1,0,0,
    2,3,4,3,2,1,1,0,0,0,
    1,2,3,2,1,1,2,1,0,0,
    0,1,2,1,1,2,3,2,1,0,
    0,0,1,1,2,3,4,3,1,0,
    0,0,0,1,2,4,4,2,0,0,
    0,0,0,0,1,2,1,0,0,0,
  ];

  const getColorClass = (val) => {
    switch(val) {
      case 0: return "bg-white/40 border border-ink/5";
      case 1: return "bg-ink/5";
      case 2: return "bg-ink/10";
      case 3: return "bg-coral/30";
      case 4: return "bg-coral shadow-[0_0_12px_rgba(217,119,87,0.4)]";
      default: return "bg-transparent";
    }
  };

  return (
    <section id="about" className="py-32 bg-white border-t border-ink/10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeIn>
            <div className="inline-block px-3 py-1 mb-8 rounded-xl border border-coral/30 bg-coral/5 text-coral text-xs font-semibold uppercase tracking-widest">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight leading-tight">
              We believe education deserves better software.
            </h2>
            <p className="text-lg text-ink/70 leading-relaxed mb-6">
              For too long, campuses have relied on fragmented, legacy systems that frustrate students and overwhelm administrators.
            </p>
            <p className="text-lg text-ink/70 leading-relaxed">
              Edflo was founded to build the missing infrastructure: a modern, unified operating system that connects every layer of a campus, from attendance to analytics.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative h-full">
            <div className="absolute inset-0 bg-coral blur-[100px] opacity-20 rounded-xl"></div>
            <div className="relative h-full min-h-[400px] bg-white border border-ink/5 rounded-xl overflow-hidden shadow-sm flex flex-col">
              
              {/* Widget Header */}
              <div className="flex items-center justify-between p-6 border-b border-ink/5 bg-white z-10">
                  <span className="text-xs font-mono text-[#10B981] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-[2px] bg-[#10B981] animate-pulse"></span>
                    System Nominal
                  </span>
                <div className="text-xs font-mono text-ink/40">v2.0.4</div>
              </div>

              {/* Data Grid Area */}
              <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden bg-canvas/30">
                {/* Decorative background grid */}
                <div 
                  className="absolute inset-0 editorial-grid opacity-40" 
                  style={{ WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)', maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}
                ></div>
                
                <div className="grid grid-cols-10 gap-1.5 md:gap-2 w-full max-w-[280px] relative z-10">
                  {pattern.map((val, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-[3px] transition-all duration-1000 ${getColorClass(val)} ${val === 4 ? 'animate-pulse' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Widget Footer */}
              <div className="grid grid-cols-3 divide-x divide-ink/5 border-t border-ink/5 bg-white z-10">
                <div className="p-4 flex flex-col items-center justify-center">
                  <span className="text-[10px] uppercase tracking-wider text-ink/40 mb-1">Latency</span>
                  <span className="text-sm font-mono text-ink/80">12ms</span>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                  <span className="text-[10px] uppercase tracking-wider text-ink/40 mb-1">Sync</span>
                  <span className="text-sm font-mono text-ink/80">99.9%</span>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                  <span className="text-[10px] uppercase tracking-wider text-ink/40 mb-1">Nodes</span>
                  <span className="text-sm font-mono text-ink/80">1,204</span>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
