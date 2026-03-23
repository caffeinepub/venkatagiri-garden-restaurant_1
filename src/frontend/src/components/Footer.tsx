import { Leaf } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      style={{ backgroundColor: "oklch(0.35 0.11 142)" }}
      className="text-white pt-14 pb-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-base block">
                  Venkatagiri Garden
                </span>
                <span className="text-xs opacity-70">
                  Multi Cuisine Family Restaurant
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Serving authentic 100% pure vegetarian cuisine with love and
              tradition in Kalaburagi.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-xs font-semibold">
              <span className="text-sm">🌱</span> 100% Pure Vegetarian
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Our Menu", "#menu"],
                ["Gallery", "#gallery"],
                ["Reviews", "#reviews"],
                ["Book a Table", "#reservations"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <span>📍</span>
                <span>
                  Old Jewargi Rd, beside Siddeshwar Kalyan Mantap, Kalaburagi,
                  Karnataka 585101
                </span>
              </li>
              <li className="flex gap-2">
                <span>⏰</span>
                <span>Mon – Sun: 11:00 AM – 10:30 PM</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <a
                  href="tel:+918904839954"
                  className="hover:text-white transition-colors"
                >
                  +91 89048 39954
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>
            &copy; {year} Venkatagiri Garden Multi Cuisine Family Restaurant.
            All rights reserved.
          </p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
