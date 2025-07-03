// Project 2 Detail Page Template
'use client';
import Link from 'next/link';

export default function Project2Page() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center font-sans px-4 pb-20">
      {/* Project Title */}
      <section className="w-full max-w-3xl flex flex-col items-center text-center py-16 gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-primary drop-shadow">Project Two</h1>
        <p className="text-lg text-foreground/80 max-w-2xl">A focus timer for deep work and flow.</p>
      </section>
      {/* Why Section */}
      <section className="w-full max-w-2xl py-8">
        <h2 className="text-2xl font-bold text-primary mb-2">Why</h2>
        <p className="text-foreground/80">{/* Explain the motivation/problem this project solves. */}</p>
      </section>
      {/* How Section */}
      <section className="w-full max-w-2xl py-8">
        <h2 className="text-2xl font-bold text-primary mb-2">How</h2>
        <p className="text-foreground/80">{/* Describe your approach, tech stack, and process. */}</p>
      </section>
      {/* What Section */}
      <section className="w-full max-w-2xl py-8">
        <h2 className="text-2xl font-bold text-primary mb-2">What</h2>
        <p className="text-foreground/80">{/* Summarize the result/product. */}</p>
      </section>
      {/* Research/Thought Process Section */}
      <section className="w-full max-w-2xl py-8">
        <h2 className="text-2xl font-bold text-primary mb-2">Research & Thought Process</h2>
        <p className="text-foreground/80">{/* Share your research, iterations, and insights. */}</p>
      </section>
      {/* Product Links Section */}
      <section className="w-full max-w-2xl py-8">
        <h2 className="text-2xl font-bold text-primary mb-2">Product Links</h2>
        <div className="flex gap-4">
          {/* Add your links here */}
          <Link href="#" className="px-4 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">GitHub</Link>
          <Link href="#" className="px-4 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">App Store</Link>
        </div>
      </section>
    </div>
  );
} 