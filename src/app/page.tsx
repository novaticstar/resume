import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectScroll from "../components/ProjectScroll";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow">
          <section id="about" className="py-32 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">about me</h2>
                <p className="text-lg mb-4">
                    hi, i'm matthew martin, a rising 4ᵗʰ year at <span className="text-orange-600">University of Virginia</span> doing a <b>bachelors of science in computer science with a minor in engineering business</b>.
                    i have a great love for software engineering and full stack development, and i am always looking to learn new things and improve my skills, particularly in the areas of software development and machine learning.
                    i've enjoyed working on a variety of projects, from building web applications, cool software, to exploring the world of artificial intelligence and machine learning!
                </p>
            </div>
          </section>
          <ProjectScroll />
      </main>

      <Footer />
    </div>
  );
}

// TODO: add links to project scroll items, add more information to home page, include more sections, blog section, etc.
// TODO: add animations to hero section, add more projects, improve styling, add more content to about me section, add more sections like skills, education, etc.