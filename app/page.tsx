// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "Features", href: "/features" },
//     { name: "Pricing", href: "/pricing" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="bg-white shadow-sm fixed w-full z-50">
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//           <div className="flex justify-between items-center h-20">
//             <div className="text-2xl md:text-3xl font-bold text-gray-900">
//               MyWidgetApp
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="px-5 py-2 text-gray-800 hover:bg-gray-900 hover:text-white rounded-lg transition"
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               <Link
//                 href="/contact"
//                 className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button onClick={() => setIsOpen(!isOpen)}>
//                 {isOpen ? (
//                   <XMarkIcon className="w-7 h-7 text-gray-900" />
//                 ) : (
//                   <Bars3Icon className="w-7 h-7 text-gray-900" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white shadow-md border-t">
//             <div className="flex flex-col items-center py-4 space-y-3">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="w-full text-center px-5 py-2 text-gray-800 hover:bg-gray-900 hover:text-white rounded-lg transition"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Link
//                 href="/contact"
//                 className="w-full text-center px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-28 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
//           <p className="text-gray-600 mb-2">Dynamic Widget App for Businesses</p>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Boost Conversions with Lead & E-Commerce Widgets
//           </h1>
//           <p className="text-gray-700 text-lg md:text-xl mb-8">
//             Fully customizable, responsive widgets to capture leads and drive sales.
//           </p>
//           <Link
//             href="/features"
//             className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold"
//           >
//             Get Started
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
//             Our Widgets
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-lg transition">
//               <h3 className="text-2xl font-semibold mb-4">Lead Generation</h3>
//               <p className="text-gray-700 mb-4">
//                 Create dynamic, fully customizable lead generation widgets for your website.
//               </p>
//               <Link
//                 href="/features"
//                 className="text-gray-900 font-semibold hover:underline"
//               >
//                 Learn More
//               </Link>
//             </div>
//             <div className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-lg transition">
//               <h3 className="text-2xl font-semibold mb-4">E-Commerce Widgets</h3>
//               <p className="text-gray-700 mb-4">
//                 Add responsive e-commerce widgets to showcase products and streamline checkout.
//               </p>
//               <Link
//                 href="/features"
//                 className="text-gray-900 font-semibold hover:underline"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gray-50 py-16 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//           Ready to Get Started?
//         </h2>
//         <p className="text-gray-700 mb-8 text-lg">
//           Try our widgets today and boost your website performance instantly.
//         </p>
//         <Link
//           href="/pricing"
//           className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold"
//         >
//           Start Free Trial
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className="bg-white py-6 text-center text-gray-700">
//         &copy; {new Date().getFullYear()} MyWidgetApp. All rights reserved.
//       </footer>
//     </>
//   );
// }

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
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-20">
            <div className="text-white text-3xl font-extrabold tracking-wide">
              MyWidgetApp
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-white font-semibold">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 hover:bg-white hover:text-indigo-700 rounded transition"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                className="px-6 py-2 bg-white text-indigo-700 rounded-lg hover:bg-gray-100 transition font-bold"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? (
                  <XMarkIcon className="w-7 h-7 text-white" />
                ) : (
                  <Bars3Icon className="w-7 h-7 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-indigo-700 shadow-md border-t border-indigo-600">
            <div className="flex flex-col items-center py-4 space-y-3 text-white font-semibold">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-full text-center px-5 py-2 hover:bg-white hover:text-indigo-700 rounded transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="w-full text-center px-6 py-2 bg-white text-indigo-700 rounded-lg hover:bg-gray-100 transition font-bold"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center"
        style={{ backgroundImage: 'url("/images/hero-bg.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-indigo-900 opacity-70"></div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-0">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Boost Your Business with Powerful Widgets
          </h1>
          <p className="text-lg md:text-xl mb-10 drop-shadow-md">
            Engage visitors, capture leads, and increase sales with fully customizable tools.
          </p>
          <Link
            href="/features"
            className="inline-block px-10 py-4 bg-yellow-400 text-indigo-900 font-bold rounded shadow-lg hover:bg-yellow-300 transition"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature Card 1 */}
            <div className="rounded-lg shadow-lg p-8 hover:shadow-2xl transition bg-gray-50">
              <img
                src="/images/lead.jfif"
                alt="Lead Generation"
                className="mx-auto mb-6 h-40"
              />
              <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Lead Generation</h3>
              <p className="text-gray-700">
                Capture quality leads with customizable, easy-to-integrate widgets designed to convert visitors.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="rounded-lg shadow-lg p-8 hover:shadow-2xl transition bg-gray-50">
              <img
                src="/images/e-commerce.jfif"
                alt="E-Commerce Widgets"
                className="mx-auto mb-6 h-24"
              />
              <h3 className="text-2xl font-semibold mb-4 text-indigo-700">E-Commerce Widgets</h3>
              <p className="text-gray-700">
                Showcase your products beautifully and provide a smooth checkout experience to increase sales.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="rounded-lg shadow-lg p-8 hover:shadow-2xl transition bg-gray-50">
              <img
                src="/images/analytics.svg"
                alt="Analytics"
                className="mx-auto mb-6 h-24"
              />
              <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Analytics & Insights</h3>
              <p className="text-gray-700">
                Track widget performance, monitor leads and sales, and optimize your strategy with real-time data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-12 text-indigo-900">
            What Our Customers Say
          </h2>

          <div className="space-y-12">
            <blockquote className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                “MyWidgetApp has revolutionized the way we generate leads and connect with customers. Highly recommend!”
              </p>
              <cite className="block text-indigo-700 font-semibold">— Sarah J.</cite>
            </blockquote>

            <blockquote className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                “Our sales grew by 30% after integrating these easy-to-use e-commerce widgets.”
              </p>
              <cite className="block text-indigo-700 font-semibold">— Mark T.</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-700 py-20 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">Ready to Grow Your Business?</h2>
        <p className="mb-10 max-w-xl mx-auto text-lg">
          Start using our widgets today and watch your leads and sales soar.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-yellow-400 text-indigo-900 font-bold px-10 py-4 rounded shadow hover:bg-yellow-300 transition"
        >
          Start Free Trial
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 py-8 text-center text-indigo-200">
        <p>© {new Date().getFullYear()} MyWidgetApp. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          {/* Social Icons (simple placeholders) */}
          <a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a>
          <a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}
