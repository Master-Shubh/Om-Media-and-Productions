import Link from "next/link";
import { services } from "@/lib/data";

export default function Services() {
  return <main className="page">
    <header className="page-hero">
      <p className="eyebrow">OUR CAPABILITIES</p>
      <h1>Production built<br/><i>around your story.</i></h1>
      <p>From capture to final delivery, OM brings the complete wedding media workflow together.</p>
    </header>
    <section className="section">
      <div className="service-grid full">
        {services.map((service, i) => <Link className="service-card" key={service.id} href={`/services/${service.id}`}>
          <span className="number">{String(i + 1).padStart(2, "0")}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </Link>)}
      </div>
    </section>
  </main>;
}
