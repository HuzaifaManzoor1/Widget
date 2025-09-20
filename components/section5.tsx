export default function Section5(){
    return(
        <>
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
        </>
    );
}