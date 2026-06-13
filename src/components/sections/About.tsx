export function AboutSection() {
  return (
    <section id="about" className="bg-[#fcfcfd] py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-12">About</h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image Container */}
          <div className="bg-gray-100 rounded-3xl p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-50 rounded-3xl -z-10 transform translate-x-4 translate-y-4" />
            <img
              src="https://img.usecurling.com/ppl/large?gender=male&seed=1"
              alt="Consultant Portrait"
              className="w-full aspect-square object-cover rounded-2xl shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="mt-6">
              <h4 className="font-bold text-gray-900">Consultant Photo</h4>
              <p className="text-gray-500 text-sm">Professional headshot</p>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Consultant Photo</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-[15px]">
              <p>
                MathOps' expertise relies on a professional methodology for robust business
                solutions, enterprise environments, and deep understanding of operational processes.
              </p>
              <p>
                Our tested methodology accelerates analytics and predictive models, integrating
                technologies of tech infrastructure and business to deliver advisory solutions that
                make a tangible difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
