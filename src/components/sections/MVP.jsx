import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { Check, Circle } from "lucide-react";

export function MVP() {
  const roadmap = [
    {
      phase: "Now",
      items: [
        "Attendance Management",
        "Marks Management",
        "Student Records",
        "Faculty Workflows",
        "Role-Based Access"
      ],
      icon: <Check className="w-4 h-4 text-coral" />,
      active: true
    },
    {
      phase: "Next",
      items: [
        "Timetables",
        "Assignments",
        "Campus Communication",
        "Analytics"
      ],
      icon: <Circle className="w-4 h-4 text-ink/30" />,
      active: false
    },
    {
      phase: "Future",
      items: [
        "AI-Powered Insights",
        "Institutional Reporting",
        "Academic Automation"
      ],
      icon: <Circle className="w-4 h-4 text-ink/30" />,
      active: false
    }
  ];

  return (
    <section id="mvp" className="py-24 bg-canvas border-t border-ink/10">
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-medium mb-16 tracking-tight text-center">
              What we're building right now.
            </h2>
          </FadeIn>

          <div className="space-y-12">
            {roadmap.map((block, i) => (
              <FadeIn key={i} delay={0.1 * i} className="relative pl-8 md:pl-0">
                <div className="hidden md:flex absolute top-0 left-[-40px] h-full flex-col items-center">
                  <div className="bg-canvas p-1 z-10">{block.icon}</div>
                  {i !== roadmap.length - 1 && <div className="w-px h-full bg-ink/10 -mt-2"></div>}
                </div>
                
                <div className="md:ml-12 bg-white border border-ink/5 rounded-xl shadow-sm p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="md:hidden">{block.icon}</span>
                    <h3 className={`text-xl font-medium ${block.active ? 'text-coral' : 'text-ink/50'}`}>
                      {block.phase}
                    </h3>
                  </div>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {block.items.map((item, j) => (
                      <li key={j} className={`text-sm ${block.active ? 'text-ink/80' : 'text-ink/40'} flex items-start gap-2`}>
                        <span className="text-ink/20 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
