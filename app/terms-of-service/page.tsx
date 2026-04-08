import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Noovira AI",
  description: "Read the terms and conditions governing your use of Noovira AI services.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-5">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Legal</span>
            <h1 className="text-4xl font-bold text-navy mt-2 mb-4">Terms of Service</h1>
            <p className="text-secondary text-sm">Last updated: April 8, 2026</p>
          </div>

          <div className="space-y-8 text-secondary">

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">1. Agreement to Terms</h2>
              <p className="text-sm leading-relaxed">
                By accessing or using the Noovira AI website (<strong>nooviraai.com</strong>) or any of our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">2. Description of Services</h2>
              <p className="text-sm leading-relaxed mb-3">
                Noovira AI provides the following services to roofing contractors:
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li><strong>Free Website Build</strong> — A professional website delivered within 48 hours at no upfront cost.</li>
                <li><strong>Speed to Lead AI</strong> — Automated AI follow-up system to convert missed calls and leads.</li>
                <li><strong>Google Reviews Automation</strong> — Systems to generate and manage Google reviews.</li>
                <li><strong>Database Reactivation</strong> — Campaigns to re-engage dormant leads and past customers.</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                Service details, deliverables, and pricing are agreed upon individually via a strategy call and confirmed in a separate service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">3. Client Responsibilities</h2>
              <p className="text-sm leading-relaxed mb-3">As a client or prospective client, you agree to:</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Provide accurate and complete information during onboarding and throughout the engagement.</li>
                <li>Grant timely access to any required accounts, credentials, or assets needed to deliver services.</li>
                <li>Respond to communications within a reasonable timeframe to avoid project delays.</li>
                <li>Not use our services for any unlawful purpose or in violation of applicable laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">4. Payment Terms</h2>
              <p className="text-sm leading-relaxed">
                Website builds are provided at no upfront cost. Ongoing AI system services are billed according to the plan selected during onboarding. All fees, billing cycles, and payment methods are specified in your individual service agreement. Late or failed payments may result in service suspension. All fees are non-refundable unless otherwise stated in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">5. Intellectual Property</h2>
              <p className="text-sm leading-relaxed">
                All content, branding, and materials on <strong>nooviraai.com</strong> (including text, graphics, logos, and code) are the property of Noovira AI and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
              </p>
              <p className="text-sm leading-relaxed mt-3">
                Upon full payment, clients own the content and assets created specifically for their project. Noovira AI retains the right to display completed work in portfolios and marketing materials unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">6. Limitation of Liability</h2>
              <p className="text-sm leading-relaxed">
                Noovira AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, including but not limited to lost revenue, lost leads, or business interruption. Our total liability in any matter related to these terms shall not exceed the total amount paid by you to Noovira AI in the 3 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">7. No Guarantee of Results</h2>
              <p className="text-sm leading-relaxed">
                While we work hard to deliver strong results for every client, we cannot guarantee specific outcomes such as a defined number of leads, calls, or revenue generated. Results depend on various factors including market conditions, client responsiveness, and the quality of information provided.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">8. Termination</h2>
              <p className="text-sm leading-relaxed">
                Either party may terminate a service engagement with written notice as specified in the individual service agreement. Noovira AI reserves the right to suspend or terminate access to services immediately if you breach these terms or engage in fraudulent or harmful conduct.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">9. Governing Law</h2>
              <p className="text-sm leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with applicable laws. Disputes will be resolved through good-faith negotiation first, followed by binding arbitration if necessary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">10. Changes to Terms</h2>
              <p className="text-sm leading-relaxed">
                We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with a revised date. Continued use of our services after changes are posted constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">11. Contact</h2>
              <p className="text-sm leading-relaxed">
                For any questions regarding these Terms of Service, please contact us at:<br />
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
