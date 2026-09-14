import Link from "next/link";
import { ArrowUpRight, Aperture, Camera, Clapperboard, Film, Images, MonitorPlay, Plane, Radio, Sparkles } from "lucide-react";
import { services } from "@/lib/data";
import styles from "./services.module.css";

const serviceIcons = [Camera, Images, Clapperboard, Film, Plane, Sparkles, Aperture, Radio, Images, Clapperboard, Images, MonitorPlay];

export default function Services() {
  return (
    <main className={`page ${styles.page}`}>
      <header className="page-hero">
        <p className="eyebrow">OUR CAPABILITIES</p>
        <h1>Production built<br /><i>around your story.</i></h1>
        <p>From the first frame to the final delivery, OM Media &amp; Productions brings photography, film, aerial coverage, live production and post-production together.</p>
      </header>
      <section className={styles.showcase}>
        <div className={styles.introRow}>
          <div><p className={styles.eyebrow}>WHAT WE DO</p><h2 className={styles.heading}>Our <i>Services</i></h2></div>
          <p className={styles.introCopy}>A complete visual production studio for weddings, celebrations and events across Varanasi and beyond.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return <Link className={styles.card} key={service.id} href={`/services/${service.id}`}>
              <div className={styles.top}><span className={styles.index}>{String(i + 1).padStart(2, "0")}</span><span className={styles.icon}><Icon size={22} strokeWidth={1.6} /></span></div>
              <div className={styles.body}><p className={styles.kicker}>OM PRODUCTION / {String(i + 1).padStart(2, "0")}</p><h3 className={styles.title}>{service.title}</h3><p className={styles.description}>{service.description}</p></div>
              <span className={styles.arrow}><ArrowUpRight size={19} /></span>
            </Link>;
          })}
        </div>
      </section>
    </main>
  );
}
