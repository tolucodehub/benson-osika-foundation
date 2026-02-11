import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { newsItems } from "@/data/newsData";

const LatestNews = () => {
  return (
    <section id="news" className="section-padding bg-gradient-to-b from-background to-muted overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium tracking-widest uppercase rounded-sm mb-4">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Latest <span className="text-accent">News</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow our journey as we continue to make a difference in communities across Nigeria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/news/${news.id}`} className="block">
                {/* Image Container */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Date Badge */}
                  <motion.div
                    className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-sm flex items-center gap-2 shadow-lg"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                  >
                    <Calendar size={16} />
                    <span className="text-sm font-semibold">{news.date}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4 line-clamp-2 group-hover:text-accent transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-4 mb-4">
                    {news.content.split('\n\n')[0]}
                  </p>
                  <motion.span
                    className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Read More <ArrowRight size={18} />
                  </motion.span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
