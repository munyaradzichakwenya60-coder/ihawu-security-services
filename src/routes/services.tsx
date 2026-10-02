import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Heart, Shield, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InnerBanner, PageHeading, useWishlist } from "@/components/site-shell";
import { products } from "@/lib/catalog";
import hero from "@/assets/security-hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | iHawu Security Services" },
      {
        name: "description",
        content:
          "Explore iHawu Security Services: Home Security, Office Security, Bodyguard, Alarm Systems, CCTV, Cash In Transit, Stock Tracking, Forensics, and Engineering.",
      },
      { property: "og:title", content: "Our Services | iHawu Security Services" },
      {
        property: "og:description",
        content: "Comprehensive security solutions for businesses and individuals across Zimbabwe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const serviceDetails: Record<
  string,
  {
    subtitle: string;
    highlights: string[];
    detailedText: string;
  }
> = {
  "home-security": {
    subtitle: "Protecting your family, home & property 24/7",
    highlights: [
      "24/7 Alarm Monitoring & Rapid Response",
      "Electric Fence Procurement & Installation",
      "Perimeter CCTV Surveillance & Access Control",
      "Trained Residential Guard Deployment",
    ],
    detailedText:
      "We offer a range of home security solutions to meet the specific needs of your family. This includes Rapid Response, installation of electric fences, CCTV, access control systems, and alarm systems. We also provide 24/7 monitoring services and rapid response services in case of any security emergency to ensure the safety and security of your family.",
  },
  "office-security": {
    subtitle: "Protecting business assets, personnel & retail spaces",
    highlights: [
      "24/7 Security Patrols & On-Site Static Guards",
      "Metal Detectors, Scanners & Commercial Safes",
      "Access Control & Time Attendance Integration",
      "Loss Prevention & Retail Surveillance",
    ],
    detailedText:
      "We offer business/retail security services to protect businesses and retail establishments from theft, vandalism, and other security threats. iHawu Security procures and installs security gadgets such as metal detectors, safes, and access systems. We offer 24/7 security patrols, monitoring services, and rapid response services to ensure your employees and business assets are safe and secure.",
  },
  "bodyguard": {
    subtitle: "Close protection for VIPs, executives & private events",
    highlights: [
      "Discreet VIP & Executive Close Protection",
      "Corporate Functions & Annual General Meetings",
      "Concerts, Festivals & High-Profile Events",
      "Advance Route Planning & Threat Assessment",
    ],
    detailedText:
      "We provide well-trained security guards who are equipped with the latest security technology to ensure your safety and security. Specially trained security personnel are equipped to offer executive protection services for events such as corporate functions, concerts, or private parties, with the objective of ensuring a secure and safe environment for high-profile individuals.",
  },
  "alarm-systems": {
    subtitle: "Next-generation electronic intrusion detection",
    highlights: [
      "Wireless & Hardwired Alarm System Installation",
      "24/7 Control Room Dispatch & ZRP Liaison",
      "Comprehensive Alarm System User Education",
      "Panic Buttons & Perimeter Beam Sensors",
    ],
    detailedText:
      "We offer alarm systems installation and monitoring services to provide our clients with another layer of security. Our alarm systems are designed to alert our monitoring team and the authorities in case of any security breach. Our alarm systems are easy to use and will give you peace of mind knowing that your property is protected around the clock. We also offer alarm system education.",
  },
  "cctv-surveillance": {
    subtitle: "Crystal-clear surveillance with low-light night vision",
    highlights: [
      "High-Resolution HD/4K Low-Light Cameras",
      "Remote Mobile Phone & Control Room Viewing",
      "AI Motion Detection & Line Crossing Alerts",
      "Full Camera Maintenance & DVR/NVR Servicing",
    ],
    detailedText:
      "iHawu Security provides high-quality CCTV security installation, monitoring, and maintenance services for homes and businesses. Our cameras cover all corners and provide clear images, even in low-light conditions. Our monitoring team is available 24/7 to keep an eye on your property and take immediate action in case of any suspicious activity.",
  },
  "cash-in-transit": {
    subtitle: "Armored, secure transportation of cash and high-value assets",
    highlights: [
      "Heavily Armored Vehicles & Tactical Crews",
      "Bank Runs, Retail Cash Collections & Vault Storage",
      "Real-Time Satellite GPS Tracking & Armed Escorts",
      "Comprehensive Transit Insurance & Risk Mitigation",
    ],
    detailedText:
      "We offer cash in transit security services to protect businesses from the risks associated with transporting cash. Our security personnel are highly trained and experienced in handling cash and ensuring its safe transportation. We provide peace of mind for businesses that need to transport cash; with us, they can rest assured that their cash is in good hands.",
  },
  "stock-tracking": {
    subtitle: "GPS livestock telemetry & seasoned field tracking",
    highlights: [
      "Advanced Cattle & Livestock GPS Telemetry",
      "Field Trackers with Proven Herd Heritage",
      "Real-Time Movement & Geo-Fencing Alerts",
      "Anti-Rustling Rapid Intervention Teams",
    ],
    detailedText:
      "iHawu Security offers innovative and effective stock and cattle tracking services for farmers and villagers. Our advanced tracking technology allows you to monitor the location and movement of your livestock at all times, ensuring their safety and preventing theft. Our team of experienced professionals includes former herd boys who have honed their tracking skills over many years, allowing you to maximize profits with zero loss.",
  },
  "forensics": {
    subtitle: "Corporate crime investigation, digital forensics & court testimony",
    highlights: [
      "Digital Forensics & Cybercrime Investigation",
      "Forensic Accounting & Fraud Audits",
      "Voice Stress Analysis (VSA) & Polygraphy",
      "Fingerprinting & Expert Testimony in Court",
    ],
    detailedText:
      "iHawu Security offers a range of forensic services, including digital forensics, forensic accounting, crime scene investigation, voice stress analysis (VSA), and fingerprinting, assisting in the investigation of crimes such as fraud, theft, and cybercrime, as well as providing expert testimony in court. Our team uses the latest technology to provide reliable information to clients and the Zimbabwe Republic Police.",
  },
  "engineering": {
    subtitle: "Custom security engineering & automated access solutions",
    highlights: [
      "Automated Gate Motors & Heavy Duty Sliding Doors",
      "Motion Sensor Perimeter Lighting & Solar Backup",
      "Biometric Access Control & Turnstiles",
      "Turnkey Security Engineering Maintenance",
    ],
    detailedText:
      "At iHawu Security, we take pride in providing, installing, and maintaining customized security engineering installation services to enhance the safety and security of your property. We offer a range of features, including automatic gates, sliding doors, and motion sensor lights, that can be tailored to meet your unique needs.",
  },
};

function ServicesPage() {
  const { saved, toggle } = useWishlist();
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "ELECTRONIC", "TRANSIT", "AGRICULTURAL", "FORENSICS", "ENGINEERING"];

  const filtered = products.filter((p) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "RESIDENTIAL") return p.category.includes("RESIDENTIAL") || p.id === "home-security";
    if (activeCategory === "COMMERCIAL") return p.category.includes("COMMERCIAL") || p.id === "office-security";
    if (activeCategory === "ELECTRONIC") return p.category.includes("ELECTRONIC") || p.category.includes("SURVEILLANCE") || p.id.includes("alarm") || p.id.includes("cctv");
    if (activeCategory === "TRANSIT") return p.category.includes("TRANSIT") || p.category.includes("CLOSE") || p.id === "cash-in-transit" || p.id === "bodyguard";
    if (activeCategory === "AGRICULTURAL") return p.category.includes("AGRICULTURAL") || p.id === "stock-tracking";
    if (activeCategory === "FORENSICS") return p.category.includes("FORENSICS") || p.id === "forensics";
    if (activeCategory === "ENGINEERING") return p.category.includes("ENGINEERING") || p.id === "engineering";
    return true;
  });

  return (
    <main>
      <InnerBanner label="PROFESSIONAL SECURITY SOLUTIONS" title="OUR SERVICES" image={hero} />

      <section className="site-page-section site-container">
        <PageHeading
          eyebrow="TAILORED SOLUTIONS"
          title="COMPREHENSIVE SERVICES FOR HOMES & ENTERPRISES"
          description="At iHawu Security Services, we combine modern technology, highly trained personnel, and 24/7 vigilance to protect what matters most."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "site" : "outline"}
              size="sm"
              className="text-xs font-bold uppercase tracking-wider"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid of 9 services with rich details */}
        <div className="site-product-grid">
          {filtered.map((item) => {
            const detail = serviceDetails[item.id];
            const isSaved = saved.includes(item.id);

            return (
              <article className="site-product flex flex-col justify-between" key={item.id} id={item.id}>
                <div>
                  <div className="site-product-image">
                    <img src={item.image} alt={item.name} loading="lazy" width={1200} height={900} />
                    <Button
                      variant="carousel"
                      size="icon"
                      className={isSaved ? "site-heart saved" : "site-heart"}
                      aria-label={`${isSaved ? "Remove" : "Add"} ${item.name} to wishlist`}
                      onClick={() => toggle(item.id)}
                    >
                      <Heart size={18} fill={isSaved ? "currentColor" : "none"} />
                    </Button>
                  </div>

                  <div className="site-product-body">
                    <span className="site-product-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    {detail && <p className="text-xs font-semibold text-primary mb-2">{detail.subtitle}</p>}
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                    {detail && (
                      <ul className="space-y-1.5 mb-6 text-xs text-foreground/90">
                        {detail.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <Check size={14} className="text-primary flex-none mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-border/50 mt-auto flex items-center justify-between gap-3">
                  <Button variant="site" size="sm" asChild className="flex-1">
                    <Link to="/contact" search={{ service: item.name }}>
                      GET PRICES &amp; INFO <ArrowRight size={14} />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => toggle(item.id)}
                  >
                    {isSaved ? "SAVED" : "SAVE"}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-split-band">
        <div className="site-split-band-image">
          <img src={hero} alt="iHawu Security Control Center" loading="lazy" width={1200} height={900} />
        </div>
        <div className="site-split-band-text">
          <span className="site-label">CUSTOM PACKAGES</span>
          <h2>NEED A CUSTOMIZED SECURITY ASSESSMENT?</h2>
          <p>
            Every property and commercial venture has unique threat profiles. Our security consultants will conduct a full physical
            and electronic audit of your site to provide a tailor-made proposal.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Button variant="site" asChild>
              <Link to="/contact">
                SPEAK WITH A SPECIALIST <ArrowRight size={15} />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:0777023749">CALL 0777023749</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
