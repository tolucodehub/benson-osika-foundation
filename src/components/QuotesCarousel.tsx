import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Animated Decorative Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/3 rounded-full"
        animate={{ 
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ 
              rotateY: [0, 10, 0, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Quote className="w-10 h-10 md:w-16 md:h-16 text-accent mx-auto mb-6 md:mb-8 opacity-50" />
          </motion.div>
          
          <div className="min-h-[160px] md:min-h-[200px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p className="text-xl md:text-3xl lg:text-4xl font-serif text-primary-foreground leading-relaxed mb-6 md:mb-8 px-2">
                  "{quotes[currentIndex].text}"
                </p>
                <motion.footer 
                  className="text-accent font-medium tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  — {quotes[currentIndex].author}
                </motion.footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-10">
            {quotes.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                animate={{ 
                  width: index === currentIndex ? 32 : 12,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuotesCarousel;
