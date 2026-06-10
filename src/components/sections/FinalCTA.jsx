import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";
import { PixelDecoration } from "../ui/PixelDecoration";

export function FinalCTA({ onOpenWaitlist }) {
  return (
    <section className="py-32 bg-coral text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl"></div>
      
      {/* Pixel Art / Grid elements */}
      <div className="absolute inset-0 z-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[32px_32px]"></div>
      
      <PixelDecoration type="cursor" className="absolute top-24 left-16 md:left-32 opacity-40" color="bg-white" />
      <PixelDecoration type="sparkle" className="absolute bottom-24 right-16 md:right-32 opacity-40" color="bg-white" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8">
              Ready to transform <br className="hidden md:block"/>
              your campus?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Join early-access colleges and manage attendance, marks, and campus operations in one place.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex flex-col items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-12 bg-white text-coral hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
              onClick={onOpenWaitlist}
            >
              Request Demo
            </Button>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-white/60">
                Questions? Reach out to us at <a href="mailto:hello@edflo.com" className="text-white underline hover:opacity-80">hello@edflo.com</a>
              </p>
              <div className="inline-flex items-center justify-center gap-2 mt-4 px-4 py-1.5 bg-white/10 border border-white/10 rounded-full">
                <span className="w-2 h-2 rounded-[2px] bg-white opacity-80 animate-pulse"></span>
                <span className="text-sm font-medium text-white/90 tracking-wide">Pricing Coming Soon</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
