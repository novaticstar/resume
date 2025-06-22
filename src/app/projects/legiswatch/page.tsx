import Header from "../../../components/HeaderNoScroll";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function LegisWatch() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="max-w-4xl mx-auto">
            <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
              </svg>
              back to projects
            </Link>
            <div className="mb-6">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                full-stack web development
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">legiswatch</h1>
            <p className="text-xl text-gray-600 mb-4">real-time bill tracker & notifier</p>
            <p className="text-lg text-gray-500 leading-relaxed">
              full-stack web application designed to empower compliance and policy teams with real-time monitoring 
              of newly proposed u.s. legislation, featuring ai-powered summarization and seamless government data integration.
            </p>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">project overview</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">motivation & problem</h3>
                <p className="text-gray-700 leading-relaxed">
                  tracking legislative changes is a major pain point for compliance officers, lobbyists, and advocacy groups, 
                  who must monitor complex, fast-moving regulatory landscapes. legiswatch was built to address this challenge, 
                  providing a live dashboard that surfaces relevant bills as soon as they are introduced.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">rapid development showcase</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>3-hour development:</strong> complete mvp from concept to deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>real-world application:</strong> mirrors industry needs and product goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>technical versatility:</strong> demonstrates fast learning and adaptation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Demo Links */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">project links</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://github.com/novaticstar/LegisWatch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  view on github
                </a>
                <a 
                  href="https://www.loom.com/share/9b4ee380a7e949eca750b0ff241b7e8b?sid=b57eb3a3-ca7f-4773-933f-8b02bb991abe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  demo walkthrough
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">key features</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">bill search & filtering</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>state-based bill filtering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>policy keyword search functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>real-time data from propublica congress api</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>advanced filtering options</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">live legislative updates</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>real-time bill tracking and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>comprehensive bill details and summaries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>direct links to official sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>responsive, user-friendly interface</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">ai-powered summarization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>llm-enhanced bill summaries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>business-relevant explanations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>tailored for compliance professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>automated content processing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">data export & analysis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>csv export functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>tracking data for further analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>comprehensive reporting capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>error handling and user feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">technical implementation</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">backend stack</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• python programming</li>
                  <li>• flask web framework</li>
                  <li>• rest api integration</li>
                  <li>• propublica congress api</li>
                  <li>• huggingface llm api</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">frontend technologies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• html5 structure</li>
                  <li>• bootstrap responsive design</li>
                  <li>• javascript interactivity</li>
                  <li>• fetch api for async requests</li>
                  <li>• modern ui/ux patterns</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">data & integration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• real-time government data</li>
                  <li>• api error handling</li>
                  <li>• csv export functionality</li>
                  <li>• loading indicators</li>
                  <li>• user feedback systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">rapid development approach</h3>
              <p className="text-gray-700 mb-4">
                designed, developed, and deployed the entire application in under 3 hours as a demonstration 
                of fast learning, technical versatility, and alignment with real-world industry needs. 
                the project showcases practical ai augmentation for legal professionals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">rapid prototyping</span>
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">government data integration</span>
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">ai enhancement</span>
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">user-centered design</span>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">role & responsibilities</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">full-stack development</h3>
                <p className="text-gray-700 mb-3">
                  designed, developed, and deployed the entire application as a solo project, demonstrating 
                  comprehensive full-stack capabilities and rapid development skills.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">backend responsibilities:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• flask application architecture</li>
                      <li>• congress api integration</li>
                      <li>• data processing and filtering</li>
                      <li>• huggingface llm api integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">frontend responsibilities:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• responsive ui development</li>
                      <li>• asynchronous data fetching</li>
                      <li>• user interaction handling</li>
                      <li>• csv export implementation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">documentation & presentation</h3>
                <p className="text-gray-700 mb-3">
                  created comprehensive documentation and project walkthrough to illustrate technical decisions, 
                  product value, and alignment with industry needs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">technical documentation</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">demo video creation</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">product positioning</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">value proposition</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">results & impact</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-gray-700 text-sm">hours to completion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-700 text-sm">feature completion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                  <div className="text-gray-700 text-sm">government api integrated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                  <div className="text-gray-700 text-sm">bills trackable</div>
                </div>
              </div>
              <p className="text-gray-700 text-center mb-4">
                delivered a working mvp that allows users to instantly track and analyze proposed bills in their 
                areas of interest, reflecting real-world compliance and policy monitoring needs.
              </p>
              <div className="text-center">
                <p className="text-gray-600 text-sm italic">
                  showcased rapid prototyping ability, user-centered design, and experience with real-world 
                  tech stacks and ai integration for legal professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
