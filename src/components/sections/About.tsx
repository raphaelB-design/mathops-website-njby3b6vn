export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#080b12] py-24 relative border-y border-white/5 overflow-hidden"
    >
      {/* Subtle depth lighting */}
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Container */}
          <div className="bg-[#0c0c0f]/80 backdrop-blur-xl rounded-3xl p-6 relative border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-fuchsia-500/10 rounded-3xl -z-10 transform translate-x-4 translate-y-4 border border-white/5 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            <img
              src="https://img.usecurling.com/ppl/large?gender=male&seed=1&color=gray"
              alt="Lead Consultant"
              className="w-full aspect-square object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
            />
            <div className="mt-6">
              <h4 className="font-bold text-white tracking-wide">Chief Data Strategist</h4>
              <p className="text-cyan-400 text-sm mt-1">
                Leading the Quantitative Intelligence Engine
              </p>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
              Proven Methodology
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8 tracking-tight">
              Bridging the gap between raw data and enterprise decisions.
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed text-[16px] font-medium">
              <p>
                MathOps' expertise relies on a professional methodology for robust business
                solutions, enterprise environments, and a deep understanding of operational
                processes.
              </p>
              <p>
                Our tested methodology accelerates analytics and predictive models, integrating core
                tech infrastructure with business acumen to deliver advisory solutions that make a
                tangible, measurable difference.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="border-l-2 border-blue-500 pl-5">
                <div className="text-3xl font-display font-bold text-white mb-2">94.2%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Model Accuracy
                </div>
              </div>
              <div className="border-l-2 border-fuchsia-500 pl-5">
                <div className="text-3xl font-display font-bold text-white mb-2">+28%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                  Avg. Efficiency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
