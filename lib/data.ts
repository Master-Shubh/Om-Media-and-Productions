export const siteConfig = {
  name: "OM Media & Productions",
  tagline: "Your Story. Our Vision.",
  secondaryMessage: "Frames Beyond Time.",
  location: "Sharnath, Varanasi, Uttar Pradesh, India",
  contact: {
    phone: "8853104540",
    email: "MR.VINODKR.8853@GMAIL.COM",
    whatsapp: "918853104540"
  },
  socials: {
    instagram: "https://instagram.com/Om_Media_and_Product",
    facebook: "",
    youtube: ""
  }
};

export const site = {
  name: siteConfig.name,
  tagline: siteConfig.tagline,
  location: siteConfig.location,
  phone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  instagram: "@Om_Media_and_Product"
};

export const services = [
  { id: "traditional-photography", title: "Traditional Photography", description: "Timeless captures of your grand celebrations and rituals." },
  { id: "candid-photography", title: "Candid Photography", description: "Unscripted emotions, beautifully frozen in time." },
  { id: "traditional-videography", title: "Traditional Videography", description: "Comprehensive documentation of your entire event." },
  { id: "cinematography", title: "Cinematography", description: "High-end visual storytelling and cinematic wedding films." },
  { id: "drone", title: "Drone Shooting", description: "Breathtaking aerial perspectives and grand venue shots." },
  { id: "gimbal", title: "Gimbal Shooting", description: "Ultra-smooth, dynamic moving shots for a cinematic feel." },
  { id: "crane", title: "Crane Shooting", description: "Hollywood-style sweeping angles for massive stage events." },
  { id: "live-broadcasting", title: "Live Broadcasting", description: "Seamless multi-cam live streaming for remote guests." },
  { id: "mirror-photography", title: "Mirror Photography", description: "Unique, interactive photo booth experiences." },
  { id: "video-editing", title: "Video Editing & Rendering", description: "Professional color grading, sound design, and cinematic cuts." },
  { id: "photo-albums", title: "Premium Photo Albums", description: "Luxurious, custom-designed physical wedding albums." },
  { id: "led-wall", title: "LED / Wall TV Production", description: "Massive visual displays for stage backdrops and live feeds." }
];

export const portfolioConfig = {
  categories: ["All", "Weddings", "Cinematography", "Pre-Wedding", "Events"],
  projects: [
    {
      id: "project-1",
      title: "Royal Varanasi Wedding",
      category: "Weddings",
      type: "video" as const,
      mediaUrl: "/portfolio/placeholder-1.jpg",
      videoLink: ""
    }
  ]
};

export const packages = [
  { name: "OM Essential", note: "Core wedding coverage", items: ["Traditional Photography", "Traditional Videography", "Drone Shooting", "50 Sheet Album", "64GB Pen Drive", "2 Photo Frames"] },
  { name: "OM Signature", note: "Photography + cinematic experience", items: ["Traditional Photography", "Candid Photography", "Traditional Videography", "Cinematography", "Drone", "Gimbal / Crane", "Highlight Film", "Premium Album"] },
  { name: "OM Premium", note: "Complete wedding media production", items: ["Traditional Photography", "Candid Photography", "Traditional Videography", "Cinematic Videography", "Drone", "Crane", "2 Highlights", "1 Teaser", "2-Min Cinematic Video", "4 LED TVs", "1 Wall TV", "50 Sheet Album", "64GB Pen Drive", "2 Photo Frames"] },
  { name: "OM Luxe", note: "Custom production at full scale", items: ["Multi-camera production", "Cinematic wedding film", "Drone + Gimbal + Crane", "Live Broadcasting", "Premium album production", "Custom deliverables"] }
];

export const whatsapp = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello OM Media & Productions, I would like to enquire about wedding media production.")}`;
