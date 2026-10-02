import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InnerBanner, PageHeading } from "@/components/site-shell";
import hero from "@/assets/security-hero.jpg";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact Us | iHawu Security Services" }, { name: "description", content: "Contact iHawu Security Services for home security, office security, guarding, rapid response, CCTV, and forensics in Harare & Bulawayo." },
  { property: "og:title", content: "Contact Us | iHawu Security Services" }, { property: "og:description", content: "Get in touch with iHawu Security Services for customized security solutions." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Contact });

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);
  const subject = encodeURIComponent(`iHawu Service enquiry${service ? `: ${service}` : ""}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service || "Not specified"}\n\n${message}`);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReady(true);
  };

  return (
    <main>
      <InnerBanner label="WE'RE HERE TO HELP" title="CONTACT US" image={hero} />
      <section className="site-page-section site-container">
        <PageHeading
          eyebrow="GET IN TOUCH"
          title="LET'S TALK SECURITY"
          description="Tell us what you need and our security team will provide tailored pricing and security advice."
        />
        <div className="site-contact-grid">
          <div className="site-contact-details">
            <h3>CONTACT INFORMATION</h3>
            <p>Speak to our team about guarding, CCTV, 24/7 monitoring, forensics, or rapid response.</p>
            <a href="mailto:info@ihawu.co.zw">
              <Mail />
              <span>
                <strong>EMAIL US</strong>info@ihawu.co.zw
              </span>
            </a>
            <a href="tel:0777023749">
              <Phone />
              <span>
                <strong>CALL US</strong>0777023749 / 0784079015
              </span>
            </a>
            <div>
              <Clock3 />
              <span>
                <strong>WORKING HOURS</strong>24/7 Monitoring &amp; Rapid Response
              </span>
            </div>
            <div>
              <MapPin />
              <span>
                <strong>LOCATIONS</strong>98 Alexander Drive - Hatfield, Harare / 4614 Gwabalanda, Bulawayo
              </span>
            </div>
          </div>

          <form className="site-form site-contact-form" onSubmit={submit}>
            <div className="site-form-row">
              <div>
                <label htmlFor="contact-name">YOUR NAME</label>
                <input
                  id="contact-name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email">EMAIL ADDRESS</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email"
                />
              </div>
            </div>

            <label htmlFor="contact-service">SERVICE</label>
            <select id="contact-service" value={service} onChange={(event) => setService(event.target.value)}>
              <option value="">Select a service</option>
              <option>Home Security &amp; Rapid Response</option>
              <option>Office &amp; Retail Security</option>
              <option>Guarding &amp; Bodyguard Services</option>
              <option>CCTV &amp; Alarm Systems</option>
              <option>Cash In Transit (CIT)</option>
              <option>Stock &amp; Cattle Tracking</option>
              <option>iHawu Forensics &amp; Investigation</option>
              <option>Security Engineering &amp; Access Control</option>
              <option>General Enquiry</option>
            </select>

            <label htmlFor="contact-message">YOUR MESSAGE</label>
            <textarea
              id="contact-message"
              required
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell us about your security requirements..."
            />

            <Button variant="site" type="submit">
              PREPARE EMAIL <Send size={15} />
            </Button>

            {ready && (
              <div className="site-form-feedback" role="status">
                <p>Your message is ready. Open your email app to send it to our team at info@ihawu.co.zw.</p>
                <Button variant="site" asChild>
                  <a href={`mailto:info@ihawu.co.zw?subject=${subject}&body=${body}`}>
                    OPEN EMAIL APP <Send size={15} />
                  </a>
                </Button>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}