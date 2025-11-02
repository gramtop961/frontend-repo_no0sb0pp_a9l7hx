import { useState } from 'react';
import { CheckCircle, Copy } from 'lucide-react';

const installCode = `pip install genoquant`;

const pyExample = `from genoquant import BiogeneticIdentity\n\nidentity = BiogeneticIdentity()\nbgn_id = identity.create_from_dna(\"ATCGATCG...\")\nprint(f\"Your BGN ID: {bgn_id}\")\n# Output: BGN-167B-8257-D739-FE8A`;

export default function GettingStarted() {
  return (
    <section id="getting-started" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Getting Started</h2>
          <p className="mt-2 text-gray-600">Install the SDK and create your first BGN ID in minutes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Step number={1} title="Install GenoQuant">
              <CodeBlock language="bash" code={installCode} />
            </Step>
            <Step number={2} title="Generate your first BGN ID">
              <CodeBlock language="python" code={pyExample} />
            </Step>
            <a
              href="#api-docs"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0066CC] px-5 py-3 text-white font-semibold shadow hover:bg-[#0052A3] transition-colors"
            >
              <CheckCircle className="h-5 w-5" /> Next: Explore API Docs
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">What you'll learn</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Core concepts of BGN ID and Profile ID</li>
              <li>• How the GenoQuant Network links 9 data types</li>
              <li>• Calling the Medical AI analysis endpoints</li>
              <li>• Security and privacy best practices</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, children }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-[#00CC66] text-white flex items-center justify-center font-bold">{number}</div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function CodeBlock({ code, language = 'bash' }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <div className="relative">
      <pre className="overflow-auto rounded-lg bg-[#1A1A1A] text-[#F5F5F5] p-4 text-sm leading-6 font-mono">
        <code>
          {code}
        </code>
      </pre>
      <button
        onClick={onCopy}
        className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 shadow hover:bg-white"
        aria-label="Copy code"
      >
        <Copy className="h-3.5 w-3.5" /> {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}
