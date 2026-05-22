import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Noovira AI",
  description: "Découvrez comment Noovira AI collecte, utilise et protège vos données personnelles.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-5">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Légal</span>
            <h1 className="text-4xl font-bold text-navy mt-2 mb-4">Politique de confidentialité</h1>
            <p className="text-secondary text-sm">Dernière mise à jour : 8 avril 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-secondary">

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">1. Qui sommes-nous</h2>
              <p className="text-sm leading-relaxed">
                Noovira AI est le nom commercial de <strong>NOVIRA AI LIMITED</strong> (Numéro d&apos;entreprise : 17159912), société privée à responsabilité limitée enregistrée en Angleterre et au Pays de Galles. Notre siège social est situé au Office 18190, 182-184 High Street North, East Ham, London, E6 2JA, United Kingdom. Nous opérons en ligne à l&apos;adresse <strong>nooviraai.com</strong>. Pour toute question relative à cette politique, contactez-nous à <a href="mailto:contact@nooviraai.com" className="text-accent hover:underline">contact@nooviraai.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">2. Informations collectées</h2>
              <p className="text-sm leading-relaxed mb-3">Nous collectons les types d&apos;informations suivants :</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li><strong>Informations de contact</strong> — nom, adresse e-mail, numéro de téléphone et nom de l&apos;entreprise lorsque vous prenez rendez-vous ou remplissez un formulaire.</li>
                <li><strong>Données d&apos;utilisation</strong> — pages visitées, temps passé sur le site, URL de provenance, type de navigateur et type d&apos;appareil via des outils d&apos;analyse.</li>
                <li><strong>Données de communication</strong> — messages, e-mails ou notes que vous nous envoyez directement.</li>
                <li><strong>Cookies</strong> — petits fichiers stockés sur votre appareil pour améliorer les performances du site et l&apos;expérience utilisateur (voir notre politique de cookies).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">3. Utilisation de vos informations</h2>
              <p className="text-sm leading-relaxed mb-3">Nous utilisons vos informations pour :</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Planifier et conduire des appels stratégiques avec vous.</li>
                <li>Fournir et améliorer nos services.</li>
                <li>Vous envoyer des communications pertinentes concernant votre projet.</li>
                <li>Analyser le trafic du site afin d&apos;améliorer l&apos;expérience utilisateur.</li>
                <li>Respecter nos obligations légales.</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">Nous ne <strong>vendons pas</strong> vos données personnelles à des tiers.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">4. Base légale du traitement (UK GDPR)</h2>
              <p className="text-sm leading-relaxed">
                En tant que société enregistrée au Royaume-Uni, nous traitons les données personnelles conformément au Règlement général sur la protection des données du Royaume-Uni (UK GDPR) et au Data Protection Act 2018. Nos bases légales comprennent : le <strong>Consentement</strong> (pour les cookies et les communications marketing), la <strong>Nécessité contractuelle</strong> (pour la fourniture de nos services) et les <strong>Intérêts légitimes</strong> (pour les analyses et opérations commerciales). Les utilisateurs de l&apos;EEE sont également couverts par le RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">5. Partage des données</h2>
              <p className="text-sm leading-relaxed mb-3">Nous pouvons partager vos données avec des prestataires tiers de confiance, uniquement pour faire fonctionner notre activité :</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li><strong>Cal.com</strong> — pour la planification des appels.</li>
                <li><strong>Vercel</strong> — pour l&apos;hébergement du site web.</li>
                <li><strong>Google Analytics / outils similaires</strong> — pour l&apos;analyse du trafic.</li>
                <li><strong>Fournisseurs de services e-mail</strong> — pour l&apos;envoi de communications.</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">Tous les prestataires tiers sont tenus de traiter vos données en conformité avec les lois applicables en matière de protection des données.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">6. Conservation des données</h2>
              <p className="text-sm leading-relaxed">
                Nous conservons vos données personnelles uniquement le temps nécessaire à la fourniture de nos services ou tel que requis par la loi. Les données de contact sont conservées jusqu&apos;à 3 ans après la dernière interaction. Vous pouvez demander leur suppression à tout moment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">7. Vos droits</h2>
              <p className="text-sm leading-relaxed mb-3">Selon votre lieu de résidence, vous pouvez avoir le droit de :</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Accéder aux données personnelles que nous détenons vous concernant.</li>
                <li>Demander la correction ou la suppression de vos données.</li>
                <li>Vous opposer au traitement ou en demander la limitation.</li>
                <li>Demander la portabilité de vos données.</li>
                <li>Retirer votre consentement à tout moment (lorsque le traitement est basé sur le consentement).</li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">Pour exercer l&apos;un de ces droits, envoyez-nous un e-mail à <a href="mailto:contact@nooviraai.com" className="text-accent hover:underline">contact@nooviraai.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">8. Sécurité</h2>
              <p className="text-sm leading-relaxed">
                Nous mettons en place des mesures techniques et organisationnelles raisonnables pour protéger vos données personnelles contre tout accès non autorisé, perte ou utilisation abusive. Toutefois, aucune transmission sur Internet n&apos;est sécurisée à 100%.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">9. Transferts internationaux</h2>
              <p className="text-sm leading-relaxed">
                NOVIRA AI LIMITED est basée au Royaume-Uni et intervient auprès de clients aux États-Unis, au Royaume-Uni, en Australie et en Nouvelle-Zélande. Vos données peuvent être traitées dans des pays autres que le vôtre. Nous veillons à ce que des garanties appropriées soient en place pour tous les transferts internationaux, conformément au UK GDPR et aux lois applicables en matière de protection des données.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">10. Modifications de cette politique</h2>
              <p className="text-sm leading-relaxed">
                Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Lorsque nous le faisons, nous révisons la date de &quot;Dernière mise à jour&quot; en haut de cette page. Nous vous encourageons à consulter cette politique régulièrement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy mb-3">11. Contact</h2>
              <p className="text-sm leading-relaxed">
                Pour toute question ou préoccupation concernant cette politique de confidentialité, contactez-nous à :<br />
                <a href="mailto:contact@nooviraai.com" className="text-accent hover:underline">contact@nooviraai.com</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
