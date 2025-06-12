import Header from "../../components/HeaderNoScroll";
import Footer from "../../components/Footer";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Personal Section */}
        <section id="personal" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">personal</h2>
            <ul className="space-y-2 text-lg">
              <li>• undergraduate student @ uva's engineering school</li>
              <li>• project manager @ project code uva (leads a team of 40)</li>
              <li>• member, diversity student council for uva engineering</li>
              <li>• member, national society of black engineers (nsbe)</li>
              <li>• member, vietnamese student association (vsa); attended mauvsa's yearly conference; lions scholarship recipient</li>
            </ul>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">professional experience</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800">website application developer intern – astor perkins</h3>
              <span className="text-gray-600 italic">june 2025 – august 2025 | remote, united states</span>
              <ul className="mt-3 space-y-2">
                <li>• built and shipped full-stack features using react, typescript, and node.js for an empathy-based "human currency" platform.</li>
                <li>• designed and optimized postgresql schemas via supabase, securing user profiles, token transactions, and community posts.</li>
                <li>• deployed to aws ec2 with s3 asset management; automated docker builds and test suites through github actions for ci/cd.</li>
                <li>• collaborated in an agile environment, participating in daily stand-ups and sprint reviews.</li>
              </ul>
              <p className="mt-3"><strong>impact:</strong> developed strong troubleshooting and lifecycle management skills in an enterprise it environment, supporting thousands of end-users efficiently.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800">technical specialist intern – pwcs</h3>
              <span className="text-gray-600 italic">mar 2024 – may 2024 | lake ridge, va</span>
              <ul className="mt-3 space-y-2">
                <li>• provided hands-on support across a distributed school district, handling device updates, repairs, and imaging.</li>
                <li>• enhanced issue resolution efficiency by 17% through responsive support via zendesk.</li>
                <li>• managed warranty coordination and inventory cycles, ensuring minimized device downtime.</li>
              </ul>
              <p className="mt-3"><strong>impact:</strong> developed strong troubleshooting and lifecycle management skills in an enterprise it environment, supporting thousands of end-users efficiently.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800">technical business analyst intern – bln24</h3>
              <span className="text-gray-600 italic">may 2022 – jan 2024 | tysons corner, va</span>
              <ul className="mt-3 space-y-2">
                <li>• spearheaded introduction of project tracking infrastructure (ticket systems, templates, agile tools).</li>
                <li>• drove a 30% increase in workflow efficiency by streamlining project management in jira/trello.</li>
                <li>• transitioned into technical exploration, learning and applying aws, angular, and figma prototyping tools.</li>
              </ul>
              <p className="mt-3"><strong>impact:</strong> strengthened business-technical collaboration and boosted project visibility while gaining a foundation in cloud infrastructure and frontend design systems.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">project summaries</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800">kitchenshare</h3>
              <p className="mb-3"><strong>purpose:</strong> django-based web app for sharing and managing kitchen items in a community. supports user roles, item borrowing, collection management, issue reporting, messaging, and moderation.</p>
              <ul className="space-y-2">
                <li>• requirements engineer: led requirements elicitation, user stories, and feature/issue tracking.</li>
                <li>• implemented user moderation, dynamic forms, item request handling, and secure item deletion.</li>
                <li>• agile team of 5; used github projects, actions, and heroku for ci/cd and deployment.</li>
              </ul>
              <details className="mt-3">
                <summary className="cursor-pointer font-semibold">key features & implementation</summary>
                <ul className="mt-2 space-y-1 pl-4">
                  <li>• user roles (patron/librarian), promotion/demotion, group-based access</li>
                  <li>• item/collection management, public/private settings</li>
                  <li>• borrowing workflow with request statuses</li>
                  <li>• issue reporting and moderation dashboard</li>
                  <li>• messaging with real-time updates</li>
                  <li>• secure item deletion (postgresql & s3)</li>
                  <li>• ratings for items and users</li>
                  <li>• backend: django/postgresql; frontend: bootstrap 5; auth: google oauth</li>
                </ul>
              </details>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800">a.eyes (project code cio project)</h3>
              <p className="mb-3"><strong>purpose:</strong> react native app for visually impaired users, providing real-time image recognition, descriptive ai, and conversational interaction.</p>
              <ul className="space-y-2">
                <li>• project manager: led team, coordinated sprints, set milestones, and managed agile workflow.</li>
                <li>• integrated hugging face blip for image captioning, zephyr-7b for q&a, and elevenlabs for tts/stt.</li>
                <li>• ensured full accessibility with voice input/output and screen-reader support.</li>
              </ul>
              <details className="mt-3">
                <summary className="cursor-pointer font-semibold">key features & implementation</summary>
                <ul className="mt-2 space-y-1 pl-4">
                  <li>• image capture, ai-powered captioning, and conversational follow-up</li>
                  <li>• text-to-speech and speech-to-text integration</li>
                  <li>• local storage of interaction history</li>
                  <li>• agile practices: jira, github actions, ci/cd, frequent demos</li>
                </ul>
              </details>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800">complaint management agent</h3>
              <p className="mb-3"><strong>purpose:</strong> full-stack web application built within a 72-hour take-home challenge. features a user-facing submission form and an internal admin dashboard for complaint management.</p>
              <ul className="space-y-2">
                <li>• developed a restful api with node.js and express to handle complaint creation, status updates, and deletion.</li>
                <li>• designed a modern, responsive frontend using react, typescript, vite, and tailwind css.</li>
                <li>• integrated supabase (postgresql) to persist complaints with fields for status tracking and timestamps.</li>
                <li>• implemented client-side validation, real-time success messages, and dynamic complaint filtering and status toggling for admins.</li>
              </ul>
              <details className="mt-3">
                <summary className="cursor-pointer font-semibold">key features & implementation</summary>
                <ul className="mt-2 space-y-1 pl-4">
                  <li>• form validation and crud operations</li>
                  <li>• supabase integration with postgresql backend</li>
                  <li>• admin dashboard with filtering and status management</li>
                  <li>• restful api architecture</li>
                  <li>• scalable, modular design with clear separation between client, server, and database layers</li>
                  <li>• stack: node.js, express, react, typescript, supabase, tailwind css, vite</li>
                </ul>
              </details>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">education</h2>
            <p className="text-lg italic mb-8">university of virginia | bs – computer science | minor – engineering business | may 2026</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">cs 3130: computer systems & organization</h3>
                <p className="mb-3">hands-on c programming: system architecture, memory management, concurrency, ipc, security, and performance analysis. labs included parallel game of life, secure messaging, and side-channel attack simulation.</p>
                <details>
                  <summary className="cursor-pointer font-semibold">selected labs & tools</summary>
                  <ul className="mt-2 space-y-1 pl-4">
                    <li>• string splitting utility, system call timing, fork/output collection</li>
                    <li>• page table/tlb simulation, cache behavior, parallelization with openmp</li>
                    <li>• security: side-channel attacks, secure messaging protocol</li>
                    <li>• tools: gdb, valgrind, posix threads, linux cli</li>
                  </ul>
                </details>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">cs 3250: software testing</h3>
                <p className="mb-3">java-based coursework in unit testing (junit), property-based testing, coverage analysis, mutation testing, and test automation. designed and executed test suites for data structures and graph libraries.</p>
                <details>
                  <summary className="cursor-pointer font-semibold">highlights & tools</summary>
                  <ul className="mt-2 space-y-1 pl-4">
                    <li>• junit, maven, jacoco, pit mutation testing</li>
                    <li>• test suite design for sllist and graph libraries</li>
                    <li>• automated test generation and coverage improvement</li>
                  </ul>
                </details>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">cs 3100: data structures & algorithms ii</h3>
                <p className="mb-3">advanced algorithms: graph theory, dynamic programming, greedy algorithms, shortest paths, msts, np-completeness. implemented in python with networkx.</p>
                <details>
                  <summary className="cursor-pointer font-semibold">selected projects & tools</summary>
                  <ul className="mt-2 space-y-1 pl-4">
                    <li>• greedy scheduling, dynamic programming, union-find, a* search, msts</li>
                    <li>• python, networkx, custom test cases, git version control</li>
                  </ul>
                </details>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">sts 1800: business fundamentals</h3>
                <p className="mb-3">business, finance, entrepreneurship, and strategy for engineers. case studies, financial modeling, and leadership analysis.</p>
                <details>
                  <summary className="cursor-pointer font-semibold">assignments & tools</summary>
                  <ul className="mt-2 space-y-1 pl-4">
                    <li>• financial projections, case analysis, marketing strategy, leadership reflection</li>
                    <li>• excel, harvard business publishing, irr/dcf calculators</li>
                  </ul>
                </details>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">cs 3710: introduction to cybersecurity</h3>
                <p className="mb-3">cybersecurity principles, hands-on labs with nmap, wireshark, metasploit, snort, and gnupg. final ctf-style exam tested real-world defense and attack skills.</p>
                <details>
                  <summary className="cursor-pointer font-semibold">labs & tools</summary>
                  <ul className="mt-2 space-y-1 pl-4">
                    <li>• network scanning, password cracking, vulnerability exploitation, firewall configuration</li>
                    <li>• linux/bash, virginia cyber range, john the ripper, metasploit</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                'python', 'java', 'rest apis', 'react', 'web development', 'django',
                'expo', 'aws', 'github actions', 'ci/cd', 'azure', 'linux',
                'vs code', 'figma', 'jira', 'agile/scrum', 'trello', 'project management',
                'microsoft office', 'machine learning', 'ai', 'data structures & algorithms',
                'pytorch', 'postgresql', 'sql', 'computer systems & organization', 'software testing'
              ].map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">clubs & leadership experience</h2>
            <ul className="space-y-3 text-lg">
              <li>• project manager, project code (38-member team) | university of virginia | august 2024 – present</li>
              <li>• engineering diversity student council member | university of virginia | august 2024 – present</li>
              <li>• national society of black engineers | university of virginia | august 2024 – present</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
