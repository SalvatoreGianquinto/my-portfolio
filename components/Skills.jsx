import { useState } from "react"
import clsx from "clsx"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaGitAlt,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiPostgresql,
  SiPostman,
  SiSpring,
  SiJest,
  SiBootstrap,
  SiSass,
} from "react-icons/si"

const skills = {
  "Front-End": [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
    { name: "Sass", icon: <SiSass />, color: "text-pink-500" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-600" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-700" },
  ],
  "Back-End": [
    { name: "Java", icon: <FaJava />, color: "text-red-600" },
    { name: "Spring Framework", icon: <SiSpring />, color: "text-green-600" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-800" },
  ],
  Testing: [{ name: "JUnit", icon: <SiJest />, color: "text-red-500" }],
  Tools: [
    { name: "GitHub", icon: <FaGitAlt />, color: "text-gray-800" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
  ],
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Front-End")

  return (
    <section id="skills" className="bg-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Competenze
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={clsx(
                "px-4 py-2 rounded-full font-semibold transition mt-2",
                activeTab === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          {skills[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center w-20 h-20 bg-gray-100 rounded-xl shadow hover:scale-105 transform transition duration-300"
            >
              <div className={`text-3xl ${skill.color}`}>{skill.icon}</div>
              <span className="mt-1 text-gray-800 font-medium text-xs text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
