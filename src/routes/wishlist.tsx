import { createFileRoute } from "@tanstack/react-router";
import { InnerBanner, PageHeading } from "@/components/site-shell";
import { ProductGrid } from "@/components/product-grid";
import hero from "@/assets/security-hero.jpg";

export const Route = createFileRoute("/wishlist")({ head: () => ({ meta: [
  { title: "Saved Solutions | iHawu Security" }, { name: "description", content: "Review the security services and equipment you saved during your visit to iHawu Security Services." },
  { property: "og:title", content: "Saved Solutions | iHawu Security" }, { property: "og:description", content: "Review saved security services and equipment." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Wishlist });

function Wishlist() { return <main><InnerBanner label="YOUR SELECTION" title="WISHLIST" image={hero} /><section className="site-page-section site-container"><PageHeading eyebrow="SAVED ITEMS" title="YOUR SAVED SOLUTIONS" /><ProductGrid onlySaved /></section></main>; }