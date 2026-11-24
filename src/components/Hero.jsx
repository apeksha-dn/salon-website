import { images, site, whatsappLink } from "../data/siteData";
import { Img } from "./Ui";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Img src={images.hero} alt="Luxury hair salon interior" className="hero__bg" eager />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="eyebrow">Luxury Hair Salon</span>
        <h1>{site.headline}</h1>
        <p>{site.description}</p>
        <div className="hero__cta">
          <a className="btn" href={whatsappLink()} target="_blank" rel="noreferrer">Book Appointment</a>
          <a className="btn btn--ghost" href="#services">Explore Services</a>
        </div>
      </div>
    </section>
  );
}
