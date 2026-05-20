import Navbar   from "@/components/sections/navbar";
import Footer   from "@/components/sections/footer";
import FAQ      from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import GestionContent from "@/components/pages/gestion-content";

export const metadata = {
  title: "Gestion de Site Web | Noovira AI — Maintenance & Support",
  description:
    "Hébergement, sécurité, mises à jour, corrections de bugs et support technique inclus. Votre site tourne sans que vous ayez à vous en occuper.",
};

export default function GestionDeSitePage() {
  return (
    <main>
      <Navbar />
      <GestionContent />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
