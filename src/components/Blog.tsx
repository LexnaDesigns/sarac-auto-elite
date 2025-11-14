import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import AvaWidgetInline from "./AvaWidgetInline";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Get Approved for Auto Financing with Bad Credit",
    excerpt: "Discover the proven strategies that help thousands of Canadians secure automotive financing, even with challenged credit scores. Learn what lenders really look for and how to maximize your approval chances.",
    date: "November 10, 2025",
    readTime: "8 min read",
    category: "Credit Tips",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    slug: "/blog/bad-credit-auto-financing"
  },
  {
    id: 2,
    title: "Understanding Your Credit Score: What Lenders Really Look For",
    excerpt: "Decode your credit score and learn what auto lenders actually care about. Expert insights on credit factors, scoring models, and how to improve your approval odds.",
    date: "November 5, 2025",
    readTime: "10 min read",
    category: "Finance Education",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800",
    slug: "/blog/understanding-credit-score"
  },
  {
    id: 3,
    title: "5 Common Auto Loan Mistakes (And How to Avoid Them)",
    excerpt: "Don't let these avoidable errors cost you thousands or destroy your chances of approval. Learn from 12+ years of subprime finance expertise what NOT to do when applying for automotive financing.",
    date: "October 28, 2025",
    readTime: "9 min read",
    category: "Application Tips",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
    slug: "/blog/auto-loan-mistakes"
  },
  {
    id: 4,
    title: "Rebuilding Credit Through Auto Financing: A Step-by-Step Guide",
    excerpt: "Your car loan can be your ticket to better credit. Discover how strategic automotive financing can help rebuild your credit score while getting you into the vehicle you need.",
    date: "October 20, 2025",
    readTime: "10 min read",
    category: "Credit Building",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    slug: "/blog/rebuilding-credit"
  },
  {
    id: 5,
    title: "New vs. Used Cars: Which is Better for Your Budget?",
    excerpt: "Should you buy new or used? Get expert advice on making the right choice for your budget and credit situation. Real-world analysis from automotive finance specialist Jason Sarac.",
    date: "November 3, 2025",
    readTime: "9 min read",
    category: "Buyer's Guide",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    slug: "/blog/new-vs-used-cars"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-black via-charcoal to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-6 py-2 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
            Expert Insights
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-background mb-6">
            Automotive Finance <span className="text-transparent bg-clip-text bg-gradient-accent">Knowledge Hub</span>
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Empowering Canadians with expert knowledge on automotive financing, credit building, and subprime lending strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="group bg-gradient-to-br from-charcoal to-black border border-silver/20 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-black text-xs font-bold rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-silver/70 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-background mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-silver/80 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link to={post.slug}>
                  <Button 
                    variant="link" 
                    className="text-accent hover:text-accent/80 p-0 group/btn"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* AVA Credit Widget CTA Section */}
        <div className="bg-gradient-to-r from-accent/10 via-gold/10 to-accent/10 border border-accent/30 rounded-2xl p-12 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-background mb-4">
              Ready to Get <span className="text-accent">Pre-Approved?</span>
            </h3>
            <p className="text-silver text-lg max-w-2xl mx-auto">
              Don't let credit challenges hold you back. Check your credit and get pre-approved in minutes.
            </p>
          </div>
          
          <AvaWidgetInline className="max-w-3xl mx-auto" />
          
          <p className="text-silver/60 text-sm mt-6 text-center">No credit impact. No obligation. Results in minutes.</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
