export default function Section4(){
    return(
        <>
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
        </>
    );
}
