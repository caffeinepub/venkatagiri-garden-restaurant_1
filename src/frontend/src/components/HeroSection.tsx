import { useEffect, useState } from "react";

const slides = [
  "/assets/generated/idly-sambar.dim_800x600.jpg",
  "/assets/generated/gobi-manchurian.dim_800x600.jpg",
  "/assets/generated/paneer-butter-masala.dim_800x600.jpg",
  "/assets/generated/masala-dosa.dim_800x600.jpg",
  "/assets/generated/veg-noodles.dim_800x600.jpg",
  "/assets/generated/restaurant-interior.dim_1200x800.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-16">
        <div className="absolute top-24 right-4 md:right-8 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
          <span className="text-base">🌱</span>
          <span>100% PURE VEG</span>
        </div>

        <div className="max-w-3xl">
          <p className="text-brand-orange font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
            Welcome to Venkatagiri Garden
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase leading-tight mb-5 tracking-tight">
            Delicious Veg Delights
            <br />
            <span className="text-brand-orange">for Every Family</span>
          </h1>
          <p className="text-white/85 text-base md:text-lg mb-8 font-medium">
            Pure Vegetarian &nbsp;|&nbsp; South Indian &nbsp;|&nbsp; North
            Indian &nbsp;|&nbsp; Chinese
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#menu"
              data-ocid="hero.primary_button"
              className="px-8 py-3.5 bg-brand-orange text-white font-bold rounded-full text-sm hover:bg-brand-orange-dark transition-all shadow-lg"
            >
              View Our Menu
            </a>
            <a
              href="#reservations"
              data-ocid="hero.secondary_button"
              className="px-8 py-3.5 border-2 border-white text-white font-bold rounded-full text-sm hover:bg-white hover:text-brand-green transition-all"
            >
              Book a Table
            </a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white text-sm max-w-2xl">
          <span className="flex items-center gap-2">
            <span>📍</span> Kalaburagi, Karnataka
          </span>
          <span className="flex items-center gap-2">
            <span>⏰</span> Opens 11 AM
          </span>
          <span className="flex items-center gap-2">
            <span>⭐</span> 3.8 (4.6K reviews)
          </span>
          <span className="flex items-center gap-2">
            <span>💰</span> ₹200–₹400 per person
          </span>
        </div>
      </div>

      <div className="relative z-10 flex justify-center gap-2 pb-6">
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "bg-brand-orange w-6" : "bg-white/50 w-2"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
