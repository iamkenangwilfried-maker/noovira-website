import { redirect } from "next/navigation";

// Redirect old URL to new canonical URL
export default function NosRealisationsPage() {
  redirect("/realisations");
}
