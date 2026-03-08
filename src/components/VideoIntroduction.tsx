import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
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
      video.muted = false;
      video.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
        setShowUnmutePrompt(false);
      }).catch(() => {
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
      if (!newMuted) videoRef.current.play().catch(() => {});
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
      className="section-padding bg-muted/30 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, hsl(220 50% 20%) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-5 py-2.5 bg-accent/10 text-accent text-sm font-medium tracking-[0.2em] uppercase rounded-full mb-4 border border-accent/15"
            whileHover={{ scale: 1.05 }}
          >
            Meet The Founder
          </motion.span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            A Message From <span className="text-gradient-gold">Engr. Benson Osika</span>
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-border">
            <video
              ref={videoRef}
              src={introVideo}
              className="w-full aspect-video object-cover"
              muted={isMuted}
              playsInline
              preload="auto"
              loop
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />

            {showUnmutePrompt && (
              <motion.button
                onClick={toggleMute}
                className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full shadow-lg flex items-center gap-2 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <VolumeX className="w-4 h-4" /> Tap to unmute
              </motion.button>
            )}

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
            <div className="absolute top-0 left-0 w-12 h-12 border-l-3 border-t-3 border-accent/40 rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-3 border-b-3 border-accent/40 rounded-br-lg" />
          </div>

          <motion.p 
            className="text-center text-muted-foreground mt-6 text-lg italic"
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
