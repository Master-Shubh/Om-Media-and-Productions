import type { Metadata } from "next";
import "./globals.css";
import { site, siteConfig } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baseUrl = "https://www.ommediaproductions.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "OM Media & Productions | Wedding Films & Photography | Varanasi", template: "%s | OM Media & Productions" },
  description: "Premium wedding photography, cinematography, drone, gimbal, crane, live broadcasting, editing and album production in Varanasi.",
  keywords: ["Wedding Photographer Varanasi", "Wedding Cinematography Varanasi", "Wedding Videography Varanasi", "Drone Wedding Photography Varanasi", "Live Wedding Broadcasting Varanasi"],
  openGraph: { title: "OM Media & Productions", description: "Wedding Films • Photography • Live Production", type: "website", locale: "en_IN", url: baseUrl }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const sameAs = Object.values(siteConfig.socials).filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: metadata.description,
    telephone: site.phone,
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: "Varanasi", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    sameAs
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children && <><Header />{children}<Footer /></>}</body></html>;
}
