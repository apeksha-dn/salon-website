import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "../data/siteData";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="logo">{site.name} <small>{site.tagline}</small></p>
        <p>© {new Date().getFullYear()} {site.name} {site.tagline} · {site.social}</p>
      </footer>
      <a className="wa-float" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={26} />
      </a>
    </>
  );
}
