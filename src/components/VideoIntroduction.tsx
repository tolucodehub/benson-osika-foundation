import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import introVideo from "@/assets/engr-benson-intro.mp4";

const VideoIntroduction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Autoplay was prevented, user needs to interact
        });
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isInView]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-primary relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-medium tracking-widest uppercase rounded-sm mb-4">
            Meet The Founder
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground">
            A Message From <span className="text-accent">Engr. Benson Osika</span>
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl group">
            {/* Video element */}
            <video
              ref={videoRef}
              src={introVideo}
              className="w-full aspect-video object-cover"
              muted={isMuted}
              playsInline
              loop
            />

            {/* Video overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none" />

            {/* Control buttons */}
            <div className="absolute bottom-4 right-4 flex gap-3">
              <motion.button
                onClick={togglePlay}
                className="p-3 bg-accent/90 hover:bg-accent text-accent-foreground rounded-full shadow-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <Play className={`w-5 h-5 ${isPlaying ? 'opacity-50' : ''}`} />
              </motion.button>
              <motion.button
                onClick={toggleMute}
                className="p-3 bg-accent/90 hover:bg-accent text-accent-foreground rounded-full shadow-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </motion.button>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-accent/50 rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-accent/50 rounded-br-lg" />
          </div>

          {/* Caption below video */}
          <motion.p 
            className="text-center text-primary-foreground/80 mt-6 text-lg italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            "Empowering the next generation through education, mentorship, and opportunity."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoIntroduction;
