import Header from "../../../components/HeaderNoScroll";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function AEyes() {
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
                mobile development & ai
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">a.eyes</h1>
            <p className="text-xl text-gray-600 mb-4">ai-powered accessibility mobile application</p>
            <p className="text-lg text-gray-500 leading-relaxed">
              react native application designed for visually impaired users, providing real-time image recognition, 
              descriptive ai analysis, and conversational interaction through advanced machine learning models.
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">mission & impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  a.eyes was developed as part of project code uva's community impact initiative. the application 
                  empowers visually impaired users by providing instant, detailed descriptions of their environment 
                  through cutting-edge ai technology, fostering independence and accessibility.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">leadership role</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>project manager:</strong> led cross-functional team of developers and designers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>sprint coordinator:</strong> managed agile development cycles and deliverables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong>technical lead:</strong> architected ai integration and accessibility features</span>
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
              <h2 className="text-3xl font-bold text-gray-900">core features</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">ai-powered image analysis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>real-time image capture and processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>hugging face blip model integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>detailed scene description generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>object detection and identification</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">conversational ai</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>zephyr-7b language model integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>contextual follow-up questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>natural language interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>intelligent conversation memory</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">accessibility features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>elevenlabs text-to-speech integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>voice-to-text input processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>screen reader compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>intuitive touch gesture controls</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">user experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>local storage of interaction history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>offline mode capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>customizable voice settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>privacy-focused design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">technical architecture</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">mobile framework</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• react native</li>
                  <li>• expo development platform</li>
                  <li>• cross-platform compatibility</li>
                  <li>• native device integration</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">ai/ml integration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• hugging face transformers</li>
                  <li>• blip image captioning</li>
                  <li>• zephyr-7b language model</li>
                  <li>• api optimization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">audio processing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• elevenlabs tts engine</li>
                  <li>• speech-to-text processing</li>
                  <li>• audio quality optimization</li>
                  <li>• real-time audio streaming</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">development methodology</h3>
              <p className="text-gray-700 mb-4">
                implemented agile development practices with bi-weekly sprints, continuous integration through github actions, 
                and regular user testing sessions with accessibility experts and visually impaired community members.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">agile/scrum</span>
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">user-centered design</span>
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">accessibility testing</span>
                <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium">ci/cd pipeline</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Management */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">project management & leadership</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">team coordination</h3>
                <p className="text-gray-700 mb-3">
                  led a multidisciplinary team including frontend developers, ai specialists, and ux designers in delivering 
                  a complex accessibility-focused mobile application.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">responsibilities:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• sprint planning and backlog management</li>
                      <li>• stakeholder communication</li>
                      <li>• technical architecture decisions</li>
                      <li>• code review and quality assurance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">tools used:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• jira for project tracking</li>
                      <li>• github actions for ci/cd</li>
                      <li>• slack for team communication</li>
                      <li>• figma for design collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">milestones & deliverables</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-800">mvp development (sprint 1-2)</p>
                      <p className="text-gray-600 text-sm">basic image capture and ai description functionality</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-800">ai integration (sprint 3-4)</p>
                      <p className="text-gray-600 text-sm">hugging face models and conversational ai implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-800">accessibility features (sprint 5-6)</p>
                      <p className="text-gray-600 text-sm">tts/stt integration and screen reader compatibility</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-800">testing & refinement (sprint 7-8)</p>
                      <p className="text-gray-600 text-sm">user testing with accessibility community and bug fixes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">impact & results</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                  <div className="text-gray-700 text-sm">sprint cycles completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-700 text-sm">user satisfaction rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-gray-700 text-sm">ai models integrated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-700 text-sm">accessibility compliance</div>
                </div>
              </div>
              <p className="text-gray-700 text-center mb-4">
                successfully delivered a production-ready mobile application that significantly improves daily navigation 
                and environmental understanding for visually impaired users.
              </p>
              <div className="text-center">
                <p className="text-gray-600 text-sm italic">
                  "this project showcased leadership capabilities in managing complex technical projects while maintaining 
                  focus on user-centered design and accessibility standards."
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