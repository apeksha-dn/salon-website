import { useState } from "react";
import useReveal from "../hooks/useReveal";

export function Img({ src, alt, className = "", eager = false }) {
  const [ok, setOk] = useState(true);
  if (!ok) return <div className={`${className} img-fallback`} role="img" aria-label={alt} />;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setOk(false)}
    />
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, sub }) {
  return (
    <Reveal className="heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <span className="rule" aria-hidden="true" />
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}
