import { pricingNote, services } from "../data/siteData";
import { Reveal, SectionHeading } from "./Ui";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container pricing">
        <SectionHeading eyebrow="Investment" title="Service Pricing" />
        <Reveal>
          <ul className="price-list">
            {services.map(({ name, price }) => (
              <li key={name}>
                <span>{name}</span>
                <i aria-hidden="true" />
                <b>from {price}</b>
              </li>
            ))}
          </ul>
          <p className="note">{pricingNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
