import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Heart,
  Megaphone,
  Phone,
  Play,
  Shield,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading, useWishlist } from "@/components/site-shell";
import { products } from "@/lib/catalog";
import heroImage from "@/assets/security-hero.jpg";
import teamImage from "@/assets/security-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iHawu Security | Comprehensive Security Solutions in Zimbabwe" },
      {
        name: "description",
        content:
          "iHawu Security Services provides 24/7 security monitoring, CCTV installation, Rapid Response, guarding services, and forensics in Harare & Bulawayo.",
      },
      { property: "og:title", content: "iHawu Security | Comprehensive Security Solutions" },
      {
        property: "og:description",
        content: "A top-notch security company offering comprehensive security solutions to businesses and individuals across Zimbabwe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  {
    label: "DESIGN FOR YOUR DESTINY!",
    title: "A top-notch security company that offers comprehensive security solutions.",
    description:
      "We provide comprehensive security solutions to businesses and individuals who are serious about their safety and security. Advanced technology and dedicated protection.",
  },
  {
    label: "YOUR SAFETY OUR RESPONSIBILITY!",
    title: "Delivering peace of mind and ensuring safety in every aspect of your life.",
    description:
      "With our advanced security solutions, rapid response, CCTV surveillance, and 24/7 monitoring, you can rest assured that your safety is in good hands.",
  },
  {
    label: "24/7 MONITORING & RAPID RESPONSE",
    title: "Comprehensive electronic & physical protection across Zimbabwe.",
    description:
      "From residential guarding and electric fencing to armored CIT, digital forensics, and cattle tracking, we secure your destiny with unmatched reliability.",
  },
];

const featuredHighlights: Record<string, string[]> = {
  "home-security": ["24/7 Rapid Response", "Electric Fences & Alarms", "Perimeter CCTV Surveillance"],
  "office-security": ["24/7 Static Guards & Patrols", "Metal Detectors & Safes", "Access Control & Time Attendance"],
  "bodyguard": ["VIP Close Protection", "Corporate Events & Concerts", "Discrete Threat Mitigation"],
  "alarm-systems": ["24/7 Control Room Dispatch", "Alarm System Education", "Panic Buttons & Beams"],
  "cctv-surveillance": ["HD/4K Low-Light Night Vision", "Live Remote Viewing", "Scheduled Maintenance"],
  "cash-in-transit": ["Armored Transport Fleet", "Vault Storage & Armed Escorts", "Full Transit Insurance"],
};

