import Header from "../../../components/HeaderNoScroll";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function KitchenShare() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">kitchenshare</h1>
            <p className="text-xl text-gray-600 mb-4">community kitchen item sharing platform</p>
            <p className="text-lg text-gray-500 leading-relaxed">
              django-based web application that enables community members to share and manage kitchen items, 
              featuring user roles, borrowing workflows, and comprehensive moderation tools.
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">purpose & vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  kitchenshare was designed to foster community collaboration by enabling residents to share 
                  kitchen equipment and utensils. the platform reduces waste, saves money, and strengthens 
                  neighborhood bonds through resource sharing.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">my role</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>requirements engineer:</strong> led requirements elicitation and user story development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>backend developer:</strong> implemented core features and database design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>team coordinator:</strong> managed agile workflow for team of 5</span>
                  </li>
                </ul>
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
                <h3 className="text-lg font-bold text-gray-800 mb-3">user management & roles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>patron and librarian role system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>user promotion and demotion controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>group-based access permissions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>google oauth integration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">item & collection management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>comprehensive item cataloging system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>public and private collection settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>advanced search and filtering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>secure item deletion with s3 integration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">borrowing workflow</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>request submission and approval system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>real-time status tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>automated notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>return date management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">community features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>real-time messaging system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>issue reporting and resolution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>user and item rating system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>moderation dashboard</span>
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
                <h3 className="text-lg font-bold text-gray-800 mb-3">backend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• django framework</li>
                  <li>• postgresql database</li>
                  <li>• django orm</li>
                  <li>• restful api design</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">frontend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• bootstrap 5</li>
                  <li>• responsive design</li>
                  <li>• dynamic forms</li>
                  <li>• real-time updates</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">deployment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• heroku hosting</li>
                  <li>• github actions ci/cd</li>
                  <li>• aws s3 storage</li>
                  <li>• automated testing</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">development process</h3>
              <p className="text-gray-700 mb-4">
                managed an agile development process with a 5-person team, utilizing github projects for task management, 
                github actions for continuous integration, and heroku for deployment automation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">agile methodology</span>
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">git workflow</span>
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">code reviews</span>
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">testing automation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">results & impact</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-700">test coverage achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-gray-700">team members coordinated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                  <div className="text-gray-700">security vulnerabilities</div>
                </div>
              </div>
              <p className="text-gray-700 text-center">
                successfully delivered a fully functional community platform with comprehensive testing, 
                secure authentication, and robust moderation tools. the project demonstrated proficiency 
                in full-stack development, team leadership, and agile project management.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}