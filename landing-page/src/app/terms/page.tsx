'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TermsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8" data-aos="fade-up">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: July 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-foreground/10">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to TaskToro, a gamified productivity app designed to enhance personal growth among young people. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the TaskToro app and services, and by using our app, you agree to be bound by these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">End User License Agreement (EULA)</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TaskToro is licensed to you subject to the terms and conditions of Apple&apos;s Standard End User License Agreement (EULA), which applies to all apps distributed through the Apple App Store.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Apple Standard EULA:</strong>{' '}
                  <a 
                    href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Definitions</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>&ldquo;App&rdquo;</strong> means the TaskToro mobile application and any related services.</li>
                <li><strong>&ldquo;User&rdquo;</strong> means an individual who uses the App.</li>
                <li><strong>&ldquo;We&rdquo;</strong> or <strong>&ldquo;Us&rdquo;</strong> means the TaskToro team.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Using the App</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Eligibility</h3>
                  <p>You must be at least 13 years old to use the App.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Account Creation</h3>
                  <p>You may create an account to use the App. You are responsible for maintaining the confidentiality of your account credentials.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Prohibited Use</h3>
                  <p>You may not use the App for any unlawful or unauthorized purpose.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Ownership</h3>
                  <p>The App and its content are owned by TaskToro.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. License</h3>
                  <p>We grant you a non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Data Protection</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Data Collection</h3>
                  <p>We collect data to improve the App and provide services to you.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Data Storage</h3>
                  <p>We store data in accordance with applicable laws and regulations.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Data Protection</h3>
                  <p>We take reasonable measures to protect your data from unauthorized access.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Warranty Disclaimer</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. No Warranty</h3>
                  <p>The App is provided &ldquo;as is&rdquo; without warranty of any kind.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Limitation of Liability</h3>
                  <p>We are not liable for any damages or losses arising from your use of the App.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Governing Law</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Jurisdiction</h3>
                  <p>These Terms are governed by and construed in accordance with applicable laws.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Dispute Resolution</h3>
                  <p>Any disputes arising from these Terms will be resolved through appropriate legal channels.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Changes to Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Amendments</h3>
                  <p>We may update these Terms at any time.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Notice</h3>
                  <p>We will provide notice of changes to these Terms through the App or by email.</p>
                </div>
              </div>
            </section>

            <section className="mb-0">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions or concerns about these Terms, please contact us at{' '}
                <a href="mailto:rifqi.efforts@gmail.com" className="text-primary hover:underline">
                  rifqi.efforts@gmail.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
