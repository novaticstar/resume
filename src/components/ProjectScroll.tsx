export default function ProjectScroll() {
  const projects = [
    {
      name: "A.Eyes",
      desc: "The easiest way to run TypeScript in Node.js",
      downloads: "33.9M/month",
      stars: "10,819",
      color: "bg-gradient-to-br from-green-500 to-blue-600",
    },
    {
      name: "Timeback",
      desc: "Zero-config package bundler for Node.js + TypeScript",
      downloads: "182.2K/month",
      stars: "1,427",
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
    },
    {
      name: "nova's Complaint Management Agent",
      desc: "Find the true size of an npm package",
      downloads: "",
      stars: "",
      color: "bg-gradient-to-br from-black to-gray-900",
    },
        {
      name: "A.Eyes",
      desc: "The easiest way to run TypeScript in Node.js",
      downloads: "33.9M/month",
      stars: "10,819",
      color: "bg-gradient-to-br from-green-500 to-blue-600",
    },
    {
      name: "Timeback",
      desc: "Zero-config package bundler for Node.js + TypeScript",
      downloads: "182.2K/month",
      stars: "1,427",
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
    },
    {
      name: "nova's Complaint Management Agent",
      desc: "Find the true size of an npm package",
      downloads: "",
      stars: "",
      color: "bg-gradient-to-br from-black to-gray-900",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-grey-700 py-8">
      <h2 className="text-3xl font-bold mb-8">featured projects</h2>
      <div className="overflow-x-auto scrollbar-hide px-4">
        <div className="flex space-x-4 snap-x snap-mandatory">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`min-w-[300px] snap-center p-4 rounded-xl shadow-xl ${proj.color}`}
            >
              <div className="text-sm opacity-75">
                {proj.downloads && `📥 ${proj.downloads}`}<br />
                {proj.stars && `⭐ ${proj.stars}`}
              </div>
              <h3 className="text-xl font-semibold mt-2">{proj.name}</h3>
              <p className="text-sm mt-1">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
