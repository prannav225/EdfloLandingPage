import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { Shield, Key, Database, Cloud } from "lucide-react";

const TrustCard = ({ title, description, icon: Icon, delay }) => (
  <FadeIn delay={delay}>
    <div className="p-8 bg-white border border-ink/10 rounded-xl shadow-sm h-full">
      <div className="w-12 h-12 rounded-lg bg-ink/5 flex items-center justify-center text-ink mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-medium text-ink mb-3">{title}</h3>
      <p className="text-ink/70 leading-relaxed">
        {description}
      </p>
    </div>
  </FadeIn>
);

export function TrustGovernance() {
  return (
    <section id="trust" className="py-24 bg-canvas border-t border-ink/10 relative overflow-hidden">
      {/* Secure background pattern */}
      <div className="absolute inset-0 z-0 opacity-30 editorial-grid"></div>
      
      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-ink/20 bg-white/60 shadow-sm backdrop-blur-sm text-xs font-semibold uppercase tracking-widest text-ink">
              <Shield size={14} />
              Enterprise Grade
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              Built for Institutional Operations
            </h2>
            <p className="text-xl text-ink/70">
              Edflo provides the security, control, and visibility required by modern educational institutions.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <TrustCard 
            title="Role Based Access"
            description="Control exactly who can view, edit, or approve academic data. Custom permission levels ensure data stays with the right people."
            icon={Key}
            delay={0.1}
          />
          <TrustCard 
            title="Institution Data Isolation"
            description="Your college's data is strictly separated and siloed. We treat institutional privacy as a fundamental architectural requirement."
            icon={Database}
            delay={0.2}
          />
          <TrustCard 
            title="Audit Visibility"
            description="Track important actions and updates across the platform. Always know who changed a grade or modified an attendance record."
            icon={Shield}
            delay={0.3}
          />
          <TrustCard 
            title="Cloud Hosted"
            description="Accessible securely from anywhere. No local servers to maintain, no complicated on-premise installations required."
            icon={Cloud}
            delay={0.4}
          />
        </div>
      </Container>
    </section>
  );
}
