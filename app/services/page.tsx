import Link from "next/link";
import { ArrowUpRight, Aperture, Camera, Clapperboard, Film, Images, MonitorPlay, Plane, Radio, Sparkles } from "lucide-react";
import { services } from "@/lib/data";

const serviceIcons = [Camera, Images, Clapperboard, Film, Plane, Sparkles, Aperture, Radio, Images, Clapperboard, Images, MonitorPlay];

export default function Services() {
  return (
    <main className="page services-page">
      <header className="page-hero services-hero">
        <p className="eyebrow">OUR CAPABILITIES</p>
        <h1>Production built<br /><i>around your story.</i></h1>
        <p>From the first frame to the final delivery, OM Media &amp; Productions brings photography, film, aerial coverage, live production and post-production together.</p>
      </header>

      <section className="services-showcase">
        <div className="services-intro-row">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Our <i>Services</i></h2>
          </div>
          <p className="services-intro-copy">A complete visual production studio for weddings, celebrations and events across Varanasi and beyond.</p>
        </div>

        <div className="premium-service-grid">
          {services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Link className="premium-service-card" key={service.id} href={`/services/${service.id}`}>
                <div className="service-card-top">
                  <span className="service-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="service-icon-wrap"><Icon size={22} strokeWidth={1.6} /></span>
                </div>
                <div className="service-card-glow" />
                <div className="service-card-body">
                  <p className="service-kicker">OM PRODUCTION / {String(i + 1).padStart(2, "0")}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-card-arrow"><ArrowUpRight size={19} /></span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
