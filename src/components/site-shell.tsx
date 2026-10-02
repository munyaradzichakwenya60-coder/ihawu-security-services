import { Link, useRouterState } from "@tanstack/react-router";
import { createContext, useContext, useState, type ReactNode } from "react";
import { ChevronRight, Clock3, Mail, MapPin, Phone, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/social-icons";
import type { ProductId } from "@/lib/catalog";

const WishlistContext = createContext<{ saved: ProductId[]; toggle: (id: ProductId) => void } | null>(null);
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("Wishlist must be used inside the site shell");
  return context;
}

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState<ProductId[]>([]);
  const toggle = (id: ProductId) =>
    setSaved((items) => (items.includes(id) ? items.filter((item) => item !== id) : [...items, id]));
  const path = useRouterState({ select: (state) => state.location.pathname });
  const matches = links.filter((link) => link.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <WishlistContext.Provider value={{ saved, toggle }}>
      <div className="site-topline">
        <div className="site-container site-topline-inner">
          <span className="site-location">
            <MapPin size={12} /> 98 Alexander Drive, Hatfield, Harare / 4614 Gwabalanda, Bulawayo
          </span>
          <div className="site-top-actions">
            <span className="site-socials" aria-label="Social media">
              <a
                href="https://m.facebook.com/p/iHawu-Investment-Pvt-Ltd-100083360496083/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon size={14} />
              </a>
              <a
                href="https://wa.me/263786569642"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={14} />
              </a>
              <a href="#home" aria-label="LinkedIn">
                <LinkedInIcon size={14} />
              </a>
              <a href="#home" aria-label="Instagram">
                <InstagramIcon size={14} />
              </a>
            </span>
            <Link to="/contact" className="site-top-cta">
              Get Prices &amp; Info <ChevronRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      <header className="site-mainhead">
        <div className="site-container site-mainhead-inner">
          <Link className="site-logo" to="/" aria-label="iHawu Security home">
            <img src="/ihawu-logo.png" alt="iHawu Security Logo" className="site-logo-img" />
            <span className="site-logo-words">
              <span className="site-logo-title">iHawu</span>
              <span className="site-logo-subtitle">Security Services</span>
            </span>
          </Link>
          <div className="site-contact-list">
            <a className="site-contact-item" href="mailto:info@ihawu.co.zw">
              <Mail size={20} strokeWidth={1.75} /> info@ihawu.co.zw
            </a>
            <a className="site-contact-item" href="tel:0777023749">
              <Phone size={20} strokeWidth={1.75} /> 0777023749 / 0784079015
            </a>
            <span className="site-contact-item">
              <Clock3 size={20} strokeWidth={1.75} /> 24/7 Monitoring &amp; Rapid Response
            </span>
          </div>
        </div>
      </header>

      <nav className="site-navigation" aria-label="Main navigation">
        <div className="site-container site-navigation-inner">
          <div className="site-nav-links">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`site-nav-link${path === link.to || (link.to === "/about" && path === "/page") || (link.to === "/services" && path === "/service") ? " active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button
            variant="nav"
            className="site-search-toggle"
            aria-label={searchOpen ? "Close search" : "Open search"}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            {searchOpen ? <X size={16} /> : <Search size={16} />}
          </Button>
        </div>
      </nav>

      {searchOpen && (
        <div className="site-search-bar">
          <div className="site-container">
            <div className="site-search-inner">
              <input
                autoFocus
                className="site-search-input"
                type="search"
                placeholder="Search pages and services..."
                aria-label="Search pages"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <Button variant="site" onClick={() => setSearch("")} aria-label="Clear search">
                <X size={15} />
              </Button>
            </div>
            {search && (
              <div className="site-search-results">
                {matches.length
                  ? matches.map((link) => (
                      <Link key={link.to} to={link.to} onClick={() => setSearchOpen(false)}>
                        {link.label}
                      </Link>
                    ))
                  : "No matching pages found"}
              </div>
            )}
          </div>
        </div>
      )}

      {children}

      {/* Multi-Tier Footer */}
      <footer className="site-footer">
        <div className="site-container site-footer-main">
          <div className="site-footer-grid">
            {/* Col 1: Brand & Profile */}
            <div className="site-footer-col">
              <div className="site-footer-brand">
                <img src="/ihawu-logo.png" alt="iHawu Security" className="h-11 w-auto object-contain" />
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl leading-none tracking-tight text-primary-foreground font-display">
                    iHawu
                  </span>
                  <span className="text-[9px] font-bold text-primary uppercase tracking-widest mt-1 font-display">
                    Security Services
                  </span>
                </div>
              </div>
              <p>
                Ihawu Security Services (Pvt) Ltd is a Zimbabwean company dedicated to delivering excellent contemporary
                security services across Zimbabwe. Formerly Aziz Security Company (incorporated in 2021).
              </p>
              <div className="site-footer-socials">
                <a
                  href="https://m.facebook.com/p/iHawu-Investment-Pvt-Ltd-100083360496083/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={15} />
                </a>
                <a
                  href="https://wa.me/263786569642"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={15} />
                </a>
                <a href="#home" aria-label="LinkedIn">
                  <LinkedInIcon size={15} />
                </a>
                <a href="#home" aria-label="Instagram">
                  <InstagramIcon size={15} />
                </a>
              </div>
            </div>

            {/* Col 2: Core Services */}
            <div className="site-footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="/services">
                    <ChevronRight size={12} className="text-primary" /> Home Security &amp; Alarms
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ChevronRight size={12} className="text-primary" /> Office &amp; Commercial Guarding
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ChevronRight size={12} className="text-primary" /> Bodyguard &amp; VIP Protection
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ChevronRight size={12} className="text-primary" /> CCTV Installation &amp; Monitoring
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ChevronRight size={12} className="text-primary" /> Cash In Transit (CIT)
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ChevronRight size={12} className="text-primary" /> Stock &amp; Cattle Tracking
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ChevronRight size={12} className="text-primary" /> iHawu Forensics &amp; Fraud
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ChevronRight size={12} className="text-primary" /> Security Engineering
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div className="site-footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">
                    <ChevronRight size={12} className="text-primary" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <ChevronRight size={12} className="text-primary" /> About Our Company
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ChevronRight size={12} className="text-primary" /> Security Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <ChevronRight size={12} className="text-primary" /> Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Locations */}
            <div className="site-footer-col">
              <h4>Contact &amp; Offices</h4>
              <div className="site-footer-contact-list">
                <div className="site-footer-contact-item">
                  <MapPin size={16} />
                  <span>
                    <strong>Harare:</strong> 98 Alexander Drive, Hatfield, Harare
                  </span>
                </div>
                <div className="site-footer-contact-item">
                  <MapPin size={16} />
                  <span>
                    <strong>Bulawayo:</strong> 4614 Gwabalanda, Bulawayo
                  </span>
                </div>
                <div className="site-footer-contact-item">
                  <Phone size={16} />
                  <span>
                    <a href="tel:0777023749">0777023749</a> / <a href="tel:0784079015">0784079015</a>
                  </span>
                </div>
                <div className="site-footer-contact-item">
                  <Mail size={16} />
                  <a href="mailto:info@ihawu.co.zw">info@ihawu.co.zw</a>
                </div>
                <div className="site-footer-contact-item">
                  <Clock3 size={16} />
                  <span>24/7 Operations &amp; Control Room</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <div className="site-container site-footer-bottom-inner">
            <span>
              &copy; {new Date().getFullYear()} iHawu Security Services (Pvt) Ltd. All Rights Reserved.
            </span>
            <span>Contemporary Security Service System &bull; Harare &amp; Bulawayo, Zimbabwe</span>
          </div>
        </div>
      </footer>
    </WishlistContext.Provider>
  );
}

export function InnerBanner({ label, title, image }: { label: string; title: string; image: string }) {
  return (
    <section className="site-inner-banner">
      <img src={image} alt="" width={1920} height={760} />
      <div className="site-container site-inner-banner-content">
        <span className="site-label">{label}</span>
        <h1>{title}</h1>
        <p>
          <Link to="/">Home</Link>
          <ChevronRight size={13} /> {title}
        </p>
      </div>
    </section>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="site-page-heading">
      <span className="site-label">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}