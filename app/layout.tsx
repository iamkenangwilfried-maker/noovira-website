import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noovira AI — Free Websites & AI Systems for Contractors",
  description:
    "We build free websites and AI systems for roofing contractors that turn missed calls into booked jobs. Speed to Lead, Google Reviews, Database Reactivation.",
  keywords: "roofing contractor website, AI lead follow-up, speed to lead, Google reviews automation",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
