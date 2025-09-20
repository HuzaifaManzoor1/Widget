"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl md:text-3xl font-bold text-gray-900">
              Widget Platform
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link href={item.href}
                      key={item.name}
                      className="relative group px-5 py-2 text-blue-600 font-semibold rounded-lg transition">
                      {item.name}
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    
                </Link>
              ))}

              <Link
                href="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Contact Us
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                {isOpen ? (
                  <XMarkIcon className="w-7 h-7 text-gray-900" />
                ) : (
                  <Bars3Icon className="w-7 h-7 text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div> 
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md border-t">
            <div className="flex flex-col items-center py-4 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group w-full text-center px-5 py-2 text-blue-600 font-semibold rounded-lg transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="w-full text-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* HERO SECTION */}
      <section
        className="pt-28 bg-gradient-to-r from-blue-500 to-green-400 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center py-20 backdrop-brightness-75 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Create Powerful Widgets Without Code
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Transform your website with interactive widgets that capture leads, boost sales,
            and engage visitors. No coding required - just drag, drop, and deploy.
          </p>

          {/* Features bullets */}
          <ul className="mb-10 space-y-2 text-left max-w-md mx-auto list-disc list-inside text-white">
            <li>Zero coding required - drag & drop builder</li>
            <li>Works on any website or platform</li>
            <li>Real-time customization and preview</li>
            <li>Enterprise-grade security & performance</li>
          </ul>

          {/* CTAs */}
          <div className="space-x-4">
            <Link
              href="https://widget-dashboard-two.vercel.app/login"
              className="inline-block px-8 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Start Free Trial
            </Link>
            <Link
              href="/demo"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Watch Demo
            </Link>
          </div>

          {/* Trust logos */}
          <div className="flex justify-center items-center mt-16 space-x-8 opacity-80">
            {/* Replace these with your real logos */}
            <img src="https://via.placeholder.com/100x40?text=Logo1" alt="Logo 1" />
            <img src="https://via.placeholder.com/100x40?text=Logo2" alt="Logo 2" />
            <img src="https://via.placeholder.com/100x40?text=Logo3" alt="Logo 3" />
            <img src="https://via.placeholder.com/100x40?text=Logo4" alt="Logo 4" />
          </div>
        </div>
      </section>

      {/* PROBLEM/SOLUTION SECTION */}
      <section className="bg-white py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left - Problem Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tired of Complex Widget Development?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Hiring developers costs thousands and takes weeks</li>
            <li>Existing solutions are rigid and hard to customize</li>
            <li>Technical barriers prevent quick website improvements</li>
            <li>Poor mobile experience drives visitors away</li>
          </ul>
          <p className="text-gray-800 font-semibold">
            Our no-code platform lets you create professional widgets in minutes, not months.
            Customize everything, deploy anywhere, and see results immediately.
          </p>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80"
            alt="Before and After Widget Development"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* WIDGET TYPES SHOWCASE */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            5 Powerful Widget Types for Every Business Need
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Lead Generation Widget */}
            <div className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold mb-4">Capture More Leads</h3>
              <p className="text-gray-700 mb-4">
                Convert visitors into customers with smart forms, lead scoring, and CRM integration.
              </p>
              <p className="mb-2 font-semibold">Features:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Custom fields</li>
                <li>Lead scoring</li>
                <li>CRM sync</li>
                <li>Auto-responders</li>
              </ul>
              <p className="mb-2 font-semibold">Use Cases:</p>
              <p className="text-gray-700 mb-6">Contact forms, Newsletter signups, Quote requests</p>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                alt="Contact form widget example"
                className="rounded-md shadow"
              />
            </div>

            {/* E-Commerce Widget */}
            <div className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-semibold mb-4">Boost Online Sales</h3>
              <p className="text-gray-700 mb-4">
                Sell products directly from your website with shopping carts, payments, and inventory management.
              </p>
              <p className="mb-2 font-semibold">Features:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Product catalogs</li>
                <li>Shopping cart</li>
                <li>Payment gateways</li>
                <li>WhatsApp orders</li>
              </ul>
              <p className="mb-2 font-semibold">Use Cases:</p>
              <p className="text-gray-700 mb-6">Product catalogs, Restaurant menus, Service bookings</p>
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
                alt="Product catalog widget example"
                className="rounded-md shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES & BENEFITS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Everything You Need to Succeed
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
            <div>
              <h3 className="font-semibold text-xl mb-4">EASY TO USE</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Drag & Drop Builder</li>
                <li>Live Preview</li>
                <li>No Coding Required</li>
                <li>One-Click Deploy</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4">POWERFUL & FLEXIBLE</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Custom Styling</li>
                <li>Advanced Analytics</li>
                <li>API Integration</li>
                <li>Webhook Support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4">SECURE & RELIABLE</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>SSL Encryption</li>
                <li>GDPR Compliant</li>
                <li>99.9% Uptime</li>
                <li>Regular Backups</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-900 space-y-2 text-lg font-semibold">
            <p>Save Time & Money</p>
            <p>Professional Results</p>
            <p>Increase Conversions</p>
            <p>Scale Easily</p>
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION SHOWCASE */}
      <section className="bg-gray-50 py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Make It Uniquely Yours
        </h2>

        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-10">
          See how easy it is to match your brand and create professional-looking widgets that your
          customers will love.
        </p>

        {/* Before/After slider simulation */}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <div className="w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
              alt="Basic widget"
              className="w-full"
            />
            <p className="text-center py-4 font-semibold text-gray-800">Basic Widget</p>
          </div>
          <div className="w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=600&q=80"
              alt="Customized widget"
              className="w-full"
            />
            <p className="text-center py-4 font-semibold text-gray-800">Branded & Customized</p>
          </div>
        </div>

        <ul className="mt-10 max-w-3xl mx-auto text-gray-700 list-disc list-inside space-y-2 text-center">
          <li>Brand Colors & Fonts</li>
          <li>Custom Logos & Images</li>
          <li>Layout Templates</li>
          <li>Mobile Optimization</li>
          <li>CSS Customization</li>
        </ul>
      </section>

      {/* ANALYTICS & INSIGHTS */}
      <section className="bg-white py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Track Performance & Optimize Results
        </h2>

        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
          alt="Analytics dashboard mockup"
          className="mx-auto rounded-lg shadow-lg mb-12 max-w-full"
        />

        <ul className="max-w-xl mx-auto text-gray-700 list-disc list-inside space-y-3 text-left">
          <li>Real-time Performance Data</li>
          <li>Conversion Tracking</li>
          <li>A/B Testing Tools</li>
          <li>Detailed Reports</li>
          <li>Export Capabilities</li>
        </ul>

        <p className="mt-6 max-w-xl mx-auto text-gray-800">
          Make data-driven decisions with comprehensive analytics that show exactly how your
          widgets are performing.
        </p>
      </section>

      {/* INTEGRATIONS */}
      <section className="bg-gray-50 py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Works with Your Favorite Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto items-center">
          {/* Marketing Tools */}
          <div>
            <p className="font-semibold mb-4 text-gray-700">MARKETING TOOLS</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mailchimp_Favicon.png",
                "https://upload.wikimedia.org/wikipedia/commons/c/cb/HubSpot_Logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_Analytics_Logo.png",
                "https://upload.wikimedia.org/wikipedia/commons/0/0b/Facebook_Pixel_Logo.png",
              ].map((src, idx) => (
                <img key={idx} src={src} alt="Marketing Tool Logo" className="h-12" />
              ))}
            </div>
          </div>

          {/* Communication */}
          <div>
            <p className="font-semibold mb-4 text-gray-700">COMMUNICATION</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                "https://upload.wikimedia.org/wikipedia/commons/7/7e/Slack_Icon.svg",
                "https://upload.wikimedia.org/wikipedia/commons/4/43/Email_Icon.svg",
                "https://upload.wikimedia.org/wikipedia/commons/2/27/Twilio_logo.png",
              ].map((src, idx) => (
                <img key={idx} src={src} alt="Communication Tool Logo" className="h-12" />
              ))}
            </div>
          </div>

          {/* E-Commerce */}
          <div>
            <p className="font-semibold mb-4 text-gray-700">E-COMMERCE</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/2/2a/Stripe_Logo%2C_revised_2016.svg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
                "https://upload.wikimedia.org/wikipedia/commons/4/49/Square_Inc._Logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/7/7e/WooCommerce_logo.svg",
              ].map((src, idx) => (
                <img key={idx} src={src} alt="E-commerce Tool Logo" className="h-12" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Simple, Transparent Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">FREE PLAN</h3>
            <p className="text-4xl font-bold mb-6">$0<span className="text-base font-normal">/month</span></p>
            <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
              <li>3 widgets</li>
              <li>100 submissions/month</li>
              <li>Basic templates</li>
              <li>Email support</li>
              <li>Perfect for testing</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Start Free Trial
            </button>
          </div>

          {/* Professional Plan */}
          <div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">PROFESSIONAL PLAN</h3>
            <p className="text-4xl font-bold mb-6">$29<span className="text-base font-normal">/month</span></p>
            <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
              <li>25 widgets</li>
              <li>5,000 submissions/month</li>
              <li>All templates</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>Custom branding</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Start Free Trial
            </button>
          </div>

          {/* Business Plan */}
          <div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">BUSINESS PLAN</h3>
            <p className="text-4xl font-bold mb-6">$79<span className="text-base font-normal">/month</span></p>
            <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
              <li>100 widgets</li>
              <li>50,000 submissions/month</li>
              <li>All features</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
              <li>Phone & chat support</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Contact Sales
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">ENTERPRISE PLAN</h3>
            <p className="mb-6 text-gray-700">Custom pricing for large businesses</p>
            <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
              <li>Unlimited widgets</li>
              <li>Custom SLAs</li>
              <li>Advanced security</li>
              <li>Custom onboarding</li>
              <li>Dedicated support team</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Widget Platform. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
