import { Container } from "../ui/Container";
import { GridBackground } from "../ui/GridBackground";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";
import { PixelDecoration } from "../ui/PixelDecoration";

const DashboardCard = ({ title, active, children, className }) => (
  <div className={`bg-white/80 backdrop-blur-md border border-ink/10 rounded-xl shadow-[0_8px_32px_-12px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden transition-transform hover:-translate-y-1 ${className}`}>
    <div className="flex items-center gap-2 p-3 border-b border-ink/5 bg-canvas/30">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-[2px] bg-ink/10"></div>
        <div className="w-2.5 h-2.5 rounded-[2px] bg-ink/10"></div>
        <div className="w-2.5 h-2.5 rounded-[2px] bg-ink/10"></div>
      </div>
      <div className="text-[9px] font-mono text-ink/40 uppercase tracking-widest ml-2">{title}</div>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-[2px] bg-coral shadow-[0_0_8px_rgba(217,119,87,0.8)] animate-pulse"></div>}
    </div>
    <div className="p-4 flex-1">
      {children}
    </div>
  </div>
);

const HeroVisual = () => {
  return (
    <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
      {/* Analytics Dashboard - Back Right */}
      <DashboardCard title="Analytics" className="absolute w-64 h-48 top-10 right-0 -rotate-3 opacity-60 scale-90 origin-bottom-right">
        <div className="flex items-end gap-2 h-full pb-2">
           <div className="w-1/4 bg-coral/20 rounded-t-sm h-1/3"></div>
           <div className="w-1/4 bg-coral/40 rounded-t-sm h-2/3"></div>
           <div className="w-1/4 bg-coral/60 rounded-t-sm h-1/2"></div>
           <div className="w-1/4 bg-coral rounded-t-sm h-full"></div>
        </div>
      </DashboardCard>

      {/* Student Dashboard - Bottom Left */}
      <DashboardCard title="Student.view" className="absolute w-56 h-40 bottom-10 left-0 rotate-6 opacity-80 scale-95 origin-bottom-left">
        <div className="space-y-3">
          <div className="h-2 w-1/2 bg-ink/10 rounded-full"></div>
          <div className="h-8 w-full bg-coral/10 rounded-lg flex items-center px-2">
             <div className="h-1.5 w-1/3 bg-coral/40 rounded-full"></div>
          </div>
          <div className="h-8 w-full bg-canvas rounded-lg"></div>
        </div>
      </DashboardCard>

      {/* Faculty Attendance - Top Left */}
      <DashboardCard title="Faculty.tools" className="absolute w-60 h-48 top-20 left-4 lg:left-10 -rotate-6 opacity-90">
         <div className="space-y-2">
           <div className="flex items-center justify-between p-2 border border-ink/5 rounded-md bg-white">
             <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-[2px] bg-ink/10"></div><div className="h-1.5 w-16 bg-ink/20 rounded-full"></div></div>
             <div className="w-3 h-3 rounded-[2px] border border-coral bg-coral/10 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-coral rounded-[1px]"></div></div>
           </div>
           <div className="flex items-center justify-between p-2 border border-ink/5 rounded-md bg-white">
             <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-[2px] bg-ink/10"></div><div className="h-1.5 w-12 bg-ink/20 rounded-full"></div></div>
             <div className="w-3 h-3 rounded-[2px] border border-ink/20"></div>
           </div>
           <div className="flex items-center justify-between p-2 border border-ink/5 rounded-md bg-white">
             <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-[2px] bg-ink/10"></div><div className="h-1.5 w-20 bg-ink/20 rounded-full"></div></div>
             <div className="w-3 h-3 rounded-[2px] border border-coral bg-coral/10 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-coral rounded-[1px]"></div></div>
           </div>
         </div>
      </DashboardCard>

      {/* Admin Dashboard - Front Center */}
      <DashboardCard title="Admin.core" active className="absolute w-72 h-64 z-10 shadow-2xl scale-105">
         <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-canvas rounded-lg p-3 border border-ink/5">
              <div className="h-1.5 w-8 bg-ink/20 rounded-full mb-2"></div>
              <div className="text-xl font-mono text-ink">2,148</div>
            </div>
            <div className="bg-canvas rounded-lg p-3 border border-ink/5">
              <div className="h-1.5 w-10 bg-ink/20 rounded-full mb-2"></div>
              <div className="text-xl font-mono text-coral">98.2%</div>
            </div>
         </div>
         <div className="bg-canvas rounded-lg p-3 border border-ink/5 flex-1">
             <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-[2px] bg-coral animate-pulse"></div>
                <div className="h-1.5 w-16 bg-ink/20 rounded-full"></div>
             </div>
             <div className="space-y-2">
                <div className="h-1 w-full bg-ink/10 rounded-full"></div>
                <div className="h-1 w-4/5 bg-ink/10 rounded-full"></div>
                <div className="h-1 w-11/12 bg-ink/10 rounded-full"></div>
             </div>
         </div>
      </DashboardCard>
    </div>
  );
};

export function Hero({ onOpenWaitlist }) {
  return (
    <section className="relative min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32 noise-bg overflow-hidden flex items-center">
      <div className="absolute top-1/2 left-1/4 w-full h-full max-w-[800px] glow-coral opacity-40 z-0 -translate-x-1/2 -translate-y-1/2"></div>
      <GridBackground className="absolute inset-0 z-0" />
      
      {/* Pixel Art Brand Signatures */}
      <PixelDecoration type="cursor" className="absolute top-[35%] left-[5%] md:left-[10%] hidden lg:flex opacity-20" color="bg-ink" />
      <PixelDecoration type="sparkle" className="absolute top-[15%] left-[85%] hidden lg:flex opacity-30" color="bg-coral" />

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
                Campus Operations. <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-ink to-coral">Reimagined.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-ink/70 leading-relaxed max-w-xl mb-10">
                A modern operating system for colleges that brings attendance, academics, faculty workflows, student insights, and administration into one connected platform.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Button variant="coral" size="lg" className="w-full sm:w-auto" onClick={onOpenWaitlist}>
                Request Demo
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '#problem'}>
                See How It Works
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
