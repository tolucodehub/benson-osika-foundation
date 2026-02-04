import { Mail, MapPin, Phone, Heart, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-lg">BO</span>
              </div>
              <span className="font-serif text-xl font-medium">Benson Osika Foundation</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Committed to expanding opportunities and improving lives through education, 
              healthcare, youth empowerment, and job creation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-accent">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">Port Harcourt, Rivers State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:bensonosikafoundation@gmail.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  bensonosikafoundation@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70">0803 709 7747</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3 text-primary-foreground/80">Follow Us</h5>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/share/14U6ZRy3A1B/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Benson Osika Foundation. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent" /> for a better tomorrow
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
