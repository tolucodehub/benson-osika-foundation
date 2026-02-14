import { motion } from "framer-motion";
import { Target, Users, BookOpen, Lightbulb } from "lucide-react";

const FoundationAbout = () => {
  const pillars = [
    { icon: Users, title: "Mentorship", subtitle: "Structured Programs", color: "from-accent/20 to-accent/5" },
    { icon: BookOpen, title: "Education", subtitle: "Empowerment Initiatives", color: "from-accent/15 to-accent/5" },
    { icon: Target, title: "Leadership", subtitle: "Training & Development", color: "from-accent/20 to-accent/5" },
    { icon: Lightbulb, title: "Skills", subtitle: "Practical Workshops", color: "from-accent/15 to-accent/5" },
  ];

  return (
    <section id="foundation" className="section-padding bg-gradient-to-b from-background via-background to-primary/5 overflow-hidden relative">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-5 py-2.5 bg-accent/10 text-accent text-sm font-medium tracking-[0.2em] uppercase rounded-full mb-4 border border-accent/10">
            Our Purpose
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            About <span className="text-accent">Benson Osika Foundation</span>
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
            className="bg-card p-5 md:p-8 lg:p-12 rounded-2xl shadow-xl border border-border/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/8 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full" />
            
            <motion.p 
              className="text-foreground/90 text-base md:text-lg leading-relaxed mb-4 md:mb-6 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
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
              className="text-foreground/90 text-base md:text-lg leading-relaxed mb-4 md:mb-6 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              At the Benson Osika Foundation, we are committed to nurturing a generation of responsible, 
              confident, and impactful leaders. Through our structured mentorship programs, educational 
              empowerment initiatives, leadership training, and skill development workshops, we are 
              building a strong foundation—not just for individuals, but for our communities as a whole.
            </motion.p>

            <motion.p 
              className="text-foreground/90 text-base md:text-lg leading-relaxed mb-4 md:mb-6 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              We understand that transformation begins with action. That is why we go beyond words and 
              promises. We invest in people. We create pathways. We open doors that were once closed. 
              Our programs are designed to equip young people with the knowledge, confidence, and 
              practical skills they need to navigate life's challenges and seize opportunities.
            </motion.p>

            <motion.p 
              className="text-foreground/90 text-base md:text-lg leading-relaxed font-semibold text-accent relative z-10 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We are not just talking about change—we are building it, one life at a time.
            </motion.p>

            <motion.div 
              className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-border/50 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {pillars.map((pillar, index) => (
                  <motion.div 
                    key={pillar.title}
                    className={`p-5 rounded-xl bg-gradient-to-b ${pillar.color} border border-accent/10 hover:border-accent/30 transition-all group cursor-default`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -8, boxShadow: "0 12px 30px -10px hsla(40, 80%, 55%, 0.2)" }}
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/25 transition-colors">
                      <pillar.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-accent mb-1">{pillar.title}</h4>
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
