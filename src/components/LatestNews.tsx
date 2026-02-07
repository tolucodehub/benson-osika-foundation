import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import newsScholarship from "@/assets/news-scholarship.jpg";
import newsOguMonument from "@/assets/news-ogu-monument.jpg";

const newsItems = [
  {
    id: 1,
    image: newsOguMonument,
    title: "Ogu Town Landmark Monument & Civic Centre Restoration",
    date: "December 23, 2025",
    excerpt: `In the spirit of Christmas and its significance to giving and sharing love, Engr. Benson Osika through his Foundation, the Benson Osika Foundation has brought smiles and joy to the people of Ogu town in Ogu-Bolo LGA of Rivers State.

The iconic and symbolic Ogu landmark monument, which had gone pale and bruised by the elements and lost its glow has been revamped and modelled into an iconic cultural artistic landmark, showcasing the rich cultural heritage of the Ogu people.

The Ogu Town Civic Arena and Pavilion, a space used for culture, celebration, and community activities was also repainted to reclaim its shine and beauty after enduring periods of harsh weather and human factors.

The Ogu civic centre, now transformed into a shining masterpiece is ready once again for festivals, events, and unforgettable moments. Standing proudly beside it, the Ogu Landmark Monument now rises as a bold cultural and artistic expression—a symbol of heritage, identity, and renewed pride, drawing admiration from the people.

This restoration project represents a deep commitment to preserving the cultural identity of the Ogu people while inspiring future generations to take pride in their heritage. The vibrant artistic expressions adorning the monument tell the stories of the community's history, traditions, and aspirations.

This is more than renovation. This is restoration of culture. Revival of community spirit. And a gift to Ogu Town this festive season.

Courtesy of: Engr. Benson Osika & The Benson Osika Foundation.`,
  },
  {
    id: 2,
    image: newsScholarship,
    title: "Scholarship Award Presentation at State Primary School Elekahia",
    date: "October 28, 2025",
    excerpt: `It was a joyful day on the 28th of October, as parents, pupils and staff of State Primary School Elekahia witnessed the scholarship award presentation to two outstanding pupils of the school, Master Princewill and Miss Favour.

The scholarship award was presented to the pupils by Benson Osika Foundation, for their outstanding academic and social performances. This initiative is part of the Foundation's commitment to identifying and nurturing young talents who demonstrate exceptional dedication to their studies and positive influence within their school community.

The selection process considered not only academic excellence but also character, leadership qualities, and active participation in extracurricular activities. Both recipients have shown remarkable resilience and determination in their educational journey, serving as role models to their peers.

The scholarship covers tuition fees, learning materials, and school supplies, ensuring that these bright minds can focus on their education without financial constraints. The Foundation believes that investing in education is the most powerful tool for breaking the cycle of poverty and creating lasting change in communities.

Parents and teachers expressed deep gratitude for this gesture, noting that such recognition motivates other students to strive for excellence. The Foundation remains committed to expanding this program to reach more deserving students across Rivers State and beyond.`,
  },
];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
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
                  {news.excerpt.split('\n\n')[0]}
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Read More <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
