import Header from "../../components/HeaderNoScroll";
import Footer from "../../components/Footer";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="row items-center max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">matthew martin</h1>
            <p className="text-xl text-gray-600 mb-4">software engineer & full stack developer</p>
            <p className="text-lg text-gray-500">university of virginia • computer science • class of 2026</p>
            <p className="text-lg text-gray-500 mt-2 italic">exploring the intersection of technology and human experience</p>
          </div>
        </section>

        {/* Personal Section */}
        <section id="personal" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">personal</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>undergraduate student @ uva's engineering school</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>project manager @ project code uva (leads a team of 40)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>member, diversity student council for uva engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>member, national society of black engineers (nsbe)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>member, vietnamese student association (vsa); attended mauvsa's yearly conference; lions scholarship recipient</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">professional experience</h2>
            </div>
            
            <div className="space-y-8">

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">software engineer intern – narb</h3>
                  <span className="text-gray-600 italic text-sm md:text-base">june 2025 – august 2025 | remote, united states</span>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>developed and maintained mobile features for narby and narbl using React Native, TypeScript, and Next.js in a fast-paced startup environment.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>integrated multi-LLM APIs (OpenAI, Anthropic) to support real-time chatbot functionality and structured fact validation workflows.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>contributed to narb’s open-source ecosystem with clean, well-documented code and participated in sprint planning, async standups, and code reviews.</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700"><strong className="text-blue-800">impact:</strong> developed and designed with machine learning and artificial intelligence implementation as our focus, building innovative ideas with creative solutions.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">software engineer intern – astor perkins</h3>
                  <span className="text-gray-600 italic text-sm md:text-base">june 2025 – august 2025 | remote, united states</span>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>built and shipped full-stack features using react, typescript, and flask for an ai empathy-based “Human Currency” platform.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>designed and optimized postgresql schemas via supabase, securing user profiles, token transactions, and community posts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>deployed to aws ec2 with s3 asset management; automated docker builds and test suites through github actions for ci/cd.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>designed and developed a custom empathy-driven language model using python, tensorflow, pytorch, and other tools to generate user-tailored suggestions and enhance llm capabilities.</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700"><strong className="text-blue-800">impact:</strong> developed and designed with documentation and future in mind, focusing on lifecycle in a fast paced environment, building to support thousands of users.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">technical specialist intern – pwcs</h3>
                  <span className="text-gray-600 italic text-sm md:text-base">mar 2024 – may 2024 | lake ridge, va</span>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>provided hands-on support across a distributed school district, handling device updates, repairs, and imaging.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>enhanced issue resolution efficiency by 17% through responsive support via zendesk.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>managed warranty coordination and inventory cycles, ensuring minimized device downtime.</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700"><strong className="text-blue-800">impact:</strong> developed strong troubleshooting and lifecycle management skills in an enterprise it environment, supporting thousands of end-users efficiently.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">technical business analyst intern – bln24</h3>
                  <span className="text-gray-600 italic text-sm md:text-base">may 2022 – jan 2024 | tysons corner, va</span>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>spearheaded introduction of project tracking infrastructure (ticket systems, templates, agile tools).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>drove a 30% increase in workflow efficiency by streamlining project management in jira/trello.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>transitioned into technical exploration, learning and applying aws, angular, and figma prototyping tools.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>developed an ai/ml-powered model to streamline and enhance the efficiency of government contract drafting processes.</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700"><strong className="text-blue-800">impact:</strong> strengthened business-technical collaboration and boosted project visibility while gaining a foundation in cloud infrastructure and frontend design systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">highlight project summaries</h2>
            </div>
              <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">legiswatch</h3>
                <p className="mb-4 text-gray-700"><strong className="text-blue-800">purpose:</strong> real-time bill tracking and notification system for compliance and policy teams. built to streamline legislative monitoring with ai-powered summarization and automated alerts.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>developed full-stack web application using flask backend with congress api integration for real-time bill data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>implemented ai-powered bill summarization using advanced language models to provide concise, actionable insights.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>built comprehensive notification system with email alerts, keyword tracking, and customizable monitoring preferences.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>designed responsive bootstrap frontend with intuitive dashboard for bill tracking, filtering, and user management.</span>
                  </li>
                </ul>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center">
                    <span>key features & implementation</span>
                    <svg className="w-4 h-4 ml-2 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">real-time bill tracking with propublica congress api</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">ai-powered bill summarization and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">automated email notification system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">keyword-based bill monitoring and filtering</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">responsive dashboard with bill search and user preferences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">secure user authentication and session management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">stack: python, flask, propublica api, llm integration, bootstrap, javascript</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">kitchenshare</h3>
                <p className="mb-4 text-gray-700"><strong className="text-blue-800">purpose:</strong> django-based web app for sharing and managing kitchen items in a community. supports user roles, item borrowing, collection management, issue reporting, messaging, and moderation.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>requirements engineer: led requirements elicitation, user stories, and feature/issue tracking.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>implemented user moderation, dynamic forms, item request handling, and secure item deletion.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>agile team of 5; used github projects, actions, and heroku for ci/cd and deployment.</span>
                  </li>
                </ul>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center">
                    <span>key features & implementation</span>
                    <svg className="w-4 h-4 ml-2 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">user roles (patron/librarian), promotion/demotion, group-based access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">item/collection management, public/private settings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">borrowing workflow with request statuses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">issue reporting and moderation dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">messaging with real-time updates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">secure item deletion (postgresql & s3)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">ratings for items and users</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">backend: django/postgresql; frontend: bootstrap 5; auth: google oauth</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">a.eyes (project code cio project)</h3>
                <p className="mb-4 text-gray-700"><strong className="text-blue-800">purpose:</strong> react native app for visually impaired users, providing real-time image recognition, descriptive ai, and conversational interaction.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>project manager: led team, coordinated sprints, set milestones, and managed agile workflow.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>integrated hugging face blip for image captioning, zephyr-7b for q&a, and elevenlabs for tts/stt.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>ensured full accessibility with voice input/output and screen-reader support.</span>
                  </li>
                </ul>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center">
                    <span>key features & implementation</span>
                    <svg className="w-4 h-4 ml-2 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">image capture, ai-powered captioning, and conversational follow-up</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">text-to-speech and speech-to-text integration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">local storage of interaction history</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">agile practices: jira, github actions, ci/cd, frequent demos</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">complaint management agent</h3>
                <p className="mb-4 text-gray-700"><strong className="text-blue-800">purpose:</strong> full-stack web application built within a 72-hour take-home challenge. features a user-facing submission form and an internal admin dashboard for complaint management.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>developed a restful api with node.js and express to handle complaint creation, status updates, and deletion.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>designed a modern, responsive frontend using react, typescript, vite, and tailwind css.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>integrated supabase (postgresql) to persist complaints with fields for status tracking and timestamps.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>implemented client-side validation, real-time success messages, and dynamic complaint filtering and status toggling for admins.</span>
                  </li>
                </ul>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center">
                    <span>key features & implementation</span>
                    <svg className="w-4 h-4 ml-2 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">form validation and crud operations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">supabase integration with postgresql backend</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">admin dashboard with filtering and status management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">restful api architecture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">scalable, modular design with clear separation between client, server, and database layers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">stack: node.js, express, react, typescript, supabase, tailwind css, vite</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">education</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
              <p className="text-lg italic text-center text-gray-700">
                <span className="font-semibold">university of virginia</span> | bs – computer science | minor – engineering business | may 2026
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">cs 3130: computer systems & organization</h3>
                <p className="mb-4 text-gray-700">hands-on c programming: system architecture, memory management, concurrency, ipc, security, and performance analysis. labs included parallel game of life, secure messaging, and side-channel attack simulation.</p>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center">
                    <span>selected labs & tools</span>
                    <svg className="w-4 h-4 ml-2 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">string splitting utility, system call timing, fork/output collection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">page table/tlb simulation, cache behavior, parallelization with openmp</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">security: side-channel attacks, secure messaging protocol</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">tools: gdb, valgrind, posix threads, linux cli</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">cs 4760: computer networking</h3>
                <p className="mb-4 text-gray-700">comprehensive study of computer networks including protocol design, network architecture, routing algorithms, congestion control, and network security. hands-on implementation of network protocols and analysis of real-world network performance.</p>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center">
                    <span>key topics & tools</span>
                    <svg className="w-4 h-4 ml-2 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">tcp/ip protocol stack, socket programming, network simulation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">routing protocols, network topology analysis, performance optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">network security, encryption, authentication protocols</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">tools: wireshark, mininet, python networking libraries</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">cs 3250: software testing</h3>
                <p className="mb-4 text-gray-700">java-based coursework in unit testing (junit), property-based testing, coverage analysis, mutation testing, and test automation. designed and executed test suites for data structures and graph libraries.</p>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center">
                    <span>highlights & tools</span>
                    <svg className="w-4 h-4 ml-2 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">junit, maven, jacoco, pit mutation testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">test suite design for sllist and graph libraries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">automated test generation and coverage improvement</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">cs 3100: data structures & algorithms ii</h3>
                <p className="mb-4 text-gray-700">advanced algorithms: graph theory, dynamic programming, greedy algorithms, shortest paths, msts, np-completeness. implemented in python with networkx.</p>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center">
                    <span>selected projects & tools</span>
                    <svg className="w-4 h-4 ml-2 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">greedy scheduling, dynamic programming, union-find, a* search, msts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">python, networkx, custom test cases, git version control</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">apma 3150: from data to knowledge</h3>
                <p className="mb-4 text-gray-700">course content to be added...</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">sts 1800: business fundamentals</h3>
                <p className="mb-4 text-gray-700">business, finance, entrepreneurship, and strategy for engineers. case studies, financial modeling, and leadership analysis.</p>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center">
                    <span>assignments & tools</span>
                    <svg className="w-4 h-4 ml-2 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">financial projections, case analysis, marketing strategy, leadership reflection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">excel, harvard business publishing, irr/dcf calculators</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">cs 3710: introduction to cybersecurity</h3>
                <p className="mb-4 text-gray-700">cybersecurity principles, hands-on labs with nmap, wireshark, metasploit, snort, and gnupg. final ctf-style exam tested real-world defense and attack skills.</p>
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center">
                    <span>labs & tools</span>
                    <svg className="w-4 h-4 ml-2 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">network scanning, password cracking, vulnerability exploitation, firewall configuration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700">linux/bash, virginia cyber range, john the ripper, metasploit</span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">skills</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  'python', 'java', 'c', 'javascript', 'typescript', 'react', 'node.js', 'django', 'flask',
                  'rest apis', 'postgresql', 'sql', 'aws', 'docker', 'github actions', 'ci/cd',
                  'linux', 'networking', 'cybersecurity', 'data structures & algorithms', 'software testing',
                  'agile/scrum', 'project management', 'figma', 'jira', 'trello', 'vs code',
                  'machine learning', 'ai', 'pytorch', 'web development', 'mobile development'
                ].map((skill, index) => (
                  <span key={index} className="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-blue-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">clubs & leadership experience</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span><strong>project manager</strong>, project code (38-member team) | university of virginia | august 2024 – present</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span><strong>engineering diversity student council member</strong> | university of virginia | august 2024 – present</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span><strong>national society of black engineers</strong> | university of virginia | august 2024 – present</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// TODO: Improve skills section, should be a live rotating carousel of skills, improve education section
// Improve project section, add more projects, add more details to projects, add learn more that links to project pages
// Redesign flow of resume, add more sections like certifications, awards, etc.
// Professional experience should use company logos and be more visually appealing
// Personal should include a short professional summary or objective statement, and hero should be more polished and enticing, maybe old hero design?