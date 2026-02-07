import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { getNewsById } from "@/data/newsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const news = id ? getNewsById(id) : undefined;

  if (!news) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto py-32 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
            News Article Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/#news"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} /> Back to News
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Image */}
      <motion.div
        className="relative h-[50vh] md:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <motion.article
          className="max-w-4xl mx-auto bg-card rounded-xl shadow-2xl border border-border overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-8 md:p-12">
            {/* Back Link */}
            <Link
              to="/#news"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={18} /> Back to Latest News
            </Link>

            {/* Date */}
            <motion.div
              className="flex items-center gap-2 text-accent mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Calendar size={18} />
              <span className="font-semibold">{news.date}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {news.title}
            </motion.h1>

            {/* Content */}
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {news.content.split("\n\n").map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-foreground/90 leading-relaxed mb-6 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Share Section */}
            <motion.div
              className="mt-12 pt-8 border-t border-border flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Share2 size={18} />
                <span className="font-medium">Share this article</span>
              </div>
              <Link
                to="/#news"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                <ArrowLeft size={18} /> More News
              </Link>
            </motion.div>
          </div>
        </motion.article>
      </div>

      <div className="py-16" />
      <Footer />
    </div>
  );
};

export default NewsDetail;
