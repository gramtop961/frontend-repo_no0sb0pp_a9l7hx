import { Fingerprint, Share2, Brain, Shield } from 'lucide-react';

const features = [
  {
    title: 'BGN ID',
    description: 'Universal identifier derived from DNA for secure, interoperable identity.',
    icon: Fingerprint,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Network',
    description: 'All health data linked across 9 types for real-time clinical context.',
    icon: Share2,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Medical AI',
    description: 'Multi-model analysis with consensus for robust decision support.',
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Security',
    description: 'Cryptographic hashing and privacy by design. HIPAA & GDPR aligned.',
    icon: Shield,
    color: 'from-violet-500 to-indigo-500',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-2 text-gray-600">Built for clinicians, researchers, and developers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br ${f.color} text-white shadow`}> 
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <StatCard label="99.9999% Unique" value="Identity Collision" />
          <StatCard label="9 Data Types" value="Linked in Network" />
          <StatCard label="256-bit" value="Security" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="mt-1 text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
}
