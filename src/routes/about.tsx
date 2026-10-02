import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Check, Church, Factory, HeartPulse, Hospital, MapPin, Phone, Tractor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InnerBanner, PageHeading } from "@/components/site-shell";
import hero from "@/assets/security-hero.jpg";
import team from "@/assets/security-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | iHawu Security Services" },
      {
        name: "description",
        content:
          "Ihawu Security Services (Pvt) Ltd (formerly Aziz Security Company) is a leading Zimbabwean security solutions provider offering guarding, electronic security, CCTV, and 24/7 monitoring.",
      },
      { property: "og:title", content: "About Us | iHawu Security Services" },
      {
        property: "og:description",
        content: "A highly-experienced and reliable security solutions provider across Zimbabwe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const sectors = [
  {
    icon: Hospital,
    name: "Health Institutions",
    type: "Hospitals, Clinics & Healthcare Complexes",
    description:
      "Providing compassionate yet vigilant physical security, CCTV access control, and 24/7 rapid response for medical and care complexes across Zimbabwe.",
  },
  {
    icon: Building2,
    name: "Corporate & Commercial Firms",
    type: "Headquarters, Retail Malls & Warehouses",
    description:
      "Guarding corporate headquarters, retail malls, manufacturing plants, and warehousing facilities with rigorous access control and round-the-clock monitoring.",
  },
  {
    icon: Church,
    name: "Churches & Community Centers",
    type: "Places of Worship & Community Spaces",
    description:
      "Ensuring serene, safe, and orderly environments for religious gatherings, community conferences, and non-profit facilities nationwide.",
  },
  {
    icon: HeartPulse,
    name: "Old People's Homes & Residences",
    type: "Elder Care Facilities & Residential Estates",
    description:
      "Delivering gentle, respectful, and round-the-clock protective security and emergency medical liaison for elder care facilities and homes.",
  },
  {
    icon: Factory,
    name: "Workshops & Industrial Garages",
    type: "Automotive Plants, Tooling & Machinery Yards",
    description:
      "Securing high-value machinery, automotive workshops, tooling, and commercial inventory day and night against theft and unauthorized access.",
  },
  {
    icon: Tractor,
    name: "Farms & Rural Estates",
    type: "Commercial Farms & Livestock Holdings",
    description:
      "Deploying specialized cattle and livestock tracking combined with rugged perimeter patrols and 24/7 rapid armed response units.",
  },
];

function AboutPage() {
  return (
    <main>
      <InnerBanner label="ABOUT OUR AGENCY" title="ABOUT US" image={hero} />

      <section className="site-about site-about-inner">
        <div className="site-about-content">
          <span className="site-label">WHO WE ARE</span>
          <h2>A HIGHLY-EXPERIENCED AND RELIABLE SECURITY SOLUTIONS PROVIDER</h2>
          <p>
            Ihawu Security Services (Pvt) Ltd <strong>&lsquo;Ihawu&rsquo;</strong> is a Zimbabwean Company duly incorporated in
            terms of the laws of Zimbabwe, formerly <em>&ldquo;Aziz Security Company&rdquo;</em>. Ihawu is dedicated to providing
            excellent contemporary security services, with the capacity of dealing with all your security needs. We offer a
            complete range of security service products which include guarding services, electronic security, 24/7 monitoring,
            and security consulting services. Aziz Security Company was incorporated in 2021 before changing into Ihawu Security
            Services in 2023.
          </p>
          <p>
            We provide more than mere deter-and-report services; we ensure that each of our security guards displays pride to you
            and your customers through their appearance and attitude. Our team is trained to embody professionalism at all times,
            creating a reassuring presence that enhances the overall environment of your establishment.
          </p>
          <p>
            We provide both general and customized security services, tailor-made to suit our clients&apos; needs at affordable
            fees. By offering a range of solutions—from on-site security to emergency response plans—we ensure that our clients
            have peace of mind knowing they are protected.
          </p>
          <div className="site-about-points">
            <span>
              <Check size={15} className="text-primary flex-shrink-0" strokeWidth={2.5} />
              GUARDING SERVICES
            </span>
            <span>
              <Check size={15} className="text-primary flex-shrink-0" strokeWidth={2.5} />
              ELECTRONIC SECURITY
            </span>
            <span>
              <Check size={15} className="text-primary flex-shrink-0" strokeWidth={2.5} />
              24/7 MONITORING
            </span>
            <span>
              <Check size={15} className="text-primary flex-shrink-0" strokeWidth={2.5} />
              SECURITY CONSULTING
            </span>
          </div>
          <Button variant="site" className="mt-8" asChild>
            <Link to="/contact">
              GET PRICES &amp; INFO <ArrowRight size={15} />
            </Link>
          </Button>
        </div>
        <div className="site-about-media">
          <video
            poster="/videos/ihawu-facebook-poster.webp"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="iHawu Security in action video"
          >
            <source src="/videos/ihawu-facebook-video.mp4" type="video/mp4" />
            <source src="/videos/ihawu-facebook-video.webm" type="video/webm" />
          </video>
        </div>
      </section>

      <section className="site-page-section site-container">
        <PageHeading
          eyebrow="OUR CLIENTELE & SECTORS"
          title="TRUSTED BY INDUSTRY LEADERS ACROSS ZIMBABWE"
          description="Our service provision and footprint have positioned us as a security services provider of first choice across diverse sectors."
        />
        <div className="site-sector-grid">
          {sectors.map((s) => {
            const Icon = s.icon;
            return (
              <div className="site-sector-card" key={s.name}>
                <div className="site-sector-header">
                  <div className="site-sector-avatar">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="site-sector-titles">
                    <h3>{s.name}</h3>
                    <span>{s.type}</span>
                  </div>
                </div>
                <p className="site-sector-body">{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="site-split-band">
        <div className="site-split-band-image">
          <img src={hero} alt="iHawu Security rapid response fleet" loading="lazy" width={1200} height={900} />
        </div>
        <div className="site-split-band-text">
          <span className="site-label">OUR FOOTPRINT</span>
          <h2>HARARE &amp; BULAWAYO OFFICES</h2>
          <p>
            With active operational centers in Harare and Bulawayo, our rapid response units, electronic surveillance control
            rooms, and field personnel are always prepared to serve you.
          </p>
          <div className="flex flex-col gap-2 mt-4 text-xs font-semibold text-muted-foreground">
            <span className="flex items-center gap-2 text-foreground">
              <MapPin size={14} className="text-primary" /> 98 Alexander Drive, Hatfield, Harare
            </span>
            <span className="flex items-center gap-2 text-foreground">
              <MapPin size={14} className="text-primary" /> 4614 Gwabalanda, Bulawayo
            </span>
            <span className="flex items-center gap-2 text-foreground">
              <Phone size={14} className="text-primary" /> 0777023749 / 0784079015
            </span>
          </div>
          <Button variant="site" className="mt-6" asChild>
            <Link to="/contact">
              CONTACT US TODAY <ArrowRight size={15} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
