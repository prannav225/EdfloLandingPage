import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-canvas border-t border-ink/10">
      <Container>
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-medium mb-16 tracking-tight">
            Campuses run on disconnected systems.
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <FadeIn delay={0.1}>
            <div className="p-8 bg-white border border-ink/5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-coral">Students</h3>
              <p className="text-ink/80 leading-relaxed">
                "Important information is scattered across portals, spreadsheets and messaging apps."
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="p-8 bg-white border border-ink/5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-coral">Faculty</h3>
              <p className="text-ink/80 leading-relaxed">
                "Administrative work consumes time that should be spent teaching."
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="p-8 bg-white border border-ink/5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-coral">Administration</h3>
              <p className="text-ink/80 leading-relaxed">
                "Managing operations across departments often means juggling multiple tools."
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="text-3xl md:text-5xl font-heading font-medium tracking-tight text-ink leading-tight">
              "Campus infrastructure hasn't evolved as quickly as the people using it."
            </p>
          </blockquote>
        </FadeIn>
      </Container>
    </section>
  );
}
