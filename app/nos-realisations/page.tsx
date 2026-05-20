import Navbar    from "@/components/sections/navbar";
import Portfolio  from "@/components/sections/portfolio";
import FinalCTA   from "@/components/sections/final-cta";
import Footer     from "@/components/sections/footer";

export const metadata = {
  title: "Nos Réalisations | Noovira AI — Sites Web Artisans & BTP",
  description:
    "Découvrez les sites web créés par Noovira pour des artisans et PMEs du bâtiment en Suisse. Construction, couverture, rénovation, charpente.",
};

export default function NosRealisationsPage() {
  return (
    <main>
      <Navbar />

      {/* Simple hero */}
      <section className="section-dark pt-28 pb-16 lg:pt-40 lg:pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="font-heading text-text-light leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Sites Web Que Nous{" "}
            <span className="font-black">Avons Créés</span>
          </h1>
        </div>
      </section>

      {/* Full portfolio grid */}
      <Portfolio />

      <FinalCTA />
      <Footer />
    </main>
  );
}
