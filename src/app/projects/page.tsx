import Header from "../../components/HeaderNoScroll";
import Footer from "../../components/Footer";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
      </main>

      <Footer />
    </div>
  );
}
