import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import introVideo from "@/assets/engr-benson-intro.mp4";

const VideoIntroduction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showUnmutePrompt, setShowUnmutePrompt] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      // Try unmuted autoplay first
      video.muted = false;
      video.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
        setShowUnmutePrompt(false);
      }).catch(() => {
        // Unmuted autoplay blocked — fallback to muted
        video.muted = true;
        setIsMuted(true);
        video.play().then(() => {
          setIsPlaying(true);
          setShowUnmutePrompt(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      });
    } else {
      video.pause();
      setIsPlaying(false);
      setShowUnmutePrompt(false);
    }
  }, [isInView]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
      setShowUnmutePrompt(false);
      if (!newMuted) {
        videoRef.current.play().catch(() => {});
      }
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            {/* Video element */}
            <video
              ref={videoRef}
              src={introVideo}
              className="w-full aspect-video object-cover"
              muted={isMuted}
              playsInline
              preload="auto"
              loop
            />

            {/* Video overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none" />

            {/* Unmute prompt banner */}
            {showUnmutePrompt && (
              <motion.button
                onClick={toggleMute}
                className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full shadow-lg flex items-center gap-2 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <VolumeX className="w-4 h-4" /> Tap to unmute
              </motion.button>
            )}

            {/* Control buttons */}
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex gap-2 md:gap-3">
              <motion.button
                onClick={togglePlay}
                className="p-2.5 md:p-3 bg-accent/90 hover:bg-accent text-accent-foreground rounded-full shadow-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" /> : <Play className="w-4 h-4 md:w-5 md:h-5" />}
              </motion.button>
              <motion.button
                onClick={toggleMute}
                className="p-2.5 md:p-3 bg-accent/90 hover:bg-accent text-accent-foreground rounded-full shadow-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 md:w-5 md:h-5" /> : <Volume2 className="w-4 h-4 md:w-5 md:h-5" />}
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
