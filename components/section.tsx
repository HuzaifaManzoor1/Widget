import Link from "next/link";

export default function Section(){
    return(
        <>
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
            <img src="/images/shopify.png" alt="Logo 1" className="w-[120px] h-[50px] object-contain" />
            <img src="/images/stripe.png" alt="Logo 2" className="w-[120px] h-[50px] object-contain"  />
            <img src="/images/wordpress.png" alt="Logo 3"  className="w-[120px] h-[50px] object-contain" />
            <img src="/images/zapier.png" alt="Logo 4" className="w-[120px] h-[50px] object-contain"  />
          </div>
        </div>
      </section>
        </>
    );
}