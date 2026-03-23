const highlights = [
  {
    icon: "🍽️",
    title: "All-You-Can-Eat",
    desc: "Unlimited thali options for the whole family",
  },
  {
    icon: "🎉",
    title: "Happy Hour",
    desc: "Special discounts from 3 PM to 6 PM daily",
  },
  {
    icon: "🏠",
    title: "Private Dining",
    desc: "Exclusive rooms for family celebrations & events",
  },
];

export default function HighlightsBar() {
  return (
    <section className="py-10 bg-brand-green">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="flex items-center gap-4 bg-white/10 rounded-xl px-6 py-4 border border-white/20"
            >
              <span className="text-4xl">{h.icon}</span>
              <div>
                <h3 className="text-white font-bold text-base">{h.title}</h3>
                <p className="text-white/80 text-sm mt-0.5">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
