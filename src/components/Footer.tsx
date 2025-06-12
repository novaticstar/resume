export default function Footer() {
  return (
    <footer className="bg-white text-grey-600 p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 Matthew Martin. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="mailto:mattmwork2022@gmail.com" className="hover:text-blue-600">Email Me</a>
          <a href="https://linkedin.com/in/matthew-martin-swe" className="hover:text-blue-600">LinkedIn</a>
          <a href="https://github.com/novaticstar" className="hover:text-blue-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}