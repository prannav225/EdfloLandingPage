import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";

export function BuildingInPublic({ onOpenWaitlist }) {
  return (
    <section className="py-32 bg-white border-y border-ink/10">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block px-3 py-1 mb-8 rounded-full border border-coral/30 bg-coral/5 text-coral text-xs font-medium uppercase tracking-widest">
              Early Stage
            </div>
            <h2 className="text-3xl md:text-5xl font-medium mb-8 tracking-tight">
              Actively building.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl text-ink/70 leading-relaxed mb-6">
              We're currently developing Edflo with a focus on solving everyday operational challenges inside educational institutions.
            </p>
            <p className="text-xl text-ink/70 leading-relaxed mb-12">
              We believe campus software should feel modern, connected and effortless.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-center">
            <Button variant="coral" size="lg" className="mb-6" onClick={onOpenWaitlist}>
              Join Waitlist
            </Button>
            <p className="text-sm text-ink/50">
              Interested in piloting Edflo at your institution? <a href="#" className="text-coral hover:underline underline-offset-4">Let's talk.</a>
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
