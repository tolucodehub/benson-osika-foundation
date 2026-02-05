const FoundationAbout = () => {
  return (
    <section id="foundation" className="section-padding bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium tracking-widest uppercase rounded-sm mb-4">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            About <span className="text-accent">Benson Osika Foundation</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border">
            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              <span className="text-4xl font-serif text-accent float-left mr-3 mt-1">T</span>
              he Benson Osika Foundation was born out of a powerful vision—one deeply rooted in the 
              belief that every individual deserves an opportunity, the right support, and the tools 
              to succeed in life. We believe that the youth are our greatest hope for the future, 
              but hope alone is not enough. They need empowerment, guidance, quality education, and 
              a platform to thrive.
            </p>

            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              At the Benson Osika Foundation, we are committed to nurturing a generation of responsible, 
              confident, and impactful leaders. Through our structured mentorship programs, educational 
              empowerment initiatives, leadership training, and skill development workshops, we are 
              building a strong foundation—not just for individuals, but for our communities as a whole.
            </p>

            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              We understand that transformation begins with action. That is why we go beyond words and 
              promises. We invest in people. We create pathways. We open doors that were once closed. 
              Our programs are designed to equip young people with the knowledge, confidence, and 
              practical skills they need to navigate life's challenges and seize opportunities.
            </p>

            <p className="text-foreground/90 text-lg leading-relaxed font-medium text-accent">
              We are not just talking about change—we are building it, one life at a time.
            </p>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4">
                  <h4 className="text-2xl font-bold text-accent mb-1">Mentorship</h4>
                  <p className="text-sm text-muted-foreground">Structured Programs</p>
                </div>
                <div className="p-4">
                  <h4 className="text-2xl font-bold text-accent mb-1">Education</h4>
                  <p className="text-sm text-muted-foreground">Empowerment Initiatives</p>
                </div>
                <div className="p-4">
                  <h4 className="text-2xl font-bold text-accent mb-1">Leadership</h4>
                  <p className="text-sm text-muted-foreground">Training & Development</p>
                </div>
                <div className="p-4">
                  <h4 className="text-2xl font-bold text-accent mb-1">Skills</h4>
                  <p className="text-sm text-muted-foreground">Practical Workshops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationAbout;
