import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FinalCTA from "@/components/sections/final-cta";
import { PROJECTS } from "@/lib/projects";
import RealisationsGrid from "./realisations-grid";

export const metadata = {
  title: "Nos Réalisations | Noovira AI — Sites Web Artisans & BTP",
  description:
    "Découvrez les sites web créés par Noovira pour des artisans et PMEs du bâtiment en Suisse romande. Couverture, rénovation, charpente, électricité.",
};

export default function RealisationsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="section-dark pt-28 pb-16 lg:pt-40 lg:pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="font-heading text-text-light leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Sites Web Que Nous{" "}
            <span className="font-black">Avons Créés</span>
          </h1>
          <p className="text-text-light/45 text-base max-w-xl mx-auto">
            {PROJECTS.length}+ sites livrés pour des artisans et PMEs du bâtiment en Suisse romande.
          </p>
        </div>
      </section>

      {/* Grid with video hover */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <RealisationsGrid projects={PROJECTS} />
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
