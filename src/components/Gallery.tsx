import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
  
  const goToPrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : (prev ?? 0) - 1));
  };
  
  const goToNext = () => {
    setSelectedImage((prev) => ((prev ?? 0) + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium tracking-widest uppercase rounded-sm mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Event <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of positive change and community impact through the Foundation's initiatives.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium text-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 text-white/80 hover:text-white p-2 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 text-white/80 hover:text-white p-2 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>

            <div className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {galleryImages[selectedImage].caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
