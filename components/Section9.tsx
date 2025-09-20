export default function Section9(){
    return (
        <>
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
        </>
    );
}