import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Heart, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/14U6ZRy3A1B/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-accent-foreground font-serif font-bold text-lg">BO</span>
              </motion.div>
              <span className="font-serif text-xl font-medium">Benson Osika Foundation</span>
            </motion.div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Committed to expanding opportunities and improving lives through education, 
              healthcare, youth empowerment, and skill acquisition.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-medium mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Gallery"].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-block group"
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-medium mb-6 text-accent">Contact</h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">Port Harcourt, Rivers State, Nigeria</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:bensonosikafoundation@gmail.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  bensonosikafoundation@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70">0803 709 7747</span>
              </motion.li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3 text-primary-foreground/80">Follow Us</h5>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-primary-foreground/10 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Benson Osika Foundation. All rights reserved.
            </p>
            <motion.p 
              className="text-primary-foreground/50 text-sm flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-accent" />
              </motion.span>
              for a better tomorrow
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
