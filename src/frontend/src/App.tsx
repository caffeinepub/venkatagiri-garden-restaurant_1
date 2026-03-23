import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import HighlightsBar from "./components/HighlightsBar";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import ReservationSection from "./components/ReservationSection";
import ReviewsSection from "./components/ReviewsSection";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen font-poppins">
        <Navbar />
        <main>
          <HeroSection />
          <HighlightsBar />
          <AboutSection />
          <MenuSection />
          <GallerySection />
          <ReviewsSection />
          <ReservationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
