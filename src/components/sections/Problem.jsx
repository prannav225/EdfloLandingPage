import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";

const PainPointCard = ({ title, description, delay }) => (
  <FadeIn delay={delay} className="h-full">
    <div className="p-6 bg-white border border-ink/5 rounded-xl shadow-sm flex flex-col gap-4 transition-transform hover:-translate-y-1 h-full">
      <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
        <div className="w-3 h-3 bg-coral rounded-[2px]"></div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
        <p className="text-ink/70 leading-relaxed">{description}</p>
      </div>
    </div>
  </FadeIn>
);

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-canvas border-t border-ink/10 relative overflow-hidden">
      {/* Decorative disconnected background dots */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute top-20 left-10 w-2.5 h-2.5 bg-ink rounded-[2px] opacity-30"></div>
         <div className="absolute top-40 right-20 w-2.5 h-2.5 bg-ink rounded-[2px] opacity-30"></div>
         <div className="absolute bottom-20 left-1/4 w-2.5 h-2.5 bg-coral rounded-[2px] opacity-30"></div>
         <div className="absolute bottom-40 right-1/4 w-2.5 h-2.5 bg-ink rounded-[2px] opacity-30"></div>
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-16 tracking-tight text-center max-w-4xl mx-auto">
            Colleges Run on <span className="text-transparent bg-clip-text bg-linear-to-r from-coral to-ink">Too Many Systems.</span>
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 max-w-6xl mx-auto">
           <PainPointCard title="Less Administrative Work" description="Stop managing attendance in 3 different tools. Mark once, sync everywhere." delay={0.1} />
           <PainPointCard title="Better Faculty Experience" description="Mark 100 students' attendance in 2 minutes. Upload marks without spreadsheets." delay={0.2} />
           <PainPointCard title="Greater Student Visibility" description="Students see their attendance % and marks instantly—no more 'when will results come out?'" delay={0.3} />
           <PainPointCard title="Parent Transparency" description="Parents track their child's attendance and performance in real-time." delay={0.4} />
           <PainPointCard title="Actionable Insights" description="See attendance trends, identify at-risk students, and track performance by department." delay={0.5} />
           <PainPointCard title="One Unified Platform" description="Replace your fragmented tools with a single campus operating system." delay={0.6} />
        </div>

        <FadeIn delay={0.8}>
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Connecting lines aesthetic */}
            <div className="absolute left-1/2 -top-12 w-px h-12 bg-linear-to-b from-transparent to-ink -translate-x-1/2"></div>
            
            <div className="relative overflow-hidden rounded-3xl bg-ink text-canvas px-6 py-8 md:p-16 shadow-2xl border border-white/10 group">
              {/* Animated subtle background glow */}
              <div className="absolute top-0 left-1/2 w-[150%] h-full bg-linear-to-b from-coral/20 to-transparent -translate-x-1/2 opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-80"></div>
              
               <h3 className="text-3xl md:text-5xl font-medium tracking-tight relative z-10 leading-tight">
                 Academic operations <br className="hidden md:block"/> shouldn't be <span className="text-coral">fragmented.</span>
               </h3>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
