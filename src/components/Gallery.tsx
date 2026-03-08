import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import galleryImage1 from "@/assets/gallery-1.jpg";
import galleryImage2 from "@/assets/gallery-2.jpg";
import galleryImage3 from "@/assets/gallery-3.jpg";
import galleryImage4 from "@/assets/gallery-4.jpg";
import galleryImage5 from "@/assets/gallery-5.jpg";
import galleryImage6 from "@/assets/gallery-6.jpg";
import galleryImage7 from "@/assets/gallery-7.jpg";

const galleryImages = [
  { src: galleryImage1, alt: "Student with Nigerian flag at school event", caption: "School Outreach Program" },
  { src: galleryImage2, alt: "Foundation representatives at school donation", caption: "School Donation Ceremony" },
  { src: galleryImage3, alt: "School supplies and backpacks for students", caption: "Educational Supplies Distribution" },
  { src: galleryImage4, alt: "Presenting supplies to student", caption: "Student Support Initiative" },
  { src: galleryImage5, alt: "Handing backpack to student", caption: "Backpack Distribution" },
  { src: galleryImage6, alt: "Group photo with students receiving supplies", caption: "Community Support Event" },
  { src: galleryImage7, alt: "Group photo with students and backpacks", caption: "Foundation Outreach Program" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrevious = () => setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : (prev ?? 0) - 1));
  const goToNext = () => setSelectedImage((prev) => ((prev ?? 0) + 1) % galleryImages.length);

  return (
    <section id="gallery" className="section-padding bg-background overflow-hidden relative">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, hsl(220 50% 20%) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-5 py-2.5 bg-accent/10 text-accent text-sm font-medium tracking-[0.2em] uppercase rounded-full mb-4 border border-accent/15"
            whileHover={{ scale: 1.05 }}
          >
            Our Impact
          </motion.span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Event <span className="text-gradient-gold">Gallery</span>
          </h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of positive change and community impact through the Foundation's initiatives.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] shadow-md hover:shadow-xl transition-shadow duration-300 border border-border"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.caption}
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <motion.div 
                    className="w-10 h-10 bg-accent/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  >
                    <ZoomIn className="w-5 h-5 text-accent-foreground" />
                  </motion.div>
                </div>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <X size={32} />
              </motion.button>
              
              <motion.button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 text-white/80 hover:text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <ChevronLeft size={28} />
              </motion.button>
              
              <motion.button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 text-white/80 hover:text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <ChevronRight size={28} />
              </motion.button>

              <motion.div 
                className="max-w-5xl max-h-[85vh]" 
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <motion.p 
                  className="text-white text-center mt-4 text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {galleryImages[selectedImage].caption}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
