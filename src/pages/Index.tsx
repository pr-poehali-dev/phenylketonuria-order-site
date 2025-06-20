import { useCart } from "@/hooks/useCart";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutPKU from "@/components/AboutPKU";
import ProductCatalog from "@/components/ProductCatalog";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  const { addToCart, getTotalItems } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={getTotalItems()} />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <AboutPKU />
      </div>
      <ProductCatalog onAddToCart={addToCart} />
      <div id="benefits">
        <Benefits />
      </div>
      <Reviews />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
