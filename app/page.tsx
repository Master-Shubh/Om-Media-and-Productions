import Link from "next/link";
import { ArrowRight, ArrowUpRight, Aperture, CalendarDays, Camera, Clapperboard, Film, Instagram, MapPin, Menu, MonitorPlay, Plane, Radio, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services, packages, whatsapp, portfolioConfig, siteConfig } from "@/lib/data";

const icons = [Camera, Camera, Clapperboard, Aperture, Plane, Sparkles, Film, Radio, Camera, MonitorPlay, Film, MonitorPlay];
const serviceImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1478827536114-da961b7b1e02?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=82"
];

const portfolioImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=84",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=84",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=84",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=84"
];

export default function Home() {
  return <main>
    <section className="hero premium-hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-grain" />
      <div className="hero-content">
        <p className="eyebrow">WEDDINGS &nbsp;•&nbsp; EVENTS &nbsp;•&nbsp; FILMS &nbsp;•&nbsp; LIVE</p>
        <h1>Turning <i>Moments</i><br/>into <i>Masterpieces.</i></h1>
        <p className="hero-copy">Cinematic stories from Varanasi to the world.</p>
        <div className="actions">
          <Link className="btn gold" href="/portfolio"><span className="play-dot">▶</span> Watch Showreel</Link>
          <Link className="btn glass" href="/portfolio">Our Work <ArrowRight size={16}/></Link>
        </div>
        <div className="hero-stats">
          <div><strong>500+</strong><span>Happy Clients</span></div>
          <div><strong>1000+</strong><span>Events Covered</span></div>
          <div><strong>5+</strong><span>Years of Excellence</span></div>
        </div>
      </div>
      <div className="hero-script">Frames Beyond<br/><em>Time</em></div>
      <div className="hero-location"><MapPin size={13}/> Varanasi, U.P. India</div>
    </section>

    <Reveal><section className="section intro premium-intro"><p className="eyebrow">WHAT WE DO</p><h2>Our <i>Services</i></h2><p>From photography to full-scale production, we provide end-to-end visual solutions for your most important moments.</p><div className="service-filters"><span className="active">▦ &nbsp; All</span><span>▣ &nbsp; Photo</span><span>▣ &nbsp; Video</span><span>✣ &nbsp; Production</span><span>◫ &nbsp; Live</span><span>♡ &nbsp; Creative</span></div></section></Reveal>

    <section className="section services-section">
      <div className="service-grid premium-service-grid">
        {services.map((service, i) => { const I = icons[i % icons.length]; return <Reveal key={service.id}><Link href={`/services/${service.id}`} className="service-card image-card" style={{"--card-image": `url(${serviceImages[i]})`} as React.CSSProperties}>
          <div className="card-image"/><div className="card-shade"/><span className="service-index">{String(i + 1).padStart(2, "0")}</span><I className="service-icon"/><div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p></div><span className="circle-arrow"><ArrowUpRight size={17}/></span>
        </Link></Reveal>; })}
      </div>
    </section>

    <Reveal><section className="showcase premium-showcase"><div className="showcase-copy"><p className="eyebrow">CINEMATIC SHOWREEL</p><h2>Moments that<br/><i>move.</i></h2><p>Emotion, movement and light — crafted into films that feel as unforgettable as the day itself.</p><Link className="btn outline" href="/portfolio">Play Showreel <ArrowRight size={16}/></Link></div><div className="video-visual"><div className="video-glow"/><div className="video-grid"/><div className="film-strip"><span>OM</span><span>MEDIA</span><span>2026</span><span>FILMS</span></div><button className="big-play" aria-label="Play showreel">▶</button><span className="video-caption">SHOWREEL / 2026</span></div></section></Reveal>

    <Reveal><section className="section portfolio-section"><div className="section-head"><div><p className="eyebrow">OUR WORK</p><h2>Featured <i>Portfolio</i></h2></div><Link href="/portfolio" className="text-link">Explore All Work <ArrowRight size={16}/></Link></div><div className="portfolio-grid premium-portfolio-grid">{portfolioConfig.projects.concat([{id:"p2",title:"Pre-Wedding at Ganga Ghat",category:"Pre-Wedding",type:"video" as const,mediaUrl:"",videoLink:""},{id:"p3",title:"Grand Destination Wedding",category:"Cinematography",type:"video" as const,mediaUrl:"",videoLink:""},{id:"p4",title:"Live Event Production",category:"Events",type:"video" as const,mediaUrl:"",videoLink:""}]).map((project, i) => <Link href="/portfolio" className="portfolio-card" key={project.id}><div className="portfolio-image" style={{backgroundImage:`url(${portfolioImages[i % portfolioImages.length]})`}}/><div className="portfolio-overlay"/><div className="portfolio-meta"><span>{project.category.toUpperCase()}</span><h3>{project.title}</h3><small>VIEW FILM &nbsp;↗</small></div><span className="portfolio-play">▶</span></Link>)}</div></section></Reveal>

    <section className="section packages-premium dark-section"><Reveal><div className="section-head"><div><p className="eyebrow">PACKAGES</p><h2>Choose your <i>Story.</i></h2><p className="section-lead">Flexible packages for every celebration.<br/>Because every story deserves the perfect frame.</p></div><Link href="/packages" className="text-link">View Packages <ArrowRight size={16}/></Link></div></Reveal><div className="package-grid premium-package-grid">{packages.slice(0,3).map((p, i) => <Reveal key={p.name}><article className={`package-card ${i === 1 ? "featured" : ""}`}><span className="package-badge">{i === 1 ? "MOST POPULAR" : `0${i+1}`}</span><h3>{p.name.replace("OM ", "")}</h3><p>{p.note}</p><div className="package-divider"/><ul>{p.items.slice(0, i === 1 ? 8 : 6).map(x => <li key={x}>✦ {x}</li>)}</ul><Link href="/contact" className="text-link">View Details <ArrowRight size={15}/></Link></article></Reveal>)}</div></section>

    <Reveal><section className="varanasi premium-varanasi"><div className="varanasi-bg"/><div className="varanasi-overlay"/><div className="varanasi-copy"><p className="eyebrow">BASED IN VARANASI</p><h2>Rooted in tradition.<br/><i>Made for today.</i></h2><p>Available for celebrations across India.</p><Link className="btn gold" href="/contact">Start Your Story <ArrowRight size={16}/></Link></div></section></Reveal>

    <Reveal><section className="cta section premium-cta"><p className="eyebrow">LET'S CREATE</p><h2>Your day deserves<br/><i>a beautiful film.</i></h2><p>Tell us your date, venue and vision. We’ll build the production around your story.</p><div className="actions"><a className="btn gold" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a><Link className="btn outline" href="/contact">Book a Free Consultation</Link></div></section></Reveal>

    <div className="mobile-bottom-cta"><a href={whatsapp} target="_blank" rel="noreferrer"><span>◉</span><b>Chat on WhatsApp</b><small>Quick Enquiry</small></a><Link href="/contact"><CalendarDays size={23}/><b>Book Consultation</b><small>Let's plan your story</small></Link></div>
  </main>;
}
