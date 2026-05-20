import Navbar       from "@/components/sections/navbar";
import Footer       from "@/components/sections/footer";
import FAQ          from "@/components/sections/faq";
import FinalCTA     from "@/components/sections/final-cta";
import SeoContent   from "@/components/pages/seo-content";

export const metadata = {
  title: "SEO Local & Google Ads | Noovira AI — Artisans Suisses",
  description:
    "Référencement local et publicité Google Ads pour les artisans et PMEs du bâtiment en Suisse romande. Attirez des clients qualifiés dans votre zone.",
};

export default function SeoPubPage() {
  return (
    <main>
      <Navbar />
      <SeoContent />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
