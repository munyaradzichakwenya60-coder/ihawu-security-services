import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import { InnerBanner, PageHeading } from "@/components/site-shell";
import hero from "@/assets/security-hero.jpg";
import camera from "@/assets/security-equipment.jpg";
import monitor from "@/assets/security-monitoring.jpg";
import team from "@/assets/security-team.jpg";

export const Route = createFileRoute("/blog")({ head: () => ({ meta: [
  { title: "Security Insights | iHawu Security Services" }, { name: "description", content: "Expert security insights, crime prevention advice, and updates from iHawu Security Services." },
  { property: "og:title", content: "Security Insights | iHawu Security Services" }, { property: "og:description", content: "Expert security insights and advice from iHawu Security Services." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Blog });

const articles = [
  { title: "Protecting Your Home and Business with Rapid Response", category: "HOME & BUSINESS", image: monitor, text: "Why combining 24/7 monitoring, alarm verification, and rapid response vehicles delivers complete peace of mind." },
  { title: "Optimizing CCTV and Electronic Security Systems", category: "SURVEILLANCE", image: camera, text: "How high-resolution low-light cameras and perimeter electric fencing deter threats before they occur." },
  { title: "The Value of Trained Guards and Pride in Appearance", category: "GUARDING", image: team, text: "Our guards embody professionalism and vigilance, providing a reassuring presence for health institutions, firms, and communities." },
];

function Blog() { return <main><InnerBanner label="NEWS & INSIGHTS" title="OUR BLOG" image={hero} /><section className="site-page-section site-container"><PageHeading eyebrow="LATEST ARTICLES" title="SECURITY INSIGHTS" description="Insights and expert advice from iHawu Security Services to help keep your property and assets safe." /><div className="site-article-grid">{articles.map((article) => <article className="site-article" key={article.title}><img src={article.image} alt={article.title} loading="lazy" width={1200} height={900} /><div className="site-article-content"><span className="site-product-category"><CalendarDays size={13} /> {article.category}</span><h3>{article.title}</h3><p>{article.text}</p><Link to="/contact" className="site-inline-link">ASK OUR TEAM <ArrowRight size={14} /></Link></div></article>)}</div></section></main>; }