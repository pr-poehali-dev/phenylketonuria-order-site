import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutPKU from "@/components/AboutPKU";
import ProductCatalog from "@/components/ProductCatalog";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutPKU />
      <ProductCatalog />
      <Benefits />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
