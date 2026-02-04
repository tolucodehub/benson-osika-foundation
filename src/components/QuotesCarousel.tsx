import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Your Productivity today plants the seeds for tomorrow's success.",
    author: "Engr. Benson Osika",
  },
  {
    text: "You're not CREATED to fit in; you're created to STAND OUT.",
    author: "Engr. Benson Osika",
  },
  {
    text: "Every big dream starts with a single brave ACTION.",
    author: "Engr. Benson Osika",
  },
];

const QuotesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setIsAnimating(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-accent mx-auto mb-8 opacity-50" />
          
          <div className="min-h-[200px] flex flex-col items-center justify-center">
            <blockquote
              key={currentIndex}
              className={`transition-all duration-400 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="text-2xl md:text-4xl font-serif text-primary-foreground leading-relaxed mb-8">
                "{quotes[currentIndex].text}"
              </p>
              <footer className="text-accent font-medium tracking-wide">
                — {quotes[currentIndex].author}
              </footer>
            </blockquote>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-10">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 400);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesCarousel;
