import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

const OutcomeCard = ({ title, description, delay }) => (
  <FadeIn delay={delay}>
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-coral">
          <CheckCircle2 size={24} />
        </div>
        <h3 className="text-lg font-medium text-ink">{title}</h3>
      </div>
      <p className="text-ink/70 leading-relaxed pl-9">
        {description}
      </p>
    </div>
  </FadeIn>
);

export function WhyChooseEdflo() {
  return (
    <section className="py-24 bg-white border-t border-ink/10">
      <Container>
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 max-w-2xl">
            Why Colleges Choose Edflo
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          <OutcomeCard 
            title="Less Administrative Work"
            description="Reduce repetitive academic processes and automate manual reporting."
            delay={0.1}
          />
          <OutcomeCard 
            title="Better Faculty Experience"
            description="Simplify daily workflows so teachers can focus on teaching, not software."
            delay={0.2}
          />
          <OutcomeCard 
            title="Greater Student Visibility"
            description="Give students real-time access to their attendance and academic data."
            delay={0.3}
          />
          <OutcomeCard 
            title="Parent Transparency"
            description="Keep parents informed automatically without extra administrative overhead."
            delay={0.4}
          />
          <OutcomeCard 
            title="Actionable Insights"
            description="Support academic decisions with accurate, institution-wide data."
            delay={0.5}
          />
        </div>
      </Container>
    </section>
  );
}
