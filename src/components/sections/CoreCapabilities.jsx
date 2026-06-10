import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { BookOpen, Settings, BarChart2, LineChart, MessageSquare, Zap, BrainCircuit, CheckCircle2, Rocket } from "lucide-react";

const CapabilityCard = ({ title, icon: Icon, items, delay, className, badge }) => (
  <FadeIn delay={delay} className={`h-full ${className}`}>
    <div className="bg-white border border-ink/5 rounded-2xl shadow-sm p-8 h-full flex flex-col hover:shadow-md transition-all duration-300 relative">
      {badge && (
        <div className="absolute top-6 right-6 px-2 py-1  bg-ink/5 rounded text-[10px] font-bold text-ink/40 tracking-wider uppercase">
          {badge}
        </div>
      )}
      <div className="flex items-center gap-4 my-6 pr-16">
        <div className="w-10 h-10 rounded-lg bg-ink/5 flex items-center justify-center text-ink/70 shrink-0">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-medium tracking-tight text-ink">{title}</h3>
      </div>
      <ul className="space-y-3 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-[2px] bg-coral shrink-0 mt-2"></div>
            <span className="text-ink/80 leading-snug">{item}</span>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">
              Everything you need. <span className="text-ink/50">Nothing you don't.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Available Now */}
        <div className="mb-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <CheckCircle2 className="w-6 h-6 text-coral" />
              <h3 className="text-xl font-bold tracking-widest text-ink uppercase">Available Now</h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <CapabilityCard 
              title="Academic Operations"
              icon={BookOpen}
              delay={0.1}
              items={["Attendance marking", "Marks management", "Assessment tracking"]}
            />
            <CapabilityCard 
              title="Institution Management"
              icon={Settings}
              delay={0.2}
              items={["Student management", "Faculty management", "Department management", "Role-based permissions"]}
            />
            <CapabilityCard 
              title="Visibility & Reporting"
              icon={BarChart2}
              delay={0.3}
              items={["Real-time attendance dashboard", "Department-wise insights", "Faculty performance tracking"]}
            />
          </div>
        </div>

        {/* Coming Soon */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Rocket className="w-6 h-6 text-ink/40" />
              <h3 className="text-xl font-bold tracking-widest text-ink/40 uppercase">Coming Soon</h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto opacity-70">
            <CapabilityCard 
              title="Analytics"
              icon={LineChart}
              badge="PLANNED"
              delay={0.4}
              items={["Institutional dashboards", "Department insights", "Performance tracking"]}
            />
            <CapabilityCard 
              title="Communication"
              icon={MessageSquare}
              badge="PLANNED"
              delay={0.5}
              items={["Parent notifications", "Campus announcements", "Direct messaging"]}
            />
            <CapabilityCard 
              title="Automation"
              icon={Zap}
              badge="PLANNED"
              delay={0.6}
              items={["Automated report generation", "Trigger-based alerts", "Workflow scheduling"]}
            />
            <CapabilityCard 
              title="Campus Intelligence"
              icon={BrainCircuit}
              badge="PLANNED"
              delay={0.7}
              items={["Predictive at-risk student analysis", "Resource optimization", "AI curriculum mapping"]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
