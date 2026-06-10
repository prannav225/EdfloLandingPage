import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";

export function Philosophy() {
  const principles = [
    {
      title: "Reduce Complexity",
      desc: "Software should abstract administrative overhead, not add to it."
    },
    {
      title: "Increase Visibility",
      desc: "Every stakeholder deserves a clear view of the information relevant to them."
    },
    {
      title: "Connect Workflows",
      desc: "Data shouldn't exist in silos. Actions in one area should inform the others."
    }
  ];

  return (
    <section className="py-32 bg-canvas">
      <Container>
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-medium mb-24 tracking-tight text-center">
            Built around clarity.
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-16 md:gap-24 max-w-4xl mx-auto">
          {principles.map((principle, i) => (
            <FadeIn key={i} delay={0.1 * i} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-start">
              <div className="text-sm font-mono text-ink/40 tracking-widest">
                0{i + 1}
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-4xl font-medium mb-4 text-ink">
                  {principle.title}
                </h3>
                <p className="text-lg text-ink/60 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
