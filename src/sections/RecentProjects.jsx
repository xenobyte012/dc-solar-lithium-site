import React from "react";

const projects = [
  {
    image: "/projects/project1.jpg",
    title: "Residential Solar Installation",
    location: "Johannesburg",
  },
  {
    image: "/projects/project2.jpg",
    title: "Commercial Solar System",
    location: "Pretoria",
  },
  {
    image: "/projects/project3.jpg",
    title: "Lithium Battery Backup",
    location: "Rustenburg",
  },
];

function RecentProjects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
            Our Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Recent Installations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white/5 border border-white/10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
