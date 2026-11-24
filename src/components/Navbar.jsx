import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site, whatsappLink } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          {site.name} <small>{site.tagline}</small>
        </a>

        <nav id="menu" className={`nav__links ${open ? "open" : ""}`} aria-label="Main">
          {navLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn--sm" href={whatsappLink()} target="_blank" rel="noreferrer">Book Now</a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
