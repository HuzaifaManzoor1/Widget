export default function Section3(){
    return(
        <>
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
        </>
    );
}