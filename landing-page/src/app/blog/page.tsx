// Rahmanic Blog System - Modern, Animated, Extensible
import Image from 'next/image';
import Link from 'next/link';
import BlogPostCard from './BlogPostCard';
// Blog posts data (add new posts here)
const posts = [
  {
    slug: 'tasktoro-launch',
    title: "🎉 TaskToro 1.0 Launch!",
    date: "2024-06-27",
    tags: ["Announcement", "Release"],
    author: "Rifqi Rahman",
    excerpt: "We are live! TaskToro is now available on the App Store. Start your productivity journey today.",
    image: "/TaskToro icon web.png",
  },
  {
    slug: 'pomodoro-focus-mode',
    title: "🔔 New: Pomodoro Focus Mode",
    date: "2024-06-20",
    tags: ["Feature", "Productivity"],
    author: "Rifqi Rahman",
    excerpt: "Stay focused with our new Pomodoro timer and Focus Mode. Level up your productivity!",
    image: "/timer.svg",
  },
  {
    slug: 'dark-mode-arrives',
    title: "🌙 Dark Mode Arrives",
    date: "2024-06-15",
    tags: ["Feature", "Design"],
    author: "Rifqi Rahman",
    excerpt: "Switch between light and dark themes to match your style and environment.",
    image: "/crown.fill.svg",
  },
  {
    slug: 'dev-notes-roadmap',
    title: "🚀 Dev Notes: What's Next?",
    date: "2024-06-10",
    tags: ["Dev Notes", "Roadmap"],
    author: "Rifqi Rahman",
    excerpt: "A sneak peek at upcoming features and improvements for TaskToro.",
    image: "/scope.svg",
  },
  // --- Add new posts below this line ---
];

// BlogPage is now a server component by default (no 'use client')
export default function BlogPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center font-sans px-4 pb-20">
      {/* Animated Blog Hero Section */}
      <section className="relative w-full max-w-4xl flex flex-col items-center text-center py-16 gap-4 overflow-hidden">
        {/* You can add a simple fade-in with CSS if desired, or keep static for performance */}
        <h1 className="text-5xl font-bold tracking-tight text-primary drop-shadow z-10">Rahmanic Blog</h1>
        <p className="text-lg text-foreground/80 max-w-2xl z-10">Insights, news, and updates from the Rahmanic team. Stay up to date with the latest features, productivity tips, and company stories.</p>
      </section>
      {/* Blog Posts Grid */}
      <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          // BlogPostCard is a client component for animation/tilt
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
} 