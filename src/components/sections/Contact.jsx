import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-canvas border-t border-ink/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start max-w-5xl mx-auto">
          <div>
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-ink">
                Let's talk about the future of your campus.
              </h2>
              <p className="text-lg text-ink/60 mb-12">
                Whether you have questions about our platform, need a pilot demonstration, or just want to chat about educational infrastructure, we're here.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.1} className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-coral mb-2">Email Us</h4>
                <a href="mailto:hello@edflo.com" className="text-xl font-medium hover:text-coral transition-colors">
                  hello@edflo.com
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <form className="p-8 bg-white border border-ink/5 rounded-xl shadow-sm space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-ink/70 uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-canvas/50 border border-ink/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 transition-shadow"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-ink/70 uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-canvas/50 border border-ink/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 transition-shadow"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-ink/70 uppercase tracking-wider">Work Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-canvas/50 border border-ink/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 transition-shadow"
                  placeholder="jane@university.edu"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-ink/70 uppercase tracking-wider">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 bg-canvas/50 border border-ink/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 transition-shadow resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button variant="coral" size="lg" className="w-full rounded-xl" type="submit">
                Send Message
              </Button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
