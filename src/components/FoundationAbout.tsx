import { motion } from "framer-motion";
import { Target, Users, BookOpen, Lightbulb } from "lucide-react";

const FoundationAbout = () => {
  const pillars = [
    { icon: Users, title: "Mentorship", subtitle: "Structured Programs" },
    { icon: BookOpen, title: "Education", subtitle: "Empowerment Initiatives" },
    { icon: Target, title: "Leadership", subtitle: "Training & Development" },
    { icon: Lightbulb, title: "Skills", subtitle: "Practical Workshops" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="foundation" className="section-padding bg-background overflow-hidden relative">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(220 50% 20%) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-5 py-2.5 bg-accent/10 text-accent text-sm font-medium tracking-[0.2em] uppercase rounded-full mb-4 border border-accent/15"
            whileHover={{ scale: 1.05 }}
          >
            Our Purpose
          </motion.span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            About <span className="text-gradient-gold">Benson Osika Foundation</span>
          </h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-background p-5 md:p-8 lg:p-12 rounded-2xl shadow-xl border border-border relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-accent/20 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-accent/20 rounded-br-2xl" />
            
            <motion.p 
              className="text-foreground/85 text-base md:text-lg leading-relaxed mb-4 md:mb-6 relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-4xl md:text-5xl font-serif text-accent float-left mr-2 md:mr-3 mt-1 leading-none">T</span>
              he Benson Osika Foundation was born out of a powerful vision—one deeply rooted in the 
              belief that every individual deserves an opportunity, the right support, and the tools 
              to succeed in life. We believe that the youth are our greatest hope for the future, 
              but hope alone is not enough. They need empowerment, guidance, quality education, and 
              a platform to thrive.
            </motion.p>

            <motion.p 
              className="text-foreground/85 text-base md:text-lg leading-relaxed mb-4 md:mb-6 relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              At the Benson Osika Foundation, we are committed to nurturing a generation of responsible, 
              confident, and impactful leaders. Through our structured mentorship programs, educational 
              empowerment initiatives, leadership training, and skill development workshops, we are 
              building a strong foundation—not just for individuals, but for our communities as a whole.
            </motion.p>

            <motion.p 
              className="text-foreground/85 text-base md:text-lg leading-relaxed mb-4 md:mb-6 relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              We understand that transformation begins with action. That is why we go beyond words and 
              promises. We invest in people. We create pathways. We open doors that were once closed. 
              Our programs are designed to equip young people with the knowledge, confidence, and 
              practical skills they need to navigate life's challenges and seize opportunities.
            </motion.p>

            <motion.p 
              className="text-accent text-base md:text-lg leading-relaxed font-semibold relative z-10 italic"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We are not just talking about change—we are building it, one life at a time.
            </motion.p>

            <motion.div 
              className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-border relative z-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {pillars.map((pillar) => (
                  <motion.div 
                    key={pillar.title}
                    className="p-5 rounded-xl bg-muted/50 border border-border hover:border-accent/30 transition-all group cursor-default"
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: "0 12px 30px -10px hsla(40, 80%, 55%, 0.2)" }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <pillar.icon className="w-6 h-6 text-accent" />
                    </motion.div>
                    <h4 className="text-base md:text-lg font-bold text-foreground mb-1">{pillar.title}</h4>
                    <p className="text-sm text-muted-foreground">{pillar.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundationAbout;
