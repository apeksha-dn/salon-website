import { gallery } from "../data/siteData";
import { Img, Reveal, SectionHeading } from "./Ui";

export default function Gallery() {
  return (
    <section id="gallery" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Our Work" title="Gallery" sub="A glimpse of cuts, colour and transformations." />
        <div className="gallery">
          {gallery.map(({ src, label, span = "" }, i) => (
            <Reveal key={label} delay={(i % 3) * 80} className={`gallery__item ${span}`}>
              <Img src={src} alt={label} />
              <figcaption>{label}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
