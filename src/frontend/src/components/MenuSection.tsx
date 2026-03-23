import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScrollReveal } from "../hooks/useScrollReveal";

type MenuItem = { name: string; price: number; image: string | null };
type MenuData = { [key: string]: MenuItem[] };

const menuData: MenuData = {
  "South Indian": [
    {
      name: "Idly Sambar",
      price: 80,
      image: "/assets/generated/idly-sambar.dim_800x600.jpg",
    },
    {
      name: "Masala Dosa",
      price: 120,
      image: "/assets/generated/masala-dosa.dim_800x600.jpg",
    },
    { name: "Plain Dosa", price: 90, image: null },
    { name: "Vada", price: 70, image: null },
    { name: "Pongal", price: 90, image: null },
    { name: "Full Meals", price: 160, image: null },
    { name: "Mini Meals", price: 120, image: null },
    { name: "Upma", price: 60, image: null },
    { name: "Poha", price: 60, image: null },
  ],
  "North Indian": [
    {
      name: "Paneer Butter Masala",
      price: 180,
      image: "/assets/generated/paneer-butter-masala.dim_800x600.jpg",
    },
    { name: "Dal Makhani", price: 160, image: null },
    { name: "Palak Paneer", price: 170, image: null },
    { name: "Jeera Rice", price: 120, image: null },
    { name: "Butter Naan", price: 40, image: null },
    { name: "Garlic Naan", price: 50, image: null },
    { name: "Roti", price: 30, image: null },
    { name: "Chole Bhature", price: 140, image: null },
    { name: "Rajma Rice", price: 150, image: null },
    { name: "Aloo Gobi", price: 130, image: null },
  ],
  Chinese: [
    {
      name: "Gobi Manchurian (Dry)",
      price: 160,
      image: "/assets/generated/gobi-manchurian.dim_800x600.jpg",
    },
    { name: "Gobi Manchurian (Gravy)", price: 170, image: null },
    { name: "Veg Fried Rice", price: 150, image: null },
    {
      name: "Hakka Noodles",
      price: 140,
      image: "/assets/generated/veg-noodles.dim_800x600.jpg",
    },
    { name: "Veg Chow Mein", price: 140, image: null },
    { name: "Paneer Chilli", price: 180, image: null },
    { name: "Spring Rolls", price: 120, image: null },
    { name: "Manchow Soup", price: 110, image: null },
  ],
};

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <div
      className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow border border-border"
      data-ocid={`menu.item.${index + 1}`}
    >
      {item.image ? (
        <div className="h-36 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="h-36 bg-brand-green-light flex items-center justify-center">
          <span className="text-4xl">🥗</span>
        </div>
      )}
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-brand-green bg-brand-green-light flex-shrink-0" />
          <span className="font-semibold text-xs text-foreground">
            {item.name}
          </span>
        </div>
        <span className="font-bold text-brand-green text-sm">
          ₹{item.price}
        </span>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const ref = useScrollReveal();

  return (
    <section id="menu" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div ref={ref} className="scroll-reveal text-center mb-10">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">
            What We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green">
            Our Menu
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Explore our wide variety of 100% vegetarian dishes crafted with love
          </p>
        </div>

        <Tabs defaultValue="South Indian" className="w-full">
          <TabsList className="flex justify-center mb-8 bg-transparent gap-2 flex-wrap h-auto">
            {Object.keys(menuData).map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                data-ocid="menu.tab"
                className="px-6 py-2.5 rounded-full border border-brand-green text-brand-green data-[state=active]:bg-brand-green data-[state=active]:text-white font-semibold text-sm"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(menuData).map(([cat, items]) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {items.map((item, i) => (
                  <MenuItemCard key={item.name} item={item} index={i} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 text-center">
          <Badge className="bg-brand-green-light text-brand-green border-0 px-4 py-2 text-sm">
            🌱 All items are 100% Pure Vegetarian
          </Badge>
        </div>
      </div>
    </section>
  );
}
