import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-8 text-center">
            Last updated: January 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the Samanta India Job Portal ("Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Eligibility</h2>
            <p className="text-gray-600 leading-relaxed">
              You must be at least 18 years old and legally able to enter into contracts to use this Platform. By using the Platform, you represent and warrant that you meet these requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. User Accounts</h2>
            <p className="text-gray-600 leading-relaxed">
              When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              You are responsible for safeguarding the password that you use to access the Platform and for any activities or actions under your password.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Job Listings and Applications</h2>
            <p className="text-gray-600 leading-relaxed">
              Employers are solely responsible for the accuracy and legality of their job postings. Samanta India does not guarantee the accuracy of any job listing or the legitimacy of any employer.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              Job seekers are responsible for the accuracy of their profiles, resumes, and application materials. Misrepresentation may result in account suspension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Prohibited Conduct</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree not to use the Platform to:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-2 space-y-1">
              <li>Post false, misleading, or fraudulent job listings or profiles</li>
              <li>Harass, abuse, or discriminate against other users</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Use automated scripts or bots to access or scrape the Platform</li>
              <li>Violate any applicable local, state, national, or international law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Platform and its original content, features, and functionality are and will remain the exclusive property of Samanta India and its licensors. The Platform is protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              Upon termination, your right to use the Platform will immediately cease. If you wish to terminate your account, you may simply discontinue using the Platform or contact us to request account deletion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall Samanta India, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of the Platform is at your sole risk. The Platform is provided on an "AS IS" and "AS AVAILABLE" basis. Samanta India makes no warranties, expressed or implied, regarding the operation or availability of the Platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:support@samantaindia.com"
                className="text-red-500 hover:text-red-700 underline"
              >
                support@samantaindia.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;

