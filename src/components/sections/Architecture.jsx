import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import {
  Database,
  ShieldCheck,
  Zap,
  Globe,
  Cpu
} from "lucide-react";

const MiniGrid = ({ pattern }) => (
  <div className="grid grid-cols-5 gap-1">
    {pattern.map((val, i) => (
      <div 
        key={i} 
        className={`w-1.5 h-1.5 rounded-[1px] transition-colors ${
          val === 1 ? 'bg-coral' : val === 2 ? 'bg-coral/30' : val === 3 ? 'bg-ink/10' : 'bg-transparent'
        }`}
      ></div>
    ))}
  </div>
);

export function Architecture() {
  const bentoItems = [
    {
      title: "Unified Data Core",
      desc: "A single source of truth for all campus data, eliminating silos.",
      icon: <Database className="w-6 h-6 text-coral" />,
      className: "md:col-span-2 md:row-span-2 min-h-[320px]",
      visual: (
        <div className="absolute top-6 right-6 opacity-40">
          <div className="grid grid-cols-8 gap-1.5">
            {[0,0,3,1,1,3,0,0,
              0,3,2,1,1,2,3,0,
              3,2,1,2,2,1,2,3,
              1,1,2,0,0,2,1,1,
              1,1,2,0,0,2,1,1,
              3,2,1,2,2,1,2,3,
              0,3,2,1,1,2,3,0,
              0,0,3,1,1,3,0,0].map((v, i) => (
                <div key={i} className={`w-2 h-2 rounded-[2px] ${v === 1 ? 'bg-coral' : v === 2 ? 'bg-coral/40' : v === 3 ? 'bg-ink/10' : 'bg-transparent'}`}></div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Real-time Sync",
      desc: "Instant updates across all devices.",
      icon: <Zap className="w-6 h-6 text-coral" />,
      className: "md:col-span-1 md:row-span-1",
      visual: <div className="absolute top-6 right-6"><MiniGrid pattern={[0,3,0,0,0, 3,1,3,0,0, 0,3,1,3,0, 0,0,3,1,3, 0,0,0,3,0]} /></div>
    },
    {
      title: "Bank-grade Security",
      desc: "End-to-end encryption and compliance out of the box.",
      icon: <ShieldCheck className="w-6 h-6 text-coral" />,
      className: "md:col-span-1 md:row-span-1",
      visual: <div className="absolute top-6 right-6"><MiniGrid pattern={[3,3,3,3,3, 3,0,0,0,3, 3,0,1,0,3, 3,0,0,0,3, 3,3,3,3,3]} /></div>
    },
    {
      title: "API First",
      desc: "Connect with existing legacy systems easily.",
      icon: <Globe className="w-6 h-6 text-coral" />,
      className: "md:col-span-1 md:row-span-1",
      visual: <div className="absolute top-6 right-6"><MiniGrid pattern={[0,3,1,3,0, 3,0,2,0,3, 1,2,1,2,1, 3,0,2,0,3, 0,3,1,3,0]} /></div>
    },
    {
      title: "Microservices",
      desc: "Scalable architecture that grows with your institution.",
      icon: <Cpu className="w-6 h-6 text-coral" />,
      className: "md:col-span-2 md:row-span-1",
      visual: (
        <div className="absolute top-6 right-8 hidden sm:flex items-center gap-2 opacity-50">
          <div className="w-12 h-2 bg-coral/20 rounded-xl overflow-hidden"><div className="w-1/3 h-full bg-coral animate-[pulse_2s_ease-in-out_infinite]"></div></div>
          <div className="w-16 h-2 bg-ink/10 rounded-xl overflow-hidden"><div className="w-1/2 h-full bg-ink/30"></div></div>
          <div className="w-8 h-2 bg-coral/20 rounded-xl overflow-hidden"><div className="w-full h-full bg-coral animate-[pulse_3s_ease-in-out_infinite]"></div></div>
        </div>
      )
    }
  ];

  return (
    <section id="architecture" className="py-32 bg-canvas">
      <Container>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              Modern infrastructure.
            </h2>
            <p className="text-lg text-ink/70 leading-relaxed max-w-2xl mb-16">
              Edflo is built on a cutting-edge technology stack designed for reliability, speed, and seamless integration with your existing tools.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[200px]">
            {bentoItems.map((item, i) => (
              <FadeIn 
                key={i} 
                delay={0.1 * i} 
                className={`p-8 bg-white border border-ink/5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden min-h-[220px] md:min-h-0 ${item.className}`}
              >
                {item.visual}
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  {item.icon}
                </div>
                <div className="mt-auto relative z-10">
                  <h4 className="text-xl font-semibold text-ink mb-3">{item.title}</h4>
                  <p className="text-ink/60 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
