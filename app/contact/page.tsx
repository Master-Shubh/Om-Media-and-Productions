"use client";
import { FormEvent, useState } from "react";
import { services, site, whatsapp } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return <main className="page">
    <header className="page-hero"><p className="eyebrow">CONTACT OM</p><h1>Let's create<br/><i>something timeless.</i></h1><p>Share your event details and our team will get back to you with a tailored production plan.</p></header>
    <section className="section contact-grid">
      <div className="contact-info">
        <p><b>PHONE</b><a href={`tel:+91${site.phone}`}>+91 {site.phone}</a></p>
        <p><b>EMAIL</b><a href={`mailto:${site.email}`}>{site.email}</a></p>
        <p><b>LOCATION</b>{site.location}</p>
        <p><b>INSTAGRAM</b><a href="https://instagram.com/Om_Media_and_Product" target="_blank" rel="noreferrer">@Om_Media_and_Product</a></p>
        <a className="btn gold" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>
      <form className="contact-form" onSubmit={submit}>
        {status === "success" ? <div className="success"><h2>Thank you.</h2><p>Your enquiry has been sent. We’ll get back to you soon.</p><a className="btn gold" href={whatsapp} target="_blank" rel="noreferrer">Continue on WhatsApp</a></div> : <>
          <input required name="name" placeholder="Full Name *" />
          <input required name="phone" placeholder="Phone Number *" inputMode="tel" />
          <input type="email" name="email" placeholder="Email" />
          <input type="date" name="date" />
          <select required name="services"><option value="">Select Service *</option>{services.map(service => <option key={service.id} value={service.title}>{service.title}</option>)}</select>
          <textarea name="message" rows={6} placeholder="Tell us about your wedding / event" />
          {status === "error" && <p className="form-error">Could not send the enquiry right now. Please use WhatsApp or try again.</p>}
          <button className="btn gold" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request a Quote"}</button>
        </>}
      </form>
    </section>
  </main>;
}
