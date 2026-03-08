import { motion } from "framer-motion";
import { Award, BookOpen, Heart } from "lucide-react";
import bensonImage from "@/assets/benson-osika.jpg";

const About = () => {
  const highlights = [
    { icon: Award, label: "FNSE" },
    { icon: BookOpen, label: "PhD (in view)" },
    { icon: Heart, label: "Philanthropist" },
  ];

  const affiliations = [
    "Weatherford",
    "Heriot-Watt University",
    "MIT",
    "University of Port Harcourt",
  ];

  return (
    <section id="about" className="section-padding bg-background overflow-hidden relative">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, hsl(220 50% 20%) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-5 py-2.5 bg-accent/10 text-accent text-sm font-medium tracking-[0.2em] uppercase rounded-full mb-4 border border-accent/15"
            whileHover={{ scale: 1.05 }}
          >
            About The Founder
          </motion.span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Engr. Benson Osika, <span className="text-gradient-gold">FNSE</span>
          </h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Photo and Highlights */}
          <motion.div 
            className="lg:col-span-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Photo */}
            <motion.div 
              className="mb-8 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute -inset-3 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/20 relative">
                <img
                  src={bensonImage}
                  alt="Engr. Benson Osika, FNSE"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {highlights.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: "hsla(40, 80%, 55%, 0.05)" }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-5 h-5 text-accent" />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Bio */}
          <motion.div 
            className="lg:col-span-2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-background p-5 md:p-8 lg:p-12 rounded-2xl shadow-xl border border-border relative overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-accent/15 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-accent/15 rounded-bl-2xl" />
              
              <motion.p 
                className="text-foreground/85 text-base md:text-lg leading-relaxed mb-4 md:mb-6 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-3xl md:text-4xl font-serif text-accent float-left mr-2 md:mr-3 mt-1 leading-none">"</span>
                Engr. Benson Osika, FNSE is a highly respected energy professional, scholar, and 
                humanitarian with over two decades of impact across Africa's oil and gas sector. 
                He currently serves as Operations Manager – Completions System for Central and 
                West Africa at Weatherford, following earlier roles as Sales & Account Manager 
                and Manager for Well Construction Products.
              </motion.p>
              
              <motion.p 
                className="text-foreground/85 text-base md:text-lg leading-relaxed mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                He holds a B.Tech in Mechanical Engineering, an M.Sc. in Petroleum Engineering 
                from Heriot-Watt University, advanced training in Data Science and Machine Learning 
                from MIT, and is presently pursuing a PhD in Energy Economics at the Emerald Energy 
                Institute, University of Port Harcourt.
              </motion.p>
              
              <motion.p 
                className="text-foreground/85 text-base md:text-lg leading-relaxed mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Beyond his technical expertise, Engr. Benson Osika is a passionate philanthropist 
                dedicated to education, healthcare, youth empowerment, and skill acquisition. His desire 
                to uplift people and strengthen communities inspired the creation of the Benson Osika 
                Foundation, a platform committed to expanding opportunities and improving lives.
              </motion.p>
              
              <motion.p 
                className="text-foreground/85 text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Driven by excellence and compassion, he continues to blend leadership, knowledge, 
                and service to make a meaningful difference across communities.
                <span className="text-4xl font-serif text-accent leading-none">"</span>
              </motion.p>

              <motion.div 
                className="mt-8 pt-8 border-t border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex flex-wrap gap-3">
                  {affiliations.map((affiliation, index) => (
                    <motion.span 
                      key={affiliation}
                      className="px-4 py-2 bg-muted text-foreground text-sm rounded-full border border-border hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.08, y: -3 }}
                    >
                      {affiliation}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
