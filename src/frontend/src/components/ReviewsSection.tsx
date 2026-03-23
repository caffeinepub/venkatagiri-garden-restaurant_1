import { useScrollReveal } from "../hooks/useScrollReveal";

const reviews = [
  {
    name: "Ramesh Kumar",
    rating: 5,
    text: "Best veg restaurant in Kalaburagi! The Masala Dosa and Gobi Manchurian are absolutely divine. Perfect family dining atmosphere.",
    initials: "RK",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    rating: 4,
    text: "Loved the variety! South Indian breakfast followed by North Indian dinner — all under one roof. Great value for money.",
    initials: "PS",
    date: "1 month ago",
  },
  {
    name: "Suresh Patil",
    rating: 4,
    text: "The meals thali is incredible value. Clean, hygienic, and the staff is very welcoming. Our go-to family restaurant.",
    initials: "SP",
    date: "3 weeks ago",
  },
  {
    name: "Anitha Reddy",
    rating: 5,
    text: "Pure veg heaven! Gobi Manchurian is a must-try. The restaurant has a lovely ambiance perfect for family gatherings.",
    initials: "AR",
    date: "5 days ago",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-lg">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={
            i <= count
              ? "text-brand-orange"
              : "text-muted-foreground opacity-30"
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useScrollReveal();

  return (
    <section id="reviews" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div ref={ref} className="scroll-reveal text-center mb-12">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green mb-4">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="text-5xl font-extrabold text-brand-green">
              3.8
            </span>
            <div>
              <div className="flex gap-0.5 text-brand-orange text-2xl">
                ★★★★<span className="opacity-40">★</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on 4,600+ reviews
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border"
              data-ocid={`reviews.item.${i + 1}`}
            >
              <Stars count={r.rating} />
              <p className="text-foreground/80 text-sm leading-relaxed mt-3 mb-4">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center text-white text-xs font-bold">
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {r.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
