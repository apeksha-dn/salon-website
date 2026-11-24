import { services } from "../data/siteData";
import { Reveal, SectionHeading } from "./Ui";

export default function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="What We Do" title="Our Services" sub="Every service begins with a personal consultation." />
        <div className="grid services">
          {services.map(({ icon: Icon, name, desc }, i) => (
            <Reveal key={name} delay={(i % 4) * 80}>
              <article className="card">
                <Icon size={32} strokeWidth={1.2} aria-hidden="true" />
                <h3>{name}</h3>
                <p>{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
