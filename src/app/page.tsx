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
        <section id="about" className="py-16 px-4">
          {/* About content */}
        </section>
        
        <section id="experience" className="py-16 px-4 bg-gray-50">
          {/* Experience content */}
        </section>
        
        {/* Add more sections as needed */}
      </main>

      <Footer />
    </div>
  );
}
