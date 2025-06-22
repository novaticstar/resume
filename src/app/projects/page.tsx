import Header from "../../components/HeaderNoScroll";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Projects() {  const projects = [
    {
      title: "legiswatch",
      description: "real-time bill tracker & notifier for compliance and policy teams",
      tech: ["Python", "Flask", "ProPublica API", "Bootstrap", "JavaScript", "AI/LLM"],
      status: "completed",
      link: "/projects/legiswatch",
      category: "full-stack web development"
    },
    {
      title: "kitchenshare",
      description: "django-based web app for sharing and managing kitchen items in a community",
      tech: ["Django", "PostgreSQL", "Bootstrap 5", "Google OAuth", "Heroku"],
      status: "completed",
      link: "/projects/kitchenshare",
      category: "full-stack web development"
    },
    {
      title: "a.eyes",
      description: "react native app for visually impaired users with ai-powered image recognition",
      tech: ["React Native", "Hugging Face", "ElevenLabs", "Expo", "AI/ML"],
      status: "completed",
      link: "/projects/a-eyes",
      category: "mobile development & ai"
    },
    {
      title: "complaint management agent",
      description: "full-stack web application with user submissions and admin dashboard",
      tech: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS"],
      status: "completed",
      link: "/projects/complaint-management-agent",
      category: "full-stack web development"
    },
    {
      title: "network security lab",
      description: "cybersecurity projects including vulnerability analysis and penetration testing",
      tech: ["Linux", "Metasploit", "Wireshark", "Nmap", "John the Ripper"],
      status: "completed",
      link: "/projects/network-security",
      category: "cybersecurity"
    },
    {
      title: "timeback",
      description: "innovative time management and productivity application",
      tech: ["Coming Soon"],
      status: "coming-soon",
      link: "/projects/timeback",
      category: "productivity"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">my projects</h1>
            <p className="text-xl text-gray-600 mb-4">a collection of software engineering and development work</p>
            <p className="text-lg text-gray-500">exploring full-stack development, ai/ml, cybersecurity, and innovative solutions</p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 group">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      project.status === 'completed' 
                        ? 'text-green-700 bg-green-50' 
                        : 'text-orange-700 bg-orange-50'
                    }`}>
                      {project.status === 'completed' ? 'completed' : 'coming soon'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <Link 
                    href={project.link}
                    className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      project.status === 'completed'
                        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                        : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {project.status === 'completed' ? 'view project' : 'coming soon'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Highlight */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">technologies used</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  'react', 'react native', 'django', 'flask', 'node.js', 'typescript', 'python',
                  'postgresql', 'supabase', 'propublica api', 'tailwind css', 'bootstrap', 'ai/ml', 'hugging face',
                  'google oauth', 'heroku', 'expo', 'cybersecurity', 'linux', 'penetration testing'
                ].map((tech, index) => (
                  <span key={index} className="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-blue-100 transition-colors text-center">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// TODO: Add more projects, update links, and refine styles
// Include images and more detailed descriptions for each project
// Consider adding a filter or sort functionality for projects
// Add links to github repos or live demos where applicable