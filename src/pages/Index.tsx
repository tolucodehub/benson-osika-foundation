import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import QuotesCarousel from "@/components/QuotesCarousel";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <QuotesCarousel />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
