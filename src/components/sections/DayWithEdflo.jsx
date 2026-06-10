import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { Building2, Users, GraduationCap, Users2 } from "lucide-react";

const StakeholderCard = ({ title, icon: Icon, items, delay }) => (
  <FadeIn delay={delay}>
    <div className="bg-white border border-ink/5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-ink/5 bg-canvas/30 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center text-coral shrink-0">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-medium tracking-tight text-ink">{title}</h3>
      </div>
      <div className="p-6 flex-1">
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-ink/5 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 bg-ink/60 rounded-[2px]"></div>
              </div>
              <span className="text-ink/80 leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </FadeIn>
);

export function DayWithEdflo() {
  return (
    <section className="py-24 bg-canvas border-t border-ink/10 relative overflow-hidden">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              One Platform. Every Stakeholder.
            </h2>
            <p className="text-xl text-ink/70">
              Tailored experiences for everyone on campus, connected by a single unified database.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StakeholderCard 
            title="College Admin"
            icon={Building2}
            delay={0.1}
            items={[
              "Manage students",
              "Manage faculty",
              "Configure departments",
              "Control permissions"
            ]}
          />
          <StakeholderCard 
            title="Faculty"
            icon={Users}
            delay={0.2}
            items={[
              "Mark attendance",
              "Enter marks",
              "Track student progress"
            ]}
          />
          <StakeholderCard 
            title="Students"
            icon={GraduationCap}
            delay={0.3}
            items={[
              "View attendance",
              "View marks",
              "Monitor academic performance"
            ]}
          />
          <StakeholderCard 
            title="Parents"
            icon={Users2}
            delay={0.4}
            items={[
              "Track attendance",
              "View performance updates"
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
