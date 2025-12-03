import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
        title: "Gestione Spese",
        description:
          "Gestione Spese è un’applicazione full-stack sviluppata con React, Node.js/Express e MongoDB, pensata per aiutare l’utente a tenere traccia delle proprie finanze personali.",
        image: "gestione-spese.jpeg",
        github: "https://github.com/SalvatoreGianquinto/gestione-spese",
        live: "https://gestione-spese-fawn.vercel.app/",
        maintenance: false,
      },
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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  }

  const ProjectCard = ({ project }) => (
    <div
      key={project.title}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 mx-2"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-t-xl"
      />
      <div className="p-4 space-y-2">
        <h4 className="text-lg font-semibold">{project.title}</h4>
        <p className="text-gray-600 text-sm">{project.description}</p>

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
  )

  return (
    <section id="projects" className="bg-gray-100 py-10 px-6 md:px-20">
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

              {projectList.length > 1 ? (
                <Slider {...sliderSettings}>
                  {projectList.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </Slider>
              ) : (
                <div className="space-y-6">
                  {projectList.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
