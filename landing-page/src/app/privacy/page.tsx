'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PrivacyPage() {
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
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-foreground/10">
            
            <section className="mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                TaskToro ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the TaskToro app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Information We Collect</h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">a. Personal Information</h3>
                  <ul className="space-y-2 ml-4">
                    <li><strong>Username:</strong> You provide a username during onboarding or in your profile.</li>
                    <li><strong>Profile Photo:</strong> You may optionally add a profile photo from your camera or photo library.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">b. Usage Data</h3>
                  <ul className="space-y-2 ml-4">
                    <li><strong>Task and Goal Data:</strong> We store your tasks, goals, achievements, and preferences locally on your device.</li>
                    <li><strong>App Preferences:</strong> We store your appearance (theme), haptic, and notification preferences.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">c. Device Permissions</h3>
                  <ul className="space-y-2 ml-4">
                    <li><strong>Camera and Photos:</strong> If you choose to add a profile photo, we request access to your camera and photo library.</li>
                    <li><strong>Notifications:</strong> If you enable notifications, we request permission to send you reminders.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. How We Use Your Information</h2>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>To provide and personalize your experience in TaskToro.</li>
                <li>To save your progress, preferences, and achievements.</li>
                <li>To send you reminders and notifications (if enabled).</li>
                <li>To improve app performance and user experience.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Data Storage</h2>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>All your data is stored locally on your device.</li>
                  <li>We do <strong>not</strong> collect, transmit, or store your data on external servers.</li>
                  <li>We do <strong>not</strong> use analytics or tracking services.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Sharing of Information</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>We do <strong>not</strong> share your personal information with third parties.</li>
                  <li>Your data remains private and is only accessible to you.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Data Deletion</h2>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>You can delete your data by using the "Reset All Progress" option in the app settings.</li>
                <li>Deleting the app will also remove all locally stored data.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Children's Privacy</h2>
              <p className="text-muted-foreground">
                TaskToro is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Changes will be posted in the app or on our website.
              </p>
            </section>

            <section className="mb-0">
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <br />
                <strong>Email:</strong>{' '}
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
