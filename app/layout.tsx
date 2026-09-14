import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ommediaproductions.in"),
  title: { default: "OM Media & Productions | Wedding Films & Photography | Varanasi", template: "%s | OM Media & Productions" },
  description: "Premium wedding photography, cinematography, drone, gimbal, crane, live broadcasting, editing and album production in Varanasi.",
  keywords: ["Wedding Photographer Varanasi","Wedding Cinematography Varanasi","Wedding Videography Varanasi","Drone Wedding Photography Varanasi","Live Wedding Broadcasting Varanasi"],
  openGraph: { title: "OM Media & Productions", description: "Wedding Films • Photography • Live Production", type: "website", locale: "en_IN" }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  const jsonLd = { "@context":"https://schema.org", "@type":"LocalBusiness", name:site.name, description:metadata.description, telephone:site.phone, email:site.email, address:{"@type":"PostalAddress",addressLocality:"Varanasi",addressRegion:"Uttar Pradesh",addressCountry:"IN"}, sameAs:[`https://instagram.com/${site.instagram.replace("@","")}`] };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Header />{children}<Footer /></body></html>;
}