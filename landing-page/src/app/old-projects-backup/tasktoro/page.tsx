'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

// Images from /public/
const logo = "/TaskToro icon web.svg";
const screenshots = [
  "/screenshot1.svg",
  "/screenshot2.svg",
  "/screenshot3.svg",
];

// Testimonials data
const testimonials = [
  {
    name: "Ayu, Student",
    text: "TaskToro makes studying feel like a game. I love levelling up my focus!",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
  },
  {
    name: "Rizky, Young Professional",
    text: "Finally, a productivity app that motivates me to keep going. The stats and achievements are so satisfying!",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
  },
  {
    name: "Dewi, Self-Improver",
    text: "I can see my progress in every area of life. TaskToro is my daily companion for greatness.",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    stars: 4,
  },
];

// FAQ data
const faqs = [
  {
    q: "Do I need an account to use TaskToro?",
    a: "No account required! Your data stays on your device for privacy and convenience.",
  },
  {
    q: "Does TaskToro work offline?",
    a: "Yes, all features work offline so you can stay productive anywhere.",
  },
  {
    q: "How does gamification help me?",
    a: "Earn points, unlock achievements, and level up as you complete tasks and build habits!",
  },
  {
    q: "Can I customize the app?",
    a: "Choose light or dark mode, set your Pomodoro preferences, and organize your goals your way.",
  },
];

// Feature data: each with a title, long description, and matching icon
const features = [
  {
    title: "Organize Your Tasks",
    description: (
      <>
        Effortlessly manage your day with smart lists, categories, priorities, and reminders. Break down big projects into actionable steps and set recurring tasks for habits and routines. TaskToro keeps everything organized so you can focus on what matters most.
      </>
    ),
    icon: "/checklist.svg", // Checklist icon
  },
  {
    title: "Stay Focused",
    description: (
      <>
        Eliminate distractions and get in the zone with our built-in Pomodoro timer and Focus Mode. Visualize your progress, track your sessions, and enjoy gamified achievements that make deep work feel rewarding. Stay on track, one session at a time.
      </>
    ),
    icon: "/timer.svg", // Timer icon
  },
  {
    title: "Achieve Your Goals",
    description: (
      <>
        Set meaningful goals, define clear milestones, and track your progress with beautiful stats and visualizations. Whether it's work, study, or personal growth, TaskToro helps you turn ambitions into achievements—step by step.
      </>
    ),
    icon: "/scope.svg", // Scope/target icon
  },
  {
    title: "Level Up Your Life",
    description: (
      <>
        Grow in every area—Health, Wealth, Social, Intelligence, Mental, and Spiritual. Earn points, unlock achievements, and see your progress across all pillars of greatness. With TaskToro, you're always in pursuit of your best self.
      </>
    ),
    icon: "/crown.fill.svg", // Crown icon
  },
];

// Blog section placeholder data
const blogPosts = [
  {
    title: "🎉 TaskToro 1.0 Launch!",
    date: "2024-06-27",
    excerpt: "We are live! TaskToro is now available on the App Store. Start your productivity journey today.",
    featured: true,
    image: "/TaskToro icon web.svg",
  },
  {
    title: "🔔 New: Pomodoro Focus Mode",
    date: "2024-06-20",
    excerpt: "Stay focused with our new Pomodoro timer and Focus Mode. Level up your productivity!",
    image: "/timer.svg",
  },
  {
    title: "🌙 Dark Mode Arrives",
    date: "2024-06-15",
    excerpt: "Switch between light and dark themes to match your style and environment.",
    image: "/crown.fill.svg",
  },
  {
    title: "🚀 Dev Notes: What's Next?",
    date: "2024-06-10",
    excerpt: "A sneak peek at upcoming features and improvements for TaskToro.",
    image: "/scope.svg",
  },
];

// Screenshots for carousel
const screenshotImgs = [
  '/screenshot-1.png',
  '/screenshot-2.png',
  '/screenshot-3.png',
  '/screenshot-4.png',
  '/screenshot-5.png',
  '/screenshot-6.png',
];

