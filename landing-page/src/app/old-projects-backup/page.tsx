// Rahmanic Projects Page - Modern, Animated, Extensible
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Project data (add new projects here)
const projects = [
  {
    slug: 'project1',
    name: 'Project One',
    logo: '/TaskToro icon web.svg',
    desc: 'A modern productivity app for solo levelers.',
  },
  {
    slug: 'project2',
    name: 'Project Two',
    logo: '/timer.svg',
    desc: 'A focus timer for deep work and flow.',
  },
  {
    slug: 'project3',
    name: 'Project Three',
    logo: '/scope.svg',
    desc: 'A goal-tracking tool for ambitious creators.',
  },
  {
    slug: 'project4',
    name: 'Project Four',
    logo: '/crown.fill.svg',
    desc: 'A gamified habit builder for daily greatness.',
  },
  {
    slug: 'project5',
    name: 'Project Five',
    logo: '/checklist.svg',
    desc: 'A simple, beautiful checklist for teams.',
  },
  // --- Add new projects below this line ---
];

export default function ProjectsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center font-sans px-4 pb-20">
      {/* Projects Hero Section */}
      <section className="w-full max-w-4xl flex flex-col items-center text-center py-16 gap-4">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl font-bold tracking-tight text-primary drop-shadow">Our Projects</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg text-foreground/80 max-w-2xl">Explore our portfolio of digital products, tools, and experiments.</motion.p>
      </section>
      {/* Project Cards Grid */}
      <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <Tilt key={project.slug} glareEnable={true} glareMaxOpacity={0.1} scale={1.02} tiltMaxAngleX={8} tiltMaxAngleY={8} className="rounded-2xl shadow-card bg-white dark:bg-[#18181b] border border-black/5 dark:border-white/10 p-6 flex flex-col items-center hover:shadow-2xl transition">
            <Image src={project.logo} alt={project.name + ' logo'} width={64} height={64} className="mb-4 rounded-xl" />
            <h2 className="text-lg font-bold text-primary mb-1">{project.name}</h2>
            <p className="text-foreground/80 mb-4 text-center">{project.desc}</p>
            <Link href={`/projects/${project.slug}`} className="mt-auto px-4 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">View Project</Link>
          </Tilt>
        ))}
      </section>
    </div>
  );
} 