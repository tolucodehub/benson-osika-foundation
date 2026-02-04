import heroImage from "@/assets/hero-foundation.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(26, 38, 57, 0.85) 0%, rgba(26, 38, 57, 0.75) 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-medium tracking-widest uppercase rounded-sm">
              Empowering Communities
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Benson Osika
            <span className="block text-accent">Foundation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Dedicated to education, healthcare, youth empowerment, and job creation. 
            Building bridges of opportunity across communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="btn-foundation">
              Learn More
            </a>
            <a href="#gallery" className="btn-outline-light">
              View Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