function Index() {
  const [slide, setSlide] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [dialog, setDialog] = useState<"quote" | "team" | null>(null);
  const { saved, toggle } = useWishlist();

  const changeSlide = (offset: number) => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setSlide((value) => (value + offset + slides.length) % slides.length);
      setIsExiting(false);
    }, 480);
  };

  // Automatically advance the hero slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [slide, isExiting]);

  const current = slides[slide] ?? { label: "", title: "", description: "" };

  // Take top 3 featured services for homepage
  const featuredServices = products.slice(0, 3);

  return (
    <main id="home">
      {/* 1. Hero Carousel */}
      <section className="site-hero" aria-label="Security services banner">
        <img
          className="site-hero-photo"
          src={heroImage}
          alt="iHawu Security guarding and surveillance operations"
          width={1920}
          height={760}
        />
        <Button
          variant="carousel"
          size="icon"
          className="site-hero-arrow prev"
          aria-label="Previous banner"
          onClick={() => changeSlide(-1)}
        >
          <ChevronLeft size={18} />
        </Button>
        <div
          key={`${slide}-${isExiting ? "out" : "in"}`}
          className={`site-container site-hero-content ${isExiting ? "hero-slide-out" : "hero-slide-in"}`}
        >
          <span className="site-label">{current.label}</span>
          <h1 className="site-hero-title">{current.title}</h1>
          <p className="site-hero-description">{current.description}</p>
          <Button variant="site" className="site-hero-cta" onClick={() => setDialog("quote")}>
            <span className="site-hero-cta-label">GET PRICES &amp; INFO</span>
            <span className="site-hero-cta-arrow">
              <ChevronRight size={18} />
            </span>
          </Button>
        </div>
        <Button
          variant="carousel"
          size="icon"
          className="site-hero-arrow next"
          aria-label="Next banner"
          onClick={() => changeSlide(1)}
        >
          <ChevronRight size={18} />
        </Button>
      </section>

      {/* 2. 3-Feature Card Bar */}
      <section className="site-features" id="services" aria-label="Our strengths">
        <div className="site-container site-features-inner">
          <div className="site-feature">
            <Megaphone className="site-feature-icon" size={34} strokeWidth={1.6} />
            <div>
              <h2>LATEST EQUIPMENTS</h2>
              <p>CCTV surveillance, electric fences, alarm systems, metal detectors, and specialized security engineering.</p>
            </div>
          </div>
          <div className="site-feature">
            <Headphones className="site-feature-icon" size={34} strokeWidth={1.6} />
            <div>
              <h2>PROFESSIONAL STAFF</h2>
              <p>Highly trained security guards and executive protection personnel who embody pride and vigilance.</p>
            </div>
          </div>
          <div className="site-feature">
            <UsersRound className="site-feature-icon" size={34} strokeWidth={1.6} />
            <div>
              <h2>24/7 CONSTANT SUPPORT</h2>
              <p>Round-the-clock monitoring and emergency rapid response to ensure client safety in any situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who Are We / About Section */}
      <section className="site-about" id="about">
        <div className="site-about-content">
          <span className="site-label">WHO ARE WE?</span>
          <h2>WELCOME TO iHAWU SECURITY</h2>
          <p>
            We are the top-notch security company that provides comprehensive security solutions to businesses and individuals
            who are serious about their safety and security. Our team of highly trained security professionals is committed to
            ensuring the safety and security of our clients and we leave no stone unturned to make sure that no security threat is
            left undetected.
          </p>
          <p className="mt-3">
            Formerly Aziz Security Company (incorporated in 2021 before rebranding to Ihawu Security Services in 2023), we ensure
            that each guard displays pride through their appearance and attitude.
          </p>
          <div className="site-about-points">
            <span>
              <Check size={15} className="text-primary flex-shrink-0" strokeWidth={2.5} />
              RAPID RESPONSE
            </span>
            <span>
              <Check size={15} className="text-primary flex-shrink-0" strokeWidth={2.5} />
              CCTV &amp; ALARMS
            </span>
            <span>
              <Check size={15} className="text-primary flex-shrink-0" strokeWidth={2.5} />
              GUARDING &amp; CIT
            </span>
            <span>
              <Check size={15} className="text-primary flex-shrink-0" strokeWidth={2.5} />
              FORENSICS
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="site" asChild>
              <Link to="/about">
                READ MORE ABOUT US <ArrowRight size={14} />
              </Link>
            </Button>
            <Button variant="outline" onClick={() => setDialog("quote")}>
              GET PRICES &amp; INFO
            </Button>
          </div>
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
          <Button
            variant="play"
            className="site-play"
            aria-label="Watch iHawu security operations video"
            onClick={() => setDialog("team")}
          >
            <Play size={21} fill="currentColor" />
          </Button>
        </div>
      </section>

      {/* 4. NEW SECTION 1: Featured Core Security Services */}
      <section className="site-page-section site-container" id="featured-solutions">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <PageHeading
            eyebrow="OUR SERVICES"
            title="COMPREHENSIVE SECURITY SOLUTIONS"
            description="Explore our specialized security services engineered for homes, corporations, retail establishments, and agricultural enterprises."
          />
          <Button variant="outline" size="sm" asChild className="self-start md:self-auto mb-9">
            <Link to="/services">
              VIEW ALL 9 SERVICES <ArrowRight size={14} />
            </Link>
          </Button>
        </div>

        <div className="site-product-grid">
          {featuredServices.map((item) => {
            const isSaved = saved.includes(item.id);
            const highlights = featuredHighlights[item.id] || [];

            return (
              <article className="site-product flex flex-col justify-between" key={item.id}>
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
                    <p>{item.description}</p>

                    {highlights.length > 0 && (
                      <ul className="space-y-1 mb-4 text-xs text-foreground/85">
                        {highlights.map((h) => (
                          <li key={h} className="flex items-center gap-1.5">
                            <Check size={13} className="text-primary flex-none" />
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
                      GET PRICES <ArrowRight size={13} />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/services">DETAILS</Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>



      {/* Quote / Team Dialog Modals */}
      {dialog && (
        <div className="site-dialog-backdrop" role="presentation" onMouseDown={() => setDialog(null)}>
          <div
            className="site-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="site-dialog-close"
              aria-label="Close"
              onClick={() => setDialog(null)}
            >
              <X />
            </Button>
            {dialog === "quote" ? (
              <>
                <h2 id="dialog-title">Get Prices &amp; Service Info</h2>
                <p>
                  Contact iHawu Security Services to ask about prices, packages, and custom security solutions for
                  guarding, CCTV, rapid response, CIT, or forensics.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="site" asChild>
                    <a href="mailto:info@ihawu.co.zw?subject=iHawu%20Security%20Prices%20and%20Info">
                      Email Us <ArrowRight size={15} />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="tel:0777023749">Call 0777023749 / 0784079015</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Open Contact Form</Link>
                  </Button>
                </div>
              </>
            ) : (
              <div className="site-dialog-video">
                <h2 id="dialog-title">iHawu Security in Action</h2>
                <div className="site-dialog-video-wrapper">
                  <video
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-full"
                    poster="/videos/ihawu-facebook-poster.webp"
                  >
                    <source src="/videos/ihawu-facebook-video.mp4" type="video/mp4" />
                    <source src="/videos/ihawu-facebook-video.webm" type="video/webm" />
                  </video>
                </div>
                <p>
                  Ihawu Security Services (Pvt) Ltd provides rapid armed response, dedicated physical guarding, and state-of-the-art surveillance operations across Harare, Bulawayo, and throughout Zimbabwe.
                </p>
                <div className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <ShieldCheck size={16} className="text-primary" /> Rigorous Vetting &amp; Background Checks
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Shield size={16} className="text-primary" /> 24/7 Armed Rapid Response &amp; Control Room
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="site" onClick={() => setDialog("quote")}>
                    Get Prices &amp; Info <ArrowRight size={15} />
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/services">Explore All Services</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}