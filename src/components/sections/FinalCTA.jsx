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
              Ready to run a <br className="hidden md:block"/>
              better campus?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Join the early access program and see how Edflo can transform your institution's operations.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-coral hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
              onClick={onOpenWaitlist}
            >
              Request Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-white/30 text-white bg-white/10"
              onClick={() => window.location.href = 'mailto:hello@edflo.com'}
            >
              Contact Sales
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
