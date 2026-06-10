import { Container } from "../components/ui/Container";
import { FadeIn } from "../components/ui/FadeIn";

export function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-canvas">
      <Container className="max-w-3xl">
        <FadeIn>
          <div className="mb-12 border-b border-ink/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-ink/60">Last updated: June 2026</p>
          </div>
          
          <div className="prose prose-ink max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-ink/80 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-ink/80 prose-li:mb-2">
            <p>
              At Edflo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our Campus Operating System platform.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, or when you join our waitlist. This may include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name and contact data (such as email address)</li>
              <li>Professional information (such as your role and institution name)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect or receive to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Communicate with you regarding our platform updates</li>
              <li>Provide you with access to our platform phases</li>
              <li>Improve our website and services based on user feedback</li>
              <li>Respond to your inquiries</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>

            <h2>4. Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@edflo.com" className="text-coral hover:underline">privacy@edflo.com</a>
            </p>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
