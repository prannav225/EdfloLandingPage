import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { Zap, MessageSquare, BrainCircuit, LineChart, BookOpen } from "lucide-react";

const VisionCard = ({ category, status, icon: Icon, items, delay }) => {
  const getStatusStyle = () => {
    switch(status) {
      case "Building Now": return "bg-coral/10 text-coral border-coral/20";
      case "Planned": return "bg-ink/5 text-ink/60 border-ink/10";
      case "Exploring": return "bg-white text-ink/40 border-ink/5";
      default: return "";
    }
  };

  return (
    <FadeIn delay={delay} className="h-full">
      <div className="bg-white border border-ink/5 rounded-2xl shadow-sm p-6 sm:p-8 h-full flex flex-col hover:-translate-y-1 transition-transform">
        <div className="flex flex-col sm:flex-row sm:items-start lg:items-center justify-between gap-4 mb-6 border-b border-ink/5 pb-6">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${status === 'Building Now' ? 'bg-coral text-white' : 'bg-ink/5 text-ink/50'}`}>
              <Icon size={20} />
            </div>
            <h3 className="text-xl font-medium tracking-tight text-ink leading-tight">{category}</h3>
          </div>
          <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border whitespace-nowrap shrink-0 ${getStatusStyle()}`}>
            {status}
          </span>
        </div>
        
        <ul className="space-y-3 flex-1">
          {items.map((item, i) => (
            <li key={i} className={`flex items-start gap-3 ${status === 'Exploring' ? 'opacity-50' : 'opacity-80'}`}>
              <div className="w-5 h-5 rounded-full bg-ink/5 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 bg-ink/60 rounded-[2px]"></div>
              </div>
              <span className="text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
};

export function FutureVision() {
  const roadmap = [
    {
      category: "Academic Operations",
      status: "Building Now",
      icon: BookOpen,
      items: ["Advanced Attendance Workflows", "Dynamic Grading Systems", "Assessment Management"]
    },
    {
      category: "Analytics",
      status: "Building Now",
      icon: LineChart,
      items: ["Institutional Dashboards", "Department level insights", "Performance Tracking"]
    },
    {
      category: "Communication",
      status: "Planned",
      icon: MessageSquare,
      items: ["Parent Notifications", "Campus Announcements", "Direct Messaging"]
    },
    {
      category: "Automation",
      status: "Planned",
      icon: Zap,
      items: ["Automated Report Generation", "Trigger-based Alerts", "Workflow Scheduling"]
    },
    {
      category: "Campus Intelligence",
      status: "Exploring",
      icon: BrainCircuit,
      items: ["Predictive At-Risk Analysis", "Resource Optimization", "AI Curriculum Mapping"]
    }
  ];

  return (
    <section className="py-24 bg-canvas border-t border-ink/10 relative overflow-hidden">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              Building the Future Campus Stack
            </h2>
            <p className="text-xl text-ink/70">
              Edflo is an evolving platform. We're continuously expanding our capabilities to serve every aspect of your institution.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {roadmap.map((block, i) => (
            <div key={i} className={`${i === 3 ? 'lg:col-start-1 lg:col-end-2' : ''} ${i === 4 ? 'lg:col-start-2 lg:col-end-4' : ''}`}>
               <VisionCard {...block} delay={0.1 * i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