export default function TaskToroPage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center font-sans overflow-x-hidden">
      {/* Hero Section with TaskToro Icon and App Store CTA */}
      <section className="w-full max-w-3xl flex flex-col items-center text-center py-16 gap-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Image src={logo} alt="TaskToro Logo" width={96} height={96} className="rounded-2xl shadow-card mb-2" priority />
        </motion.div>
        <h1 className="text-5xl font-bold tracking-tight text-primary drop-shadow">Level Up Your Productivity</h1>
        <p className="text-lg text-foreground/80 max-w-xl">TaskToro is your friendly, gamified productivity companion. Solo levelling your day, one checkmark at a time.</p>
        {/* App Store CTA - Hero */}
        <a href="#appstore" className="mt-6 flex items-center gap-4 px-8 py-4 rounded-2xl bg-primary text-white font-bold text-xl shadow-card hover:bg-primary/90 transition w-fit mx-auto">
          <img src="/AppStoreIcon.png" alt="App Store" className="w-8 h-8" />
          <span>Download on the App Store</span>
        </a>
      </section>

      {/* Features Section - Alternating Icon/Description, Card with Tilt Effect */}
      <section className="w-full max-w-6xl flex flex-col gap-24 py-16 px-4">
        {features.map((feature, i) => (
          <Tilt
            key={feature.title}
            glareEnable={true}
            glareMaxOpacity={0.1}
            scale={1.04}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className={`transition-transform duration-300 rounded-2xl shadow-card bg-white/90 dark:bg-[#18181b]/90 border border-black/5 dark:border-white/10 hover:shadow-2xl flex flex-col md:flex-row items-center gap-10 md:gap-20 p-8 md:p-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            style={{ minHeight: 280 }}
          >
            {/* Feature Icon/Illustration */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src={feature.icon}
                alt={feature.title + ' icon'}
                style={{ maxWidth: 180, width: '100%', height: 'auto', borderRadius: '1.25rem', boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)' }}
                draggable={false}
              />
            </div>
            {/* Feature Description */}
            <div className="flex-1 flex flex-col items-start md:items-start">
              <h2 className="text-3xl font-bold mb-4 text-primary">{feature.title}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">{feature.description}</p>
            </div>
          </Tilt>
        ))}
      </section>

      {/* Screenshots Section - Horizontal Auto-Scrolling Carousel (Looped) */}
      <section className="w-full max-w-6xl py-20 flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold mb-4 text-primary">See TaskToro in Action</h2>
        <div className="w-full relative">
          {/* Auto-scroll horizontally in a loop */}
          <AutoScrollingCarousel images={screenshotImgs} />
        </div>
      </section>

      {/* Testimonials Section - Review Style */}
      <section className="w-full max-w-4xl py-16 flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold mb-4 text-primary">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white dark:bg-[#18181b] p-8 shadow-card flex flex-col items-center text-center border border-black/5 dark:border-white/10">
              <img src={t.photo} alt={t.name + ' profile'} className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-primary" />
              <div className="flex mb-2 justify-center">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className={`w-5 h-5 ${idx < t.stars ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                ))}
              </div>
              <span className="italic text-foreground/90 mb-4">"{t.text}"</span>
              <span className="font-semibold text-primary">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section - Dev Notes */}
      <section className="w-full max-w-6xl py-16 flex flex-col items-center gap-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Dev Notes & Updates</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="md:col-span-1 bg-primary/10 dark:bg-primary/20 rounded-2xl shadow-card p-8 flex flex-col items-start border border-primary/20">
            <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-16 h-16 mb-4 rounded-xl" />
            <h3 className="text-2xl font-bold mb-2 text-primary">{blogPosts[0].title}</h3>
            <span className="text-xs text-foreground/60 mb-2">{blogPosts[0].date}</span>
            <p className="text-foreground/80 mb-4">{blogPosts[0].excerpt}</p>
            <button className="mt-auto px-4 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">Read More</button>
          </div>
          {/* Other Posts */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <div key={i} className="bg-white dark:bg-[#18181b] rounded-2xl shadow-card p-6 flex flex-col items-start border border-black/5 dark:border-white/10">
                <img src={post.image} alt={post.title} className="w-12 h-12 mb-2 rounded-lg" />
                <h4 className="text-lg font-bold text-primary mb-1">{post.title}</h4>
                <span className="text-xs text-foreground/60 mb-1">{post.date}</span>
                <p className="text-foreground/80 mb-2">{post.excerpt}</p>
                <button className="mt-auto px-3 py-1 rounded-full bg-primary text-white text-sm font-semibold shadow hover:bg-primary/90 transition">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Store CTA with Banner - Footer */}
      <section className="w-full flex flex-col items-center py-12">
        <a href="#appstore" className="flex items-center justify-center gap-4 px-8 py-4 rounded-2xl bg-white dark:bg-[#18181b] shadow-card border border-black/10 dark:border-white/10 hover:shadow-2xl transition w-fit mx-auto">
          <img src="/AppStore - Banner.svg" alt="Download on the App Store" className="h-10" />
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-3xl py-8 text-center text-foreground/60 text-sm flex flex-col gap-2 items-center mt-8">
        <div>
          Questions or feedback? <a href="mailto:support@tasktoro.app" className="text-primary underline">support@tasktoro.app</a>
        </div>
        <div>
          By using TaskToro, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
        </div>
        <div className="mt-2">© {new Date().getFullYear()} TaskToro. All rights reserved.</div>
      </footer>
    </div>
  );
}

// AutoScrollingCarousel component for looped horizontal scroll
function AutoScrollingCarousel({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let scrollAmount = 1;
    let frame: number;
    function scrollStep() {
      if (!el) return;
      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += scrollAmount;
      }
      frame = requestAnimationFrame(scrollStep);
    }
    frame = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <div
      ref={scrollRef}
      className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth"
      style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', paddingBottom: 8 }}
    >
      {images.concat(images).map((src, i) => (
        <div key={i} className="flex-shrink-0 rounded-2xl shadow-card overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#18181b]" style={{ width: 315, height: 631 }}>
          <img src={src} alt={`TaskToro screenshot ${i + 1}`} className="w-full h-full object-contain select-none" draggable={false} />
        </div>
      ))}
    </div>
  );
} 