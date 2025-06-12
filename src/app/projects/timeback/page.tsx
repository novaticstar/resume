import Header from "../../../components/HeaderNoScroll";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function Timeback() {
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
              <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                coming soon
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">timeback</h1>
            <p className="text-xl text-gray-600 mb-4">innovative time management & productivity application</p>
            <p className="text-lg text-gray-500 leading-relaxed">
              an exciting new project currently in development that will revolutionize how users manage their time, 
              track productivity, and optimize their daily workflows through intelligent automation and insights.
            </p>
          </div>
        </section>

        {/* Coming Soon Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-12 mb-12">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">project in development</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                timeback is currently being designed and developed with a focus on creating an intuitive, 
                powerful solution for modern productivity challenges. this project will showcase advanced 
                software development skills and innovative user experience design.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">innovative features</h3>
                  <p className="text-gray-600 text-sm">cutting-edge functionality designed to solve real productivity problems</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">modern technology</h3>
                  <p className="text-gray-600 text-sm">built with the latest frameworks and development best practices</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">user-centered design</h3>
                  <p className="text-gray-600 text-sm">thoughtful ux/ui design prioritizing user experience and accessibility</p>
                </div>
              </div>
            </div>

            {/* Development Timeline */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">development roadmap</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800">concept & planning</h4>
                      <p className="text-gray-600 text-sm">market research, user requirements, and technical architecture</p>
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">in progress</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg opacity-75">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800">design & prototyping</h4>
                      <p className="text-gray-600 text-sm">ui/ux design, wireframes, and interactive prototypes</p>
                    </div>
                  </div>
                  <span className="text-gray-500 font-medium">upcoming</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg opacity-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800">development & testing</h4>
                      <p className="text-gray-600 text-sm">implementation, testing, and iterative refinement</p>
                    </div>
                  </div>
                  <span className="text-gray-500 font-medium">planned</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg opacity-25">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800">launch & deployment</h4>
                      <p className="text-gray-600 text-sm">final testing, deployment, and user onboarding</p>
                    </div>
                  </div>
                  <span className="text-gray-500 font-medium">future</span>
                </div>
              </div>
            </div>

            {/* Stay Updated */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">stay updated</h3>
              <p className="text-gray-600 mb-6">
                this project represents an exciting opportunity to showcase advanced development skills, 
                innovative problem-solving, and modern software engineering practices. check back for updates 
                as development progresses.
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">productivity tools</span>
                <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">time management</span>
                <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">user experience</span>
                <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">modern development</span>
                <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">innovative solutions</span>
              </div>
              
              <p className="text-gray-500 text-sm italic">
                "the best way to predict the future is to create it" - peter drucker
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}