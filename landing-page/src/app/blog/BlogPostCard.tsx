"use client";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import Link from 'next/link';

// Type for a blog post (exported for extensibility)
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  author: string;
  excerpt: string;
  image: string;
};

// BlogPostCard: Animated, interactive card for a single blog post
// Props: post (object with slug, title, date, tags, author, excerpt, image)
export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.1} scale={1.02} tiltMaxAngleX={8} tiltMaxAngleY={8} className="rounded-2xl shadow-card bg-white dark:bg-[#18181b] border border-black/5 dark:border-white/10 p-6 flex flex-col items-start hover:shadow-2xl transition">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full">
        <Image src={post.image} alt={post.title} width={64} height={64} className="mb-4 rounded-xl" />
        <div className="flex gap-2 mb-2 flex-wrap">
          {post.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold">{tag}</span>
          ))}
        </div>
        <h2 className="text-lg font-bold text-primary mb-1">{post.title}</h2>
        <span className="text-xs text-foreground/60 mb-1">{post.date} • by {post.author}</span>
        <p className="text-foreground/80 mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-auto px-4 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">Read More</Link>
      </motion.div>
    </Tilt>
  );
} 