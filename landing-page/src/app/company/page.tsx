'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Link from "next/link";

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

// Redesigned Company Homepage with unique layout, same font & animation style
const companyName = "YourCompany";
const companyTagline = "Building beautiful, gamified digital experiences.";
const companyMission = "Empowering people and businesses to achieve greatness through intuitive, delightful software.";
const companyVision = "We envision a world where productivity, growth, and technology feel natural and rewarding.";
const companyValues = [
  "Innovation",
  "User-Centric Design",
  "Integrity",
  "Continuous Improvement",
  "Collaboration"
];
const services = [
  {
    icon: "/checklist.svg",
    title: "Custom Software Development",
    desc: "Web, mobile, and cloud solutions tailored to your needs."
  },
  {
    icon: "/timer.svg",
    title: "UI/UX & Product Design",
    desc: "Beautiful, intuitive, and gamified interfaces that delight users."
  },
  {
    icon: "/scope.svg",
    title: "IT Consulting & Automation",
    desc: "Streamline your business with expert advice and smart automation."
  }
];
const timeline = [
  { year: "2022", event: "Company founded with a vision for gamified productivity." },
  { year: "2023", event: "Launched our first SaaS product and grew our team." },
  { year: "2024", event: "TaskToro released, helping thousands level up their day." },
  { year: "Future", event: "Expanding our suite of digital tools for greatness." }
];
const projects = [
  {
    name: "TaskToro",
    logo: "/TaskToro icon web.svg",
    desc: "Your friendly, gamified productivity companion.",
    link: "/projects/tasktoro"
  }
  // Add more projects here
];

const rahmanicLogo = "/logo Rahmanic.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Centered Glassmorphism Navbar with Rahmanic Logo (smaller size) */}
      <nav className="w-full flex justify-center items-center fixed top-4 left-0 z-30 pointer-events-none">
        <div className="flex items-center gap-6 px-6 py-2 bg-white/70 dark:bg-[#18181b]/70 backdrop-blur-xl rounded-full border border-black/10 dark:border-white/10 shadow-card pointer-events-auto max-w-3xl mx-auto">
          {/* Left Links */}
          <div className="flex gap-6 text-base font-medium items-center">
            <a href="#" className="hover:text-primary transition">Home</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#services" className="hover:text-primary transition">Services</a>
          </div>
          {/* Center Logo */}
          <div className="flex items-center justify-center mx-4">
            <Image src={rahmanicLogo} alt="Rahmanic Logo" width={56} height={28}/>
          </div>
          {/* Right Links */}
          <div className="flex gap-6 text-base font-medium items-center">
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="/blog" className="hover:text-primary transition">Blog</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>
      <div className="pt-24" /> {/* Spacer for navbar */}

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center text-center py-24 gap-6 px-4">
        
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-8xl font-extrabold tracking-tight text-primary drop-shadow mb-2">
          Rahmanic
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-2xl text-foreground/80 font-medium mb-2">
          We build digital products that empower, delight, and inspire.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }} className="text-base text-foreground/60 max-w-xl">
          Software & IT solutions for the next generation of creators, makers, and dreamers.
        </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 py-20 px-4">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex-1 flex justify-center">
          <Image src="/TaskToro icon web.svg" alt="About Illustration" width={180} height={180} className="rounded-2xl shadow-card" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-primary mb-2">About Us</h2>
          <p className="text-lg text-foreground/80">{companyMission}</p>
          <p className="text-base text-foreground/60">{companyVision}</p>
          <div className="flex flex-wrap gap-3 mt-2">
            {companyValues.map((val, i) => (
              <span key={val} className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold shadow-card text-sm">{val}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-6xl mx-auto py-16 flex flex-col items-center gap-12 px-4">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl font-bold text-primary mb-4">What We Do</motion.h2>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {services.map((s, i) => (
            <Tilt key={s.title} glareEnable={true} glareMaxOpacity={0.1} scale={1.04} tiltMaxAngleX={10} tiltMaxAngleY={10} className="flex-1 min-w-[220px] max-w-sm bg-white dark:bg-[#18181b] rounded-2xl shadow-card border border-black/5 dark:border-white/10 p-8 flex flex-col items-center hover:shadow-2xl transition">
              <Image src={s.icon} alt={s.title + ' icon'} width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-foreground/80 text-center">{s.desc}</p>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Projects Section (as before) */}
      <section id="projects" className="w-full max-w-6xl mx-auto py-16 flex flex-col items-center gap-12">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl font-bold text-primary mb-4">Our Projects</motion.h2>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {projects.map((p, i) => (
            <Tilt key={p.name} glareEnable={true} glareMaxOpacity={0.1} scale={1.04} tiltMaxAngleX={10} tiltMaxAngleY={10} className="flex-1 min-w-[260px] max-w-sm bg-white dark:bg-[#18181b] rounded-2xl shadow-card border border-black/5 dark:border-white/10 p-8 flex flex-col items-center hover:shadow-2xl transition">
              <Image src={p.logo} alt={p.name + ' logo'} width={64} height={64} className="mb-4 rounded-xl" />
              <h3 className="text-xl font-bold text-primary mb-2">{p.name}</h3>
              <p className="text-foreground/80 text-center mb-4">{p.desc}</p>
              <Link href={p.link} className="mt-auto px-6 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">View Project</Link>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full max-w-3xl py-8 text-center text-foreground/60 text-sm flex flex-col gap-2 items-center mt-8">
        <div>
          Questions or feedback? <a href="mailto:support@yourcompany.com" className="text-primary underline">support@yourcompany.com</a>
        </div>
        <div className="mt-2">© {new Date().getFullYear()} {companyName}. All rights reserved.</div>
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
