import Link from "next/link";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = services.find((service) => service.id === slug);
  const title = found?.title || "Production Service";
  const desc = found?.description || "Professional wedding media production by OM Media & Productions.";

  return <main className="page">
    <header className="page-hero service-detail">
      <p className="eyebrow">OM MEDIA & PRODUCTIONS</p>
      <h1>{title}<br/><i>with intention.</i></h1>
      <p>{desc}</p>
      <Link className="btn gold" href="/contact">Request a Quote</Link>
    </header>
    <section className="section two-col">
      <div><p className="eyebrow">OUR APPROACH</p><h2>Crafted for the moments <i>that matter.</i></h2></div>
      <div><p>Every production is planned around the event timeline, people, light, movement and final deliverables. Our team coordinates capture, data, post-production and delivery so the experience stays seamless.</p><p>Tell us your date, venue and requirements and we’ll build a custom production plan.</p></div>
    </section>
  </main>;
}
