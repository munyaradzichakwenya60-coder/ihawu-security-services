import { createFileRoute } from "@tanstack/react-router";
import { InnerBanner, PageHeading } from "@/components/site-shell";
import { ProductGrid } from "@/components/product-grid";
import hero from "@/assets/security-hero.jpg";

export const Route = createFileRoute("/shop")({ head: () => ({ meta: [
  { title: "Security Services & Solutions | iHawu Security" }, { name: "description", content: "Explore iHawu Security Services guarding, CCTV, 24/7 monitoring, CIT, forensics, and cattle tracking solutions." },
  { property: "og:title", content: "Security Services & Solutions | iHawu Security" }, { property: "og:description", content: "Explore guarding, CCTV, monitoring, cash in transit, forensics, and cattle tracking." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Shop });

function Shop() { return <main><InnerBanner label="OUR SERVICES & EQUIPMENT" title="SERVICES" image={hero} /><section className="site-page-section site-container"><PageHeading eyebrow="OUR SERVICES" title="COMPREHENSIVE SECURITY SOLUTIONS" description="Discover our full suite of security services, surveillance gadgets, and specialized protection." /><ProductGrid /></section></main>; }