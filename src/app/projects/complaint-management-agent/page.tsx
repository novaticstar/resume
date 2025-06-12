import Header from "../../../components/HeaderNoScroll";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function ComplaintManagementAgent() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">complaint management agent</h1>
            <p className="text-xl text-gray-600 mb-4">enterprise complaint tracking system</p>
            <p className="text-lg text-gray-500 leading-relaxed">
              full-stack web application built within a 72-hour challenge, featuring a user-facing submission form 
              and comprehensive internal admin dashboard for complaint lifecycle management.
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">challenge constraints</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>72-hour deadline:</strong> rapid development and deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>full-stack requirement:</strong> complete frontend and backend implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>production-ready:</strong> scalable architecture and clean code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>modern stack:</strong> contemporary technologies and best practices</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">solution approach</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  designed a modular, scalable system with clear separation between client, server, and database layers. 
                  prioritized user experience, data integrity, and administrative efficiency while maintaining clean, 
                  maintainable code architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">rapid prototyping</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">mvp approach</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">scalable design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">technical implementation</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">frontend stack</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• react with typescript</li>
                  <li>• vite build tool</li>
                  <li>• tailwind css styling</li>
                  <li>• responsive design</li>
                  <li>• form validation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">backend architecture</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• node.js runtime</li>
                  <li>• express.js framework</li>
                  <li>• restful api design</li>
                  <li>• middleware integration</li>
                  <li>• error handling</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">database & deployment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• supabase (postgresql)</li>
                  <li>• real-time subscriptions</li>
                  <li>• row-level security</li>
                  <li>• cloud deployment</li>
                  <li>• automatic backups</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">architecture highlights</h3>
              <p className="text-gray-700 mb-4">
                implemented a clean three-tier architecture with clear separation of concerns, enabling easy maintenance 
                and future scalability. utilized modern development practices including typescript for type safety and 
                tailwind for consistent styling.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">design patterns:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• mvc architecture</li>
                    <li>• repository pattern</li>
                    <li>• dependency injection</li>
                    <li>• error boundary handling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">best practices:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• typescript strict mode</li>
                    <li>• eslint code quality</li>
                    <li>• prettier formatting</li>
                    <li>• modular component design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">key features</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">user submission portal</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>intuitive complaint submission form</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>real-time client-side validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>success confirmation messages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>responsive mobile design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>accessibility compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">admin dashboard</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>comprehensive complaint overview</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>dynamic filtering and search</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>status management controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>bulk operations support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>export functionality</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">data management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>comprehensive crud operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>automated timestamp tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>status workflow management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>data integrity validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>audit trail logging</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">api architecture</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>restful endpoint design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>json data serialization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>error handling middleware</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>request validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>cors configuration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">development timeline</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                  <h3 className="text-lg font-bold text-gray-800">day 1: foundation & planning (24 hours)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">completed tasks:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• project architecture design</li>
                      <li>• technology stack selection</li>
                      <li>• database schema design</li>
                      <li>• basic project scaffolding</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">deliverables:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• initial react application</li>
                      <li>• express server setup</li>
                      <li>• supabase database configuration</li>
                      <li>• development environment</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                  <h3 className="text-lg font-bold text-gray-800">day 2: core functionality (24 hours)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">completed tasks:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• api endpoint implementation</li>
                      <li>• database integration</li>
                      <li>• frontend form development</li>
                      <li>• basic admin dashboard</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">deliverables:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• functional complaint submission</li>
                      <li>• crud api operations</li>
                      <li>• basic admin interface</li>
                      <li>• data persistence layer</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                  <h3 className="text-lg font-bold text-gray-800">day 3: polish & deployment (24 hours)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">completed tasks:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• ui/ux refinements</li>
                      <li>• validation & error handling</li>
                      <li>• responsive design optimization</li>
                      <li>• production deployment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">deliverables:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• production-ready application</li>
                      <li>• comprehensive documentation</li>
                      <li>• deployment configuration</li>
                      <li>• testing & quality assurance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Achievements */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">results & achievements</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">72</div>
                  <div className="text-gray-700 text-sm">hours to completion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-700 text-sm">requirements met</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                  <div className="text-gray-700 text-sm">critical bugs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-700 text-sm">code coverage</div>
                </div>
              </div>
              <p className="text-gray-700 text-center mb-4">
                successfully delivered a fully functional, production-ready complaint management system within the tight 
                72-hour deadline, demonstrating rapid development skills and technical versatility.
              </p>
              <div className="text-center">
                <div className="inline-flex items-center text-green-700 bg-green-100 px-4 py-2 rounded-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  challenge completed successfully
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}