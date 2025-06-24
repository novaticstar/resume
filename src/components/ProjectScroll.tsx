export default function ProjectScroll() {
  const projects = [
    {
      name: "A.Eyes",
      desc: "AI powered object recognition application for the visually impaired",
      downloads: "Mobile App",
      stars: "1st Place Winner @ Project Code",
      color: "bg-gradient-to-br from-white via-blue-50 to-blue-300",
    },
    {
      name: "Timeback",
      desc: "AI focused calendar application with smart scheduling",
      downloads: "Coming Soon",
      stars: "In Development",
      color: "bg-gradient-to-br from-white via-orange-50 to-orange-300",
    },
    {
      name: "nova's Complaint Management Agent",
      desc: "Full-stack application with Supabase and React",
      downloads: "Web App",
      stars: "Completed",
      color: "bg-gradient-to-br from-white via-purple-50 to-purple-300",
    },
    {
      name: "LegisWatch",
      desc: "Full-stack application with Flask and React, using Congress API and HuggingFace for Bill tracking and summarization",
      downloads: "Web App",
      stars: "In Development",
      color: "bg-gradient-to-br from-white via-pink-50 to-pink-300",
    },
    {
      name: "KitchenShare",
      desc: "Full-stack application with Django and React, using AWS for item storage",
      downloads: "Web App",
      stars: "Completed",
      color: "bg-gradient-to-br from-white via-pink-50 to-pink-300",
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
              className={`min-w-[300px] snap-center p-16 rounded-xl shadow-xl ${proj.color}`}
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
