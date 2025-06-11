export default function ProjectSection() {
    return (
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
            <p className="text-gray-600">Here are some of my recent projects that showcase my skills and creativity.</p>
            <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-50 rounded-r-lg">
                    <div className="flex justify-between items-center">
                        <div className="flex-1">
                            <p className="text-lg">
                                <span className="text-blue-600 font-bold">A.Eyes</span>, an AI powered object recognition application for the visually impaired! A full-stack application built with Expo focused on mobile, won first place at Project Code's annual project showcase.
                            </p>
                        </div>
                        <a href="/projects/a-eyes" className="ml-4 flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group px-3 py-2">
                            Learn More
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-2 bg-purple-50 rounded-r-lg">
                    <div className="flex justify-between items-center">
                        <div className="flex-1">
                            <p className="text-lg">
                                <span className="text-purple-500 font-bold">Nova's Complaint Management Agent</span>, a simple full-stack application with Supabase, Tailwind CSS, React, and Vite.
                            </p>
                        </div>
                        <a href="/projects/complaint-management-agent" className="ml-4 flex items-center text-purple-500 hover:text-purple-700 font-medium transition-colors group px-3 py-2">
                            Learn More
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6 py-2 bg-yellow-50 rounded-r-lg">
                    <div className="flex justify-between items-center">
                        <div className="flex-1">
                            <p className="text-lg">
                                <span className="text-yellow-600 font-bold">Timeback</span>, an AI focused calendar application, automatically taking in events, imports, and anything else you give it, spitting back a schedule easily put in your favorite calendar applications, coming soon.
                            </p>
                        </div>
                        <a href="/projects/timeback" className="ml-4 flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors group px-3 py-2">
                            Learn More
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mb-8">
                <a 
                    href="/projects" 
                    className="inline-flex items-center text-gray-700 bg-gradient-to-b from-transparent to-blue-50 backdrop-blur-lg hover:text-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 px-6 py-3 rounded-md transition-all duration-300"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                    </svg>
                    See More Projects
                </a>
            </div>
            
            <div className="space-y-8">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">highlight skills</h3>
                    <p className="text-gray-600">
                        I specialize in <span className="text-blue-600 font-semibold">full-stack development</span>, 
                        working with <span className="text-green-600 font-semibold">React</span>, <span className="text-yellow-600 font-semibold">Next.js</span>, 
                        and <span className="text-red-600 font-semibold">Python</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}