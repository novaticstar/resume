import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <Hero />
      <main className="flex-grow">
        <section id="about" className="py-96 px-4 min-h-screen">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg mb-4">This is a test section to see the header scroll behavior.</p>
            <p className="text-lg mb-4">Keep scrolling to test the header animation...</p>
            <div className="space-y-8">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Test Content Block {i + 1}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="experience" className="py-96 px-4 bg-gray-50 min-h-screen">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Job Experience {i + 1}</h3>
                  <p className="text-gray-600 mb-2">Company Name | 2023-2024</p>
                  <p className="text-gray-600">
                    Detailed description of responsibilities and achievements in this role.
                    More content to make the page longer for testing scroll behavior.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Add more sections as needed */}
      </main>

      <Footer />
    </div>
  );
}
