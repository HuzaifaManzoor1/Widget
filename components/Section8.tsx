export default function Section8(){
    return(
        <>
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
        </>
    );

}