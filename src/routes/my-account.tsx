import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Heart, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InnerBanner, PageHeading, useWishlist } from "@/components/site-shell";
import hero from "@/assets/security-hero.jpg";

export const Route = createFileRoute("/my-account")({ head: () => ({ meta: [
  { title: "My Account | iHawu Security" }, { name: "description", content: "Your iHawu Security Services account area and saved security solutions." },
  { property: "og:title", content: "My Account | iHawu Security" }, { property: "og:description", content: "Your account area and saved security solutions." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Account });

function Account() {
  const { saved } = useWishlist();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  return <main><InnerBanner label="YOUR ACCOUNT" title="MY ACCOUNT" image={hero} /><section className="site-page-section site-container"><PageHeading eyebrow="WELCOME BACK" title="ACCOUNT OVERVIEW" /><div className="site-account-grid"><div className="site-account-panel"><UserRound className="site-panel-icon" size={33} /><h3>ACCOUNT ACCESS</h3><p>For service enquiries, pricing, and account assistance, our team is here to help.</p><form onSubmit={submit} className="site-form"><label htmlFor="account-email">EMAIL ADDRESS</label><input id="account-email" type="email" required placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} /><Button variant="site" type="submit">REQUEST ACCOUNT HELP <ArrowRight size={15} /></Button>{submitted && <p role="status">Please email <a href={`mailto:info@ihawu.co.zw?subject=iHawu%20Account%20Help&body=My%20email%20is%20${encodeURIComponent(email)}`}>info@ihawu.co.zw</a> from your email app for account assistance. No account request has been sent.</p>}</form></div><div className="site-account-panel"><Heart className="site-panel-icon" size={33} /><h3>SAVED SOLUTIONS</h3><p>You have {saved.length} {saved.length === 1 ? "item" : "items"} in your wishlist this visit.</p><Button variant="site" asChild><Link to="/wishlist">VIEW WISHLIST <ArrowRight size={15} /></Link></Button><div className="site-account-note"><LockKeyhole size={17} /><span>Account sign-in is not yet available. You can still browse and ask for prices.</span></div></div></div></section></main>;
}