const Projects = () => {
  const projects = {
    "Front-End": [
      {
        title: "Climys",
        description:
          "App meteo con API esterne e responsive design, sviluppata con React e Tailwind CSS.",
        image: "climys.jpeg",
        github: "https://github.com/SalvatoreGianquinto/climys",
        live: "https://climys.vercel.app/",
      },
    ],
    "Full-Stack": [
      {
        title: "Ricette Swap",
        description:
          "Piattaforma full-stack sviluppata con React e PocketBase: inserisci un ingrediente e trova tutte le ricette che lo contengono (al momento solo ricette americane).",
        image: "ricette-swap.jpeg",
        github: "https://github.com/SalvatoreGianquinto/ricette-swap1",
        live: "https://ricette-swap1.vercel.app/",
        maintenance: true,
      },
    ],
  }

  return (
    <section id="projects" className="bg-gray-50 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Progetti
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(projects).map(([category, projectList]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                {category}
              </h3>
              <div className="space-y-6">
                {projectList.map((project) => (
                  <div
                    key={project.title}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-t-xl"
                    />
                    <div className="p-4 space-y-2">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {project.description}
                      </p>

                      {project.maintenance && (
                        <span className="text-red-500 font-semibold text-sm">
                          ⚠️ In manutenzione
                        </span>
                      )}

                      <div className="flex space-x-4 mt-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          GitHub
                        </a>
                        {project.live && !project.maintenance && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 font-semibold hover:underline"
                          >
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
