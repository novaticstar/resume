import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <Hero />
      <main className="flex-grow">
        <About />        
        {/* Add more sections as needed */}
      </main>

      <Footer />
    </div>
  );
}
