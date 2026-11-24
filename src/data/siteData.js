import { Scissors, Sparkles, Palette, Sun, Droplets, HeartPulse, Wind, Waves } from "lucide-react";

const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70&w=${w}`;

export const site = {
  name: "Aurelle",
  tagline: "Hair Studio",
  headline: "Where Every Strand Tells a Story",
  description:
    "Luxury haircuts, colour and restorative treatments, crafted by artists who treat your hair like couture.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // country code + number, digits only
  whatsappMessage:
    "Hello Aurelle Hair Studio! I'd like to book an appointment. Service: ___  Preferred date/time: ___",
  address: "123 Your Street, Your Area, Your City – 000000",
  mapsUrl: "https://maps.google.com/?q=Your+Salon+Address",
  email: "hello@yoursalon.com",
  hours: [
    ["Monday – Friday", "10:00 AM – 8:00 PM"],
    ["Saturday", "9:00 AM – 9:00 PM"],
    ["Sunday", "11:00 AM – 6:00 PM"],
  ],
  social: "@aurellehairstudio",
};

export const images = {
  hero: img("photo-1560066984-138dadb4c035", 1800),
  about1: img("photo-1522337360788-8b13dee7a37e", 800),
  about2: img("photo-1562322140-8baeececf3df", 800),
};

export const about = {
  title: "The Art of Beautiful Hair",
  paragraphs: [
    "Aurelle was founded on a simple belief: great hair is personal. Our stylists listen first, then design a look that suits your face, lifestyle and texture.",
    "With over a decade of experience and continuous international training, our team blends precision cutting with modern colour techniques and premium, gentle products.",
  ],
  stats: [["10+", "Years of Craft"], ["15k+", "Happy Clients"], ["12", "Expert Stylists"]],
};

export const services = [
  { icon: Scissors, name: "Haircuts", desc: "Precision cuts tailored to your face shape, texture and routine.", price: "₹600" },
  { icon: Sparkles, name: "Hair Styling", desc: "Blowouts, curls and occasion styling that last all night.", price: "₹800" },
  { icon: Palette, name: "Hair Colouring", desc: "Rich, dimensional colour using ammonia-free premium formulas.", price: "₹3,500" },
  { icon: Sun, name: "Hair Highlights", desc: "Balayage, foils and babylights for sun-kissed depth.", price: "₹4,500" },
  { icon: Droplets, name: "Hair Spa", desc: "A deeply nourishing ritual with scalp massage and steam.", price: "₹1,800" },
  { icon: HeartPulse, name: "Hair Treatments", desc: "Keratin, protein and repair therapies for damaged hair.", price: "₹3,000" },
  { icon: Wind, name: "Hair Straightening", desc: "Sleek, glass-smooth straight hair with lasting results.", price: "₹5,500" },
  { icon: Waves, name: "Hair Smoothening", desc: "Frizz-free, silky movement while keeping natural body.", price: "₹5,000" },
];

export const pricingNote =
  "Sample prices shown. Final pricing may vary depending on hair length, thickness and specific service requirements.";

export const gallery = [
  { src: img("photo-1560066984-138dadb4c035"), label: "Signature Cuts", span: "tall" },
  { src: img("photo-1522337360788-8b13dee7a37e"), label: "Styling" },
  { src: img("photo-1562322140-8baeececf3df"), label: "Colour", span: "wide" },
  { src: img("photo-1595476108010-b4d1f102b1b1"), label: "Transformations" },
  { src: img("photo-1521590832167-7bcbfaa6381f"), label: "Highlights", span: "tall" },
  { src: img("photo-1580618672591-eb180b1a973f"), label: "Treatments" },
];

// SAMPLE testimonials – replace with genuine customer reviews
export const testimonials = [
  { name: "Sample Client A", text: "Sample review: The best haircut I've had in years. The team really listened to what I wanted.", rating: 5 },
  { name: "Sample Client B", text: "Sample review: My colour came out exactly like the reference photo. The salon feels truly luxurious.", rating: 5 },
  { name: "Sample Client C", text: "Sample review: The smoothening treatment transformed my hair. It is soft, shiny and manageable.", rating: 5 },
];

export const navLinks = [
  ["Home", "home"], ["About", "about"], ["Services", "services"],
  ["Pricing", "pricing"], ["Gallery", "gallery"], ["Reviews", "testimonials"], ["Contact", "contact"],
];

export const whatsappLink = () =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
