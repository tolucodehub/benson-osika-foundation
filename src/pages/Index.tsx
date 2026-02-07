import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FoundationAbout from "@/components/FoundationAbout";
import VideoIntroduction from "@/components/VideoIntroduction";
import QuotesCarousel from "@/components/QuotesCarousel";
import LatestNews from "@/components/LatestNews";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FoundationAbout />
      <VideoIntroduction />
      <About />
      <QuotesCarousel />
      <LatestNews />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
