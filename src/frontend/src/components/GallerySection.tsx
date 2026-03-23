import { useScrollReveal } from "../hooks/useScrollReveal";

const images = [
  { src: "/assets/generated/idly-sambar.dim_800x600.jpg", alt: "Idly Sambar" },
  {
    src: "/assets/generated/gobi-manchurian.dim_800x600.jpg",
    alt: "Gobi Manchurian",
  },
  {
    src: "/assets/generated/paneer-butter-masala.dim_800x600.jpg",
    alt: "Paneer Butter Masala",
  },
  { src: "/assets/generated/masala-dosa.dim_800x600.jpg", alt: "Masala Dosa" },
  { src: "/assets/generated/veg-noodles.dim_800x600.jpg", alt: "Veg Noodles" },
  {
    src: "/assets/generated/restaurant-interior.dim_1200x800.jpg",
    alt: "Restaurant Interior",
  },
];

export default function GallerySection() {
  const ref = useScrollReveal();

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="scroll-reveal text-center mb-10">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">
            Visuals
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green">
            Food & Ambiance Gallery
          </h2>
          <p className="text-muted-foreground mt-3">
            A glimpse into our kitchen and dining experience
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="gallery-item rounded-2xl overflow-hidden shadow-card aspect-video cursor-pointer"
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
