import { Award, BookOpen, Heart, Users } from "lucide-react";
import bensonImage from "@/assets/benson-osika.jpg";

const About = () => {
  const highlights = [
    { icon: Award, label: "FNSE Fellow" },
    { icon: BookOpen, label: "PhD Candidate" },
    { icon: Heart, label: "Philanthropist" },
    { icon: Users, label: "Community Leader" },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium tracking-widest uppercase rounded-sm mb-4">
            About The Founder
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Engr. Benson Osika, <span className="text-accent">FNSE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Photo and Highlights */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            {/* Photo */}
            <div className="mb-8">
              <div className="relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl border-4 border-accent/20">
                  <img
                    src={bensonImage}
                    alt="Engr. Benson Osika, FNSE"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-accent-foreground font-serif font-bold text-lg">FNSE</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Bio */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border">
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                <span className="text-3xl font-serif text-accent float-left mr-3 mt-1">"</span>
                Engr. Benson Osika, FNSE is a highly respected energy professional, scholar, and 
                humanitarian with over two decades of impact across Africa's oil and gas sector. 
                He currently serves as Operations Manager – Completions System for Central and 
                West Africa at Weatherford, following earlier roles as Sales & Account Manager 
                and Manager for Well Construction Products.
              </p>
              
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                He holds a B.Tech in Mechanical Engineering, an M.Sc. in Petroleum Engineering 
                from Heriot-Watt University, advanced training in Data Science and Machine Learning 
                from MIT, and is presently pursuing a PhD in Energy Economics at the Emerald Energy 
                Institute, University of Port Harcourt.
              </p>
              
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                Beyond his technical expertise, Engr. Benson Osika is a passionate philanthropist 
                dedicated to education, healthcare, youth empowerment, and job creation. His desire 
                to uplift people and strengthen communities inspired the creation of the Benson Osika 
                Foundation, a platform committed to expanding opportunities and improving lives.
              </p>
              
              <p className="text-foreground/90 text-lg leading-relaxed">
                Driven by excellence and compassion, he continues to blend leadership, knowledge, 
                and service to make a meaningful difference across communities.
                <span className="text-3xl font-serif text-accent">"</span>
              </p>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/5 text-primary text-sm rounded-full">
                    Weatherford
                  </span>
                  <span className="px-4 py-2 bg-primary/5 text-primary text-sm rounded-full">
                    Heriot-Watt University
                  </span>
                  <span className="px-4 py-2 bg-primary/5 text-primary text-sm rounded-full">
                    MIT
                  </span>
                  <span className="px-4 py-2 bg-primary/5 text-primary text-sm rounded-full">
                    University of Port Harcourt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
