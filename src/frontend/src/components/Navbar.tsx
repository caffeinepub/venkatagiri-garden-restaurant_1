import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Reservations", href: "#reservations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <span className="font-bold text-brand-green text-sm md:text-base block">
              Venkatagiri Garden
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Multi Cuisine Family Restaurant
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-brand-green bg-brand-green-light"
                  : "text-foreground hover:text-brand-green hover:bg-brand-green-light"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservations"
            data-ocid="nav.primary_button"
            className="ml-3 px-4 py-2 bg-brand-green text-white text-sm font-semibold rounded-full hover:bg-brand-green-dark transition-colors"
          >
            Book a Table
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-brand-green bg-brand-green-light"
                    : "text-foreground hover:text-brand-green"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
