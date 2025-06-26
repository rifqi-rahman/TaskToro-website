// Enhanced TaskToro Blog Page with featured post, tags, author, and animation
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Placeholder blog posts data
const blogPosts = [
  {
    title: "🎉 TaskToro 1.0 Launch!",
    date: "2024-06-27",
    excerpt: "We are live! TaskToro is now available on the App Store. Start your productivity journey today.",
    featured: true,
    image: "/TaskToro icon web.svg",
    tags: ["Announcement", "Release"],
    author: "Rifqi Rahman"
  },
  {
    title: "🔔 New: Pomodoro Focus Mode",
    date: "2024-06-20",
    excerpt: "Stay focused with our new Pomodoro timer and Focus Mode. Level up your productivity!",
    image: "/timer.svg",
    tags: ["Feature", "Productivity"],
    author: "Rifqi Rahman"
  },
  {
    title: "🌙 Dark Mode Arrives",
    date: "2024-06-15",
    excerpt: "Switch between light and dark themes to match your style and environment.",
    image: "/crown.fill.svg",
    tags: ["Feature", "Design"],
    author: "Rifqi Rahman"
  },
  {
    title: "🚀 Dev Notes: What's Next?",
    date: "2024-06-10",
    excerpt: "A sneak peek at upcoming features and improvements for TaskToro.",
    image: "/scope.svg",
    tags: ["Dev Notes", "Roadmap"],
    author: "Rifqi Rahman"
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center font-sans px-4 pb-20">
      {/* Animated Blog Hero Section */}
      <section className="relative w-full max-w-4xl flex flex-col items-center text-center py-16 gap-4 overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-200/10 to-transparent pointer-events-none z-0" />
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl font-bold tracking-tight text-primary drop-shadow z-10">TaskToro Blog</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg text-foreground/80 max-w-2xl z-10">Articles, news, and updates from the TaskToro team. Stay up to date with the latest features, productivity tips, and community stories.</motion.p>
      </section>
      {/* Featured Article Card */}
      <section className="w-full max-w-4xl flex flex-col items-center mb-12">
        {blogPosts.filter(p => p.featured).map((post, i) => (
          <Tilt key={i} glareEnable={true} glareMaxOpacity={0.1} scale={1.03} tiltMaxAngleX={8} tiltMaxAngleY={8} className="w-full bg-primary/10 dark:bg-primary/20 rounded-2xl shadow-card p-8 flex flex-col md:flex-row items-center gap-8 border border-primary/20 hover:shadow-2xl transition mb-6">
            <Image src={post.image} alt={post.title} width={96} height={96} className="rounded-xl mb-4 md:mb-0" />
            <div className="flex-1 flex flex-col items-start">
              <div className="flex gap-2 mb-2 flex-wrap">
                {post.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold">{tag}</span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-primary mb-1">{post.title}</h2>
              <span className="text-xs text-foreground/60 mb-1">{post.date} • by {post.author}</span>
              <p className="text-foreground/80 mb-4">{post.excerpt}</p>
              <button className="mt-auto px-4 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">Read More</button>
            </div>
          </Tilt>
        ))}
      </section>
      {/* Blog Posts Grid */}
      <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.filter(p => !p.featured).map((post, i) => (
          <Tilt key={i} glareEnable={true} glareMaxOpacity={0.1} scale={1.02} tiltMaxAngleX={8} tiltMaxAngleY={8} className="rounded-2xl shadow-card bg-white dark:bg-[#18181b] border border-black/5 dark:border-white/10 p-6 flex flex-col items-start hover:shadow-2xl transition">
            <Image src={post.image} alt={post.title} width={64} height={64} className="mb-4 rounded-xl" />
            <div className="flex gap-2 mb-2 flex-wrap">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold">{tag}</span>
              ))}
            </div>
            <h2 className="text-lg font-bold text-primary mb-1">{post.title}</h2>
            <span className="text-xs text-foreground/60 mb-1">{post.date} • by {post.author}</span>
            <p className="text-foreground/80 mb-4">{post.excerpt}</p>
            <button className="mt-auto px-4 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">Read More</button>
          </Tilt>
        ))}
      </section>
    </div>
  );
} 