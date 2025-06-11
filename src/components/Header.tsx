export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-grey-700">matthew martin</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 px-3 py-2 rounded-md transition-all duration-300">view my resume</a>
          <a href="#experience" className="text-gray-700 hover:text-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 px-3 py-2 rounded-md transition-all duration-300">see my experiences</a>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}