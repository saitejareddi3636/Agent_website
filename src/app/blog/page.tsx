"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "How AI is Transforming Customer Support",
      slug: "ai-support",
      excerpt: "Discover how artificial intelligence is revolutionizing customer service with 24/7 availability, instant responses, and personalized experiences.",
      date: "September 20, 2025",
      readTime: "5 min read"
    },
    {
      title: "Why Personalized AI Assistants Matter",
      slug: "personal-ai",
      excerpt: "Learn why personalization in AI assistants leads to better user experiences and increased productivity in both personal and business contexts.",
      date: "September 18, 2025",
      readTime: "4 min read"
    },
    {
      title: "Enterprise AI: Scaling Safely",
      slug: "enterprise-ai",
      excerpt: "Explore best practices for implementing AI solutions at enterprise scale while maintaining security, compliance, and reliability.",
      date: "September 15, 2025",
      readTime: "7 min read"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600">Insights, trends, and best practices in AI and automation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <motion.article
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mb-4">
              <span className="text-sm text-gray-500">{post.date} • {post.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link 
              href={`/blog/${post.slug}`} 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Read more →
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
