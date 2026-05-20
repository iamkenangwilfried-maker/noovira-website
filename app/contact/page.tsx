import Navbar  from "@/components/sections/navbar";
import Footer  from "@/components/sections/footer";
import ContactContent from "@/components/pages/contact-content";

export const metadata = {
  title: "Nous Contacter | Noovira AI — Réservez votre appel",
  description:
    "Réservez un appel gratuit de 30 minutes avec l'équipe Noovira. Discutons de votre projet de site web pour votre entreprise artisanale en Suisse.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
