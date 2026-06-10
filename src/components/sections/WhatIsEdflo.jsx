import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { Building2, Users, GraduationCap, Users2 } from "lucide-react";

const EdfloIcon = ({ className }) => (
  <img src="/Edflo-logo.svg" alt="Edflo" className={className} />
);

const EcosystemNode = ({ label, icon: Icon, delay, x, y, className = "" }) => (
  <FadeIn delay={delay} className={`absolute ${x} ${y} flex flex-col items-center gap-2 md:gap-3 ${className} -translate-x-1/2 -translate-y-1/2`}>
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-ink/10 shadow-lg flex items-center justify-center relative z-10 hover:scale-110 transition-transform">
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-coral" />
      {/* Pulse effect */}
      <div className="absolute inset-0 border border-coral rounded-2xl animate-[ping_3s_infinite] opacity-20"></div>
    </div>
    <span className="text-xs md:text-sm font-semibold tracking-wide text-ink/80 bg-white/60 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full border border-ink/5 whitespace-nowrap">{label}</span>
  </FadeIn>
);

export function WhatIsEdflo() {
  return (
    <section id="ecosystem" className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">
              The Campus Operating System
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-ink/70 leading-relaxed">
              Edflo connects administration, faculty, students, and parents through one unified academic platform.
            </p>
          </FadeIn>
        </div>

        {/* Visual Ecosystem Diagram */}
        <div className="relative max-w-5xl mx-auto h-[700px] md:h-[500px] bg-canvas/30 rounded-3xl border border-ink/5 overflow-hidden">
          <div className="absolute inset-0 editorial-grid opacity-20"></div>

          {/* Desktop Animated SVG Data Flows (Orthogonal Tree) */}
          <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
             <defs>
               <linearGradient id="flowDesktop" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="transparent" />
                 <stop offset="50%" stopColor="#D97757" />
                 <stop offset="100%" stopColor="transparent" />
               </linearGradient>
             </defs>
             <style>
               {`
                 @keyframes flow-dash {
                   to {
                     stroke-dashoffset: -100;
                   }
                 }
               `}
             </style>
             
             {/* Base lines */}
             <g stroke="currentColor" strokeWidth="1" className="text-ink/10">
               <path d="M 500 250 L 500 125 L 250 125" fill="none" />
               <path d="M 500 250 L 500 125 L 750 125" fill="none" />
               <path d="M 500 250 L 500 375 L 250 375" fill="none" />
               <path d="M 500 250 L 500 375 L 750 375" fill="none" />
             </g>

             {/* Animated Flow */}
             <g stroke="url(#flowDesktop)" strokeWidth="2" strokeDasharray="4 8" className="animate-[flow-dash_4s_linear_infinite]">
               <path d="M 250 125 L 500 125 L 500 250" fill="none" />
               <path d="M 500 250 L 500 125 L 750 125" fill="none" />
               <path d="M 250 375 L 500 375 L 500 250" fill="none" />
               <path d="M 500 250 L 500 375 L 750 375" fill="none" />
             </g>
             
             {/* Connection Nodes */}
             <circle cx="500" cy="125" r="3" fill="currentColor" className="text-ink/20" />
             <circle cx="500" cy="375" r="3" fill="currentColor" className="text-ink/20" />
          </svg>
          
          {/* Mobile Animated SVG Data Flows (Hub and Spoke) */}
          <svg viewBox="0 0 400 700" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none block md:hidden" style={{ zIndex: 0 }}>
             <defs>
               <linearGradient id="flowMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                 <stop offset="0%" stopColor="transparent" />
                 <stop offset="50%" stopColor="#D97757" />
                 <stop offset="100%" stopColor="transparent" />
               </linearGradient>
             </defs>

             {/* Base lines */}
             <g stroke="currentColor" strokeWidth="1" className="text-ink/10">
               <path d="M 200 350 L 200 175 L 100 175" fill="none" />
               <path d="M 200 350 L 200 175 L 300 175" fill="none" />
               <path d="M 200 350 L 200 525 L 100 525" fill="none" />
               <path d="M 200 350 L 200 525 L 300 525" fill="none" />
             </g>

             {/* Animated Flow */}
             <g stroke="url(#flowMobile)" strokeWidth="2" strokeDasharray="4 8" className="animate-[flow-dash_4s_linear_infinite]">
               <path d="M 100 175 L 200 175 L 200 350" fill="none" />
               <path d="M 200 350 L 200 175 L 300 175" fill="none" />
               <path d="M 100 525 L 200 525 L 200 350" fill="none" />
               <path d="M 200 350 L 200 525 L 300 525" fill="none" />
             </g>

             {/* Connection Nodes */}
             <circle cx="200" cy="175" r="3" fill="currentColor" className="text-ink/20" />
             <circle cx="200" cy="525" r="3" fill="currentColor" className="text-ink/20" />
          </svg>

          {/* Shared Nodes (Responsive Hub and Spoke Positions) */}
          <EcosystemNode label="College Admin" icon={Building2} delay={0.2} x="left-[25%]" y="top-[25%]" />
          <EcosystemNode label="Faculty" icon={Users} delay={0.3} x="left-[75%]" y="top-[25%]" />
          
          {/* Central Core Node */}
          <EcosystemNode label="Edflo OS" icon={EdfloIcon} delay={0.4} className="scale-110" x="left-[50%]" y="top-[50%]" />
          
          <EcosystemNode label="Students" icon={GraduationCap} delay={0.5} x="left-[25%]" y="top-[75%]" />
          <EcosystemNode label="Parents" icon={Users2} delay={0.6} x="left-[75%]" y="top-[75%]" />
        </div>
      </Container>
    </section>
  );
}
