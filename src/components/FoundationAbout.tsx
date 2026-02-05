import { motion } from "framer-motion";
import { Target, Users, BookOpen, Lightbulb } from "lucide-react";

const FoundationAbout = () => {
  const pillars = [
    { icon: Users, title: "Mentorship", subtitle: "Structured Programs" },
    { icon: BookOpen, title: "Education", subtitle: "Empowerment Initiatives" },
    { icon: Target, title: "Leadership", subtitle: "Training & Development" },
    { icon: Lightbulb, title: "Skills", subtitle: "Practical Workshops" },
  ];

  return (
    <section id="foundation" className="section-padding bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium tracking-widest uppercase rounded-sm mb-4">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            About <span className="text-accent">Benson Osika Foundation</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <motion.p 
              className="text-foreground/90 text-lg leading-relaxed mb-6 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-4xl font-serif text-accent float-left mr-3 mt-1">T</span>
              he Benson Osika Foundation was born out of a powerful vision—one deeply rooted in the 
              belief that every individual deserves an opportunity, the right support, and the tools 
              to succeed in life. We believe that the youth are our greatest hope for the future, 
              but hope alone is not enough. They need empowerment, guidance, quality education, and 
              a platform to thrive.
            </motion.p>

            <motion.p 
              className="text-foreground/90 text-lg leading-relaxed mb-6 relative z-10"
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
              className="text-foreground/90 text-lg leading-relaxed mb-6 relative z-10"
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
              className="text-foreground/90 text-lg leading-relaxed font-medium text-accent relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We are not just talking about change—we are building it, one life at a time.
            </motion.p>

            <motion.div 
              className="mt-8 pt-8 border-t border-border relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {pillars.map((pillar, index) => (
                  <motion.div 
                    key={pillar.title}
                    className="p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors group cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <pillar.icon className="w-8 h-8 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-accent mb-1">{pillar.title}</h4>
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
