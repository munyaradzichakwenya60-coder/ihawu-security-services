import equipment from "@/assets/security-equipment.jpg";
import monitoring from "@/assets/security-monitoring.jpg";
import officer from "@/assets/security-team.jpg";

export const products = [
  {
    id: "home-security",
    name: "Home Security & Rapid Response",
    category: "RESIDENTIAL SECURITY",
    image: officer,
    description: "Tailored home security solutions including 24/7 Rapid Response, electric fence installation, CCTV surveillance, access control, and alarm monitoring for your family's peace of mind.",
  },
  {
    id: "office-security",
    name: "Office & Business Security",
    category: "COMMERCIAL SECURITY",
    image: equipment,
    description: "Comprehensive retail and commercial protection from theft, vandalism, and unauthorized entry. Includes 24/7 patrol units, monitoring, and security gadget procurement (metal detectors, safes).",
  },
  {
    id: "bodyguard",
    name: "Bodyguard & Executive Protection",
    category: "CLOSE PROTECTION",
    image: officer,
    description: "Elite security guards and specially trained executive protection personnel for VIPs, corporate functions, concerts, and private events in high-stakes environments.",
  },
  {
    id: "alarm-systems",
    name: "Alarm Systems & Active Response",
    category: "ELECTRONIC SECURITY",
    image: equipment,
    description: "Precision alarm system installation, client education, and 24/7 monitoring designed to instantly alert our rapid response team and local authorities upon any security breach.",
  },
  {
    id: "cctv-surveillance",
    name: "CCTV Surveillance Systems",
    category: "SURVEILLANCE & AI",
    image: equipment,
    description: "High-definition, low-light surveillance cameras covering all perimeter angles with 24/7 live control room monitoring, proactive threat interception, and scheduled maintenance.",
  },
  {
    id: "cash-in-transit",
    name: "Cash In Transit (CIT)",
    category: "TRANSIT SECURITY",
    image: monitoring,
    description: "Specialized, highly secure transportation of cash and high-value assets with experienced, heavily trained personnel ensuring total risk mitigation for businesses.",
  },
  {
    id: "stock-tracking",
    name: "Stock & Cattle Tracking",
    category: "AGRICULTURAL SECURITY",
    image: officer,
    description: "Innovative livestock telemetry and cattle tracking services for farmers and villagers, combining advanced GPS technology with former herd boys' honed tracking expertise to eliminate theft.",
  },
  {
    id: "forensics",
    name: "iHawu Forensics & Investigation",
    category: "INVESTIGATION & FORENSICS",
    image: monitoring,
    description: "Comprehensive forensic services including digital forensics, forensic accounting, crime scene analysis, Voice Stress Analysis (VSA), fingerprinting, and expert court testimony alongside the ZRP.",
  },
  {
    id: "engineering",
    name: "Custom Security Engineering",
    category: "ACCESS CONTROL & ENGINEERING",
    image: equipment,
    description: "Precision security engineering services including automatic gates, commercial sliding doors, motion sensor perimeter lighting, and biometric access control.",
  },
] as const;

export type ProductId = (typeof products)[number]["id"];