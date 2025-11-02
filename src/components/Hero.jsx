import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center">
            <div className="max-w-2xl bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                GenoQuant: The IP Address for Humans
              </h1>
              <p className="mt-4 text-gray-700 text-lg">
                Universal biogenetic identity for precision healthcare
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#getting-started" className="inline-flex items-center rounded-lg bg-[#0066CC] px-5 py-3 text-white font-semibold shadow hover:bg-[#0052A3] transition-colors">
                  Get Started
                </a>
                <a href="#features" className="inline-flex items-center rounded-lg border-2 border-[#0066CC] text-[#0066CC] px-5 py-3 font-semibold hover:bg-[#0066CC] hover:text-white transition-colors">
                  View Demo
                </a>
                <a href="#api-docs" className="inline-flex items-center rounded-lg bg-[#6600CC] px-5 py-3 text-white font-semibold shadow hover:bg-[#5200A3] transition-colors">
                  Read Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
    </section>
  );
}
