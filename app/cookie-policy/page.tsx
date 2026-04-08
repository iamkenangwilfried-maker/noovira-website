import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Noovira AI",
  description: "Learn how Noovira AI uses cookies and similar tracking technologies on our website.",
};

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-5">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Legal</span>
            <h1 className="text-4xl font-bold text-navy mt-2 mb-4">Cookie Policy</h1>
            <p className="text-secondary text-sm">Last updated: April 8, 2026</p>
          </div>

          <div className="space-y-8 text-secondary">

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">1. What Are Cookies?</h2>
              <p className="text-sm leading-relaxed">
                Cookies are small text files placed on your device (computer, tablet, or phone) when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide information to website owners about how their site is used.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">2. How We Use Cookies</h2>
              <p className="text-sm leading-relaxed mb-3">
                Noovira AI uses cookies on <strong>nooviraai.com</strong> to:
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Ensure the website functions correctly and loads efficiently.</li>
                <li>Remember your preferences and settings across sessions.</li>
                <li>Analyze how visitors interact with our site to improve user experience.</li>
                <li>Track the effectiveness of our marketing and outreach efforts.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">3. Types of Cookies We Use</h2>

              <div className="space-y-5">
                <div className="bg-white border border-card-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-navy mb-2">Strictly Necessary Cookies</h3>
                  <p className="text-sm leading-relaxed">
                    These cookies are essential for the website to function. They enable core features such as page navigation, secure areas, and form submissions. The website cannot function properly without these cookies, and they cannot be disabled.
                  </p>
                </div>

                <div className="bg-white border border-card-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-navy mb-2">Performance & Analytics Cookies</h3>
                  <p className="text-sm leading-relaxed">
                    These cookies collect anonymous information about how visitors use our website — which pages are visited most often, where visitors come from, and how they navigate the site. We use this data to improve how our website works. Tools may include Google Analytics or similar services.
                  </p>
                </div>

                <div className="bg-white border border-card-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-navy mb-2">Functional Cookies</h3>
                  <p className="text-sm leading-relaxed">
                    These cookies allow our website to remember choices you make (such as your region or language) to provide a more personalized experience. They may also be set by embedded third-party tools such as our Cal.com booking widget.
                  </p>
                </div>

                <div className="bg-white border border-card-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-navy mb-2">Marketing & Tracking Cookies</h3>
                  <p className="text-sm leading-relaxed">
                    These cookies are used to track visitors across websites and display relevant ads. They are set by us or by third-party advertising partners. These cookies are only active if you have provided your consent.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">4. Third-Party Cookies</h2>
              <p className="text-sm leading-relaxed mb-3">
                Some cookies on our site are set by third-party services embedded in our pages. These services include:
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li><strong>Cal.com</strong> — for our inline booking calendar.</li>
                <li><strong>Google Analytics</strong> — for website traffic analysis.</li>
                <li><strong>YouTube</strong> — for embedded video content.</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                These third parties have their own privacy and cookie policies. We recommend reviewing their policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">5. How to Control Cookies</h2>
              <p className="text-sm leading-relaxed mb-3">
                You can control and manage cookies in several ways:
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li><strong>Browser settings</strong> — Most browsers allow you to refuse or delete cookies. Visit your browser&apos;s help section for instructions.</li>
                <li><strong>Opt-out tools</strong> — You can opt out of Google Analytics tracking via the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Analytics Opt-out Browser Add-on</a>.</li>
                <li><strong>Third-party opt-outs</strong> — Visit <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">youronlinechoices.com</a> (EU) or <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">optout.aboutads.info</a> (US) for ad-related cookies.</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                Please note that restricting cookies may impact the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">6. Cookie Consent</h2>
              <p className="text-sm leading-relaxed">
                By continuing to use our website, you consent to our use of cookies as described in this policy. You may withdraw your consent at any time by adjusting your browser settings or contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">7. Changes to This Policy</h2>
              <p className="text-sm leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Changes will be posted on this page with a revised date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">8. Contact</h2>
              <p className="text-sm leading-relaxed">
                For any questions about our use of cookies, please contact us at:<br />
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
