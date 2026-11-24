import { Star } from "lucide-react";
import { testimonials } from "../data/siteData";
import { Reveal, SectionHeading } from "./Ui";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading eyebrow="Kind Words" title="Client Reviews" sub="Sample testimonials for demonstration – replace with genuine customer reviews." />
        <div className="grid reviews">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="card review">
                <div aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }, (_, k) => <Star key={k} size={16} fill="currentColor" />)}
                </div>
                <blockquote>“{t.text}”</blockquote>
                <figcaption>{t.name} <em>(sample)</em></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
