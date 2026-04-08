import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Noovira AI",
  description: "Learn how Noovira AI collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-5">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Legal</span>
            <h1 className="text-4xl font-bold text-navy mt-2 mb-4">Privacy Policy</h1>
            <p className="text-secondary text-sm">Last updated: April 8, 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-secondary">

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">1. Who We Are</h2>
              <p className="text-sm leading-relaxed">
                Noovira AI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a digital agency that builds free websites and AI-powered systems for roofing contractors. Our registered business operates online at <strong>nooviraai.com</strong>. If you have any questions about this policy, contact us at <a href="mailto:hello@nooviraai.com" className="text-accent hover:underline">hello@nooviraai.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">2. Information We Collect</h2>
              <p className="text-sm leading-relaxed mb-3">We collect the following types of information:</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li><strong>Contact information</strong> — name, email address, phone number, and business name when you book a call or fill out a form.</li>
                <li><strong>Usage data</strong> — pages visited, time on site, referring URLs, browser type, and device type via analytics tools.</li>
                <li><strong>Communication data</strong> — messages, emails, or notes you send us directly.</li>
                <li><strong>Cookies</strong> — small files stored on your device to improve site performance and user experience (see our Cookie Policy).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">3. How We Use Your Information</h2>
              <p className="text-sm leading-relaxed mb-3">We use your information to:</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Schedule and conduct strategy calls with you.</li>
                <li>Deliver and improve our services.</li>
                <li>Send relevant follow-up communications about your project.</li>
                <li>Analyze website traffic to improve user experience.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">We do <strong>not</strong> sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-sm leading-relaxed">
                For users in the European Economic Area (EEA) and UK, we process personal data under the following legal bases: <strong>Consent</strong> (for cookies and marketing communications), <strong>Contractual necessity</strong> (to deliver our services), and <strong>Legitimate interests</strong> (for analytics and business operations).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">5. Data Sharing</h2>
              <p className="text-sm leading-relaxed mb-3">We may share your data with trusted third-party service providers strictly to operate our business:</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li><strong>Cal.com</strong> — for scheduling calls.</li>
                <li><strong>Vercel</strong> — for website hosting.</li>
                <li><strong>Google Analytics / similar tools</strong> — for site analytics.</li>
                <li><strong>Email service providers</strong> — for sending communications.</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">All third-party providers are required to handle your data in compliance with applicable privacy laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">6. Data Retention</h2>
              <p className="text-sm leading-relaxed">
                We retain your personal data only as long as necessary to provide our services or as required by law. Contact data is retained for up to 3 years after last interaction. You may request deletion at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">7. Your Rights</h2>
              <p className="text-sm leading-relaxed mb-3">Depending on your location, you may have the right to:</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Object to or restrict our processing of your data.</li>
                <li>Request data portability.</li>
                <li>Withdraw consent at any time (where processing is based on consent).</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">To exercise any of these rights, email us at <a href="mailto:hello@nooviraai.com" className="text-accent hover:underline">hello@nooviraai.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">8. Security</h2>
              <p className="text-sm leading-relaxed">
                We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. However, no internet transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">9. International Transfers</h2>
              <p className="text-sm leading-relaxed">
                Noovira AI serves clients in the US, UK, Australia, and New Zealand. Your data may be processed in countries outside your own. We ensure appropriate safeguards are in place for all international transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">10. Changes to This Policy</h2>
              <p className="text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">11. Contact</h2>
              <p className="text-sm leading-relaxed">
                For any questions or concerns about this Privacy Policy, please contact us at:<br />
                <a href="mailto:hello@nooviraai.com" className="text-accent hover:underline">hello@nooviraai.com</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
