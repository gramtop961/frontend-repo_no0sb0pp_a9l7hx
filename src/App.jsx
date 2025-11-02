import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import GettingStarted from './components/GettingStarted';

function SectionAPIPreview() {
  return (
    <section id="api-docs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">API Documentation</h2>
          <p className="mt-2 text-gray-600">Explore the core endpoints to create identities, register network data, and run multi-model analysis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EndpointCard method="POST" path="/api/v1/identity/create" description="Create a new biogenetic identity from DNA sequence." />
          <EndpointCard method="GET" path="/api/v1/identity/{bgn_id}" description="Retrieve identity metadata by BGN ID." />
          <EndpointCard method="POST" path="/api/v1/network/register" description="Register a dataset to the GenoQuant Network." />
          <EndpointCard method="POST" path="/api/v1/medical-ai/analyze" description="Run single model medical AI analysis." />
          <EndpointCard method="POST" path="/api/v1/medical-ai/consensus" description="Run multi-model consensus analysis." />
          <EndpointCard method="POST" path="/api/v1/emergency/identify" description="Emergency identification via BGN ID." />
        </div>

        <div className="mt-8">
          <a href="#getting-started" className="inline-flex items-center rounded-lg border-2 border-[#0066CC] text-[#0066CC] px-5 py-3 font-semibold hover:bg-[#0066CC] hover:text-white transition-colors">
            Read the Quick Start
          </a>
        </div>
      </div>
    </section>
  );
}

function EndpointCard({ method, path, description }) {
  const color = method === 'GET' ? 'text-emerald-600 bg-emerald-50' : method === 'PUT' ? 'text-amber-600 bg-amber-50' : 'text-blue-600 bg-blue-50';
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded ${color}`}>{method}</span>
        <span className="font-mono text-sm text-gray-900">{path}</span>
      </div>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturesGrid />
        <GettingStarted />
        <SectionAPIPreview />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
          © {new Date().getFullYear()} GenoQuant Networks. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
