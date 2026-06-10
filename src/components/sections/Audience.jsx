import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";

export function Audience() {
  const columns = [
    {
      title: "Students",
      desc: "A single destination to track attendance, assignments, and grades without navigating confusing legacy portals."
    },
    {
      title: "Faculty",
      desc: "Streamlined tools that reduce administrative overhead, leaving more time for actual teaching and mentorship."
    },
    {
      title: "College Administration",
      desc: "Centralized visibility into daily operations, simplifying compliance, scheduling, and resource allocation."
    },
    {
      title: "Institution Leadership",
      desc: "High-level insights across all departments to drive data-informed decisions for the entire campus."
    }
  ];

  return (
    <section className="py-24 bg-ink text-canvas border-t border-ink/10">
      <Container>
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-medium mb-16 tracking-tight">
            Designed for every layer<br className="hidden md:block"/> of campus operations.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((col, i) => (
            <FadeIn key={i} delay={0.1 * i} className="border-t border-canvas/20 pt-6">
              <h3 className="text-lg font-semibold mb-4 text-coral">{col.title}</h3>
              <p className="text-sm text-canvas/70 leading-relaxed">
                {col.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
