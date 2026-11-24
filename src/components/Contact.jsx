import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "../data/siteData";
import { Reveal, SectionHeading } from "./Ui";

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Visit Us" title="Book Your Appointment" />
        <Reveal>
          <div className="contact">
            <div>
              <Phone size={22} strokeWidth={1.3} aria-hidden="true" />
              <h3>Call</h3>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </div>
            <div>
              <MapPin size={22} strokeWidth={1.3} aria-hidden="true" />
              <h3>Address</h3>
              <p>{site.address}</p>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps →</a>
            </div>
            <div>
              <Clock size={22} strokeWidth={1.3} aria-hidden="true" />
              <h3>Opening Hours</h3>
              {site.hours.map(([d, t]) => <p key={d}><span>{d}</span> {t}</p>)}
            </div>
          </div>
          <div className="center">
            <a className="btn btn--wa" href={whatsappLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Book on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
