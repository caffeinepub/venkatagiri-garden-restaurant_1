import { useScrollReveal } from "../hooks/useScrollReveal";

const features = [
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    desc: "Farm-fresh vegetables and spices sourced daily",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Ambiance",
    desc: "A warm, welcoming space for every family",
  },
  {
    icon: "🍜",
    title: "Multi Cuisine",
    desc: "South Indian, North Indian, and Chinese",
  },
];

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green mb-5 leading-snug">
              A Family Restaurant
              <br />
              Born from Passion
            </h2>
            <p className="text-foreground/80 text-base leading-relaxed mb-4">
              Welcome to Venkatagiri Garden Multi Cuisine Family Restaurant —
              your home away from home in Kalaburagi. Since our founding, we
              have been dedicated to serving the finest 100% vegetarian cuisine,
              bringing together the rich flavors of South India, North India,
              and China under one roof.
            </p>
            <p className="text-foreground/80 text-base leading-relaxed mb-8">
              Our family-friendly atmosphere, warm hospitality, and commitment
              to quality have made us a beloved dining destination for families
              across Kalaburagi. Every dish is crafted with love, fresh
              ingredients, and traditional recipes passed down through
              generations.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-brand-green-light rounded-xl p-4 text-center"
                >
                  <span className="text-3xl block mb-2">{f.icon}</span>
                  <h4 className="font-bold text-brand-green text-xs mb-1">
                    {f.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/generated/restaurant-interior.dim_1200x800.jpg"
                alt="Restaurant interior"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-green text-white rounded-xl px-5 py-3 shadow-lg">
              <span className="text-2xl font-extrabold block">4.6K+</span>
              <span className="text-xs opacity-80">Happy Families</span>
            </div>
            <div className="absolute -top-4 -right-4 bg-brand-orange text-white rounded-xl px-5 py-3 shadow-lg">
              <span className="text-2xl font-extrabold block">⭐ 3.8</span>
              <span className="text-xs opacity-80">Star Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
