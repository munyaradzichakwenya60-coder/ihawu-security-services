import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bell, Camera, Headphones, Radio, ShieldCheck, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InnerBanner, PageHeading } from "@/components/site-shell";
import hero from "@/assets/security-hero.jpg";
import monitor from "@/assets/security-monitoring.jpg";

export const Route = createFileRoute("/shortcodes")({ head: () => ({ meta: [
  { title: "Our Capabilities | iHawu Security Services" }, { name: "description", content: "Explore the comprehensive security solutions and services provided by iHawu Security Services across Zimbabwe." },
  { property: "og:title", content: "Our Capabilities | iHawu Security Services" }, { property: "og:description", content: "Explore guarding, CCTV, CIT, forensics, and cattle tracking capabilities." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Shortcodes });

const features = [
  { icon: Camera, title: "CCTV & ALARMS", text: "High-quality camera installation, electric fencing, and 24/7 active surveillance systems." },
  { icon: UsersRound, title: "GUARDING & CIT", text: "Trained security personnel, executive bodyguard protection, and secure cash in transit." },
  { icon: Radio, title: "STOCK TRACKING", text: "Advanced livestock and cattle tracking technology combined with experienced field trackers." },
  { icon: Headphones, title: "24/7 MONITORING", text: "Round-the-clock control room oversight and rapid emergency response teams." },
  { icon: Bell, title: "iHAWU FORENSICS", text: "Digital forensics, forensic accounting, crime scene investigation, and voice stress analysis." },
  { icon: ShieldCheck, title: "SECURITY ENGINEERING", text: "Automated gates, sliding doors, motion sensor lighting, metal detectors, and safe procurement." },
];

function Shortcodes() { return <main><InnerBanner label="WHAT WE DO" title="OUR CAPABILITIES" image={hero} /><section className="site-page-section site-container"><PageHeading eyebrow="CONTEMPORARY SECURITY SOLUTIONS" title="OUR FULL CAPABILITIES" description="Comprehensive security services tailor-made to suit our clients' needs at affordable fees." /><div className="site-value-grid site-value-grid-six">{features.map(({ icon: Icon, title, text }) => <div key={title} className="site-feature"><Icon className="site-feature-icon" size={32} strokeWidth={1.75} /><div><h2>{title}</h2><p>{text}</p></div></div>)}</div></section><section className="site-split-band"><div className="site-split-band-image"><img src={monitor} alt="iHawu Security monitoring station" loading="lazy" width={1200} height={900} /></div><div className="site-split-band-text"><span className="site-label">OUR PROMISE</span><h2>YOUR SAFETY, OUR RESPONSIBILITY</h2><p>We combine trained professionals, modern technology, and rapid response to safeguard your assets, family, and business.</p><Button variant="site" asChild><Link to="/contact">TALK TO OUR TEAM <ArrowRight size={15} /></Link></Button></div></section></main>; }