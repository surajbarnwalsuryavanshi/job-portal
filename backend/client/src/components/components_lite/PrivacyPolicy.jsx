import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500 mb-8 text-center">
            Last updated: January 2026
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Samanta India Job Portal ("Platform"). Your privacy is
              important to us. This Privacy Policy explains how we collect, use,
              disclose, and protect your information when you use our website
              and services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. Information We Collect
            </h2>

            <p className="text-gray-600 leading-relaxed mb-3">
              We may collect the following information:
            </p>

            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Password (encrypted)</li>
              <li>Resume / CV / Documents</li>
              <li>Job Preferences</li>
              <li>IP Address</li>
              <li>Browser & Device Information</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>To create and manage your account</li>
              <li>To provide job recommendations</li>
              <li>To connect job seekers with recruiters</li>
              <li>To improve our services and website</li>
              <li>To send updates, alerts, and notifications</li>
              <li>To maintain security and prevent fraud</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. Data Protection
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We implement reasonable technical and organizational security
              measures to protect your personal information from unauthorized
              access, misuse, or disclosure.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              5. Sharing of Information
            </h2>

            <p className="text-gray-600 leading-relaxed mb-3">
              We do not sell your personal information. We may share your data
              with:
            </p>

            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>Recruiters or employers when you apply for jobs</li>
              <li>Service providers assisting our operations</li>
              <li>Government or legal authorities when required by law</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              6. Your Rights
            </h2>

            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>Access your personal data</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your account</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              7. Cookies & Tracking
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We may use cookies and similar technologies to improve user
              experience, remember preferences, and analyze traffic on our
              platform.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              8. Changes to This Policy
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with the updated date.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              9. Contact Us
            </h2>

            <p className="text-gray-600 leading-relaxed">
              If you have any questions regarding this Privacy Policy, contact
              us at{" "}
              <a
                href="mailto:support@samantaindia.com"
                className="text-red-500 hover:text-red-700 underline"
              >
                support@samantaindia.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
