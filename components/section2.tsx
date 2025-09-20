export default function Section2(){
    return(
        <>
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
        </>
    );
}