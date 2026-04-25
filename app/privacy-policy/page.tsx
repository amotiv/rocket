import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Rocket Solutions',
  description: 'Privacy Policy for Rocket Solutions',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy for Rocket Solutions</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="mb-6"><strong>Effective Date: April 25, 2026</strong></p>
          
          <p className="mb-6">Welcome to Rocket Solutions ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at rocketsolutions.org and use our AI solutions and services.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and phone number, that you voluntarily give to us when you fill out contact forms or register for an account.</li>
            <li><strong>Usage Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, and the pages you viewed.</li>
            <li><strong>AI Input Data:</strong> Text, parameters, or other data you input into our AI tools to generate solutions.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide, operate, and maintain our website and AI services.</li>
            <li>Improve, personalize, and expand our offerings.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Communicate with you for customer service, updates, and marketing.</li>
            <li>Train and refine our artificial intelligence models (unless you explicitly opt-out).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Disclosure of Your Information</h2>
          <p className="mb-4">We do not sell your personal data. We may share information with:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Service Providers:</strong> Third-party vendors that perform services for us, such as hosting, data analysis, and email delivery.</li>
            <li><strong>Legal Obligations:</strong> When required by law or to respond to legal process.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. Security of Your Information</h2>
          <p className="mb-6">We use administrative, technical, and physical security measures to help protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">5. Contact Us</h2>
          <p className="mb-2">If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <address className="not-italic">
            <strong>Rocket Solutions</strong><br />
            <a href="mailto:business@rocketsolutions.org" className="text-blue-400 hover:text-blue-300">business@rocketsolutions.org</a>
          </address>
        </div>
      </div>
    </main>
  );
}
