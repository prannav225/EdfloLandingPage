import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { BookOpen, Settings, BarChart2, ShieldCheck } from "lucide-react";

const CapabilityCard = ({ title, icon: Icon, items, delay, className }) => (
  <FadeIn delay={delay} className={`h-full ${className}`}>
    <div className="bg-white border border-ink/5 rounded-2xl shadow-sm p-8 h-full flex flex-col hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-lg bg-ink/5 flex items-center justify-center text-ink/70">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-medium tracking-tight text-ink">{title}</h3>
      </div>
      <ul className="space-y-3 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-[2px] bg-coral"></div>
            <span className="text-ink/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </FadeIn>
);

export function CoreCapabilities() {
  return (
    <section id="capabilities" className="py-24 bg-white border-t border-ink/10 relative">
      <Container>
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-medium mb-16 tracking-tight text-center max-w-3xl mx-auto">
            Everything you need. <br />
            <span className="text-ink/50">Nothing you don't.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <CapabilityCard 
            title="Academic Operations"
            icon={BookOpen}
            delay={0.1}
            items={["Attendance", "Marks", "Assessments"]}
          />
          <CapabilityCard 
            title="Institution Management"
            icon={Settings}
            delay={0.2}
            items={["Students", "Faculty", "Departments", "Subjects"]}
          />
          <CapabilityCard 
            title="Visibility & Reporting"
            icon={BarChart2}
            delay={0.3}
            items={["Analytics", "Department Insights", "Faculty Insights"]}
          />
          <CapabilityCard 
            title="Platform Controls"
            icon={ShieldCheck}
            delay={0.4}
            items={["Roles & Permissions", "Feature Flags", "Subscription Controls"]}
          />
        </div>
      </Container>
    </section>
  );
}
