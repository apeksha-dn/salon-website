import { about, images } from "../data/siteData";
import { Img, Reveal, SectionHeading } from "./Ui";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__text">
          <SectionHeading eyebrow="About Us" title={about.title} />
          <Reveal delay={100}>
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <ul className="stats">
              {about.stats.map(([n, l]) => (
                <li key={l}><strong>{n}</strong><span>{l}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal className="about__images" delay={150}>
          <Img src={images.about1} alt="Stylist creating a haircut" className="about__img a" />
          <Img src={images.about2} alt="Beautifully styled hair" className="about__img b" />
        </Reveal>
      </div>
    </section>
  );
}
