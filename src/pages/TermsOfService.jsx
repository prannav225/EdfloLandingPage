import { Container } from "../components/ui/Container";
import { FadeIn } from "../components/ui/FadeIn";

export function TermsOfService() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-canvas">
      <Container className="max-w-3xl">
        <FadeIn>
          <div className="mb-12 border-b border-ink/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-ink/60">Last updated: June 2026</p>
          </div>
          
          <div className="prose prose-ink max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-ink/80 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-ink/80 prose-li:mb-2">
            <p>
              Welcome to Edflo. Please read these Terms of Service carefully before using our website and services. By accessing or using our platform, you agree to be bound by these terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website and utilizing the Edflo Campus Operating System, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Edflo provides a unified infrastructure platform for educational institutions, including tools for attendance, records, faculty workflows, and campus administration. We are currently in an Early Stage rollout phase.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or devices. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content included on the platform, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of Edflo or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.
            </p>

            <h2>5. Changes to Terms</h2>
            <p>
              Edflo reserves the right, in its sole discretion, to change the Terms under which our services are offered. The most current version of the Terms will supersede all previous versions.
            </p>

            <h2>6. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms, please contact us at: <a href="mailto:legal@edflo.com" className="text-coral hover:underline">legal@edflo.com</a>
            </p>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
