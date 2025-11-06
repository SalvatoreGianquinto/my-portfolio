import Avatar from "../src/assets/avatar.png"

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[50vh]">
      <div className="bg-gray-800 flex flex-col items-center justify-center p-4 space-y-4">
        <p className="text-white text-5xl font-bold">Salvatore Gianquinto</p>
        <p className="text-white text-xl">
          Full Stack Developer con passione per il Front-End
        </p>
        <a
          href="#projects"
          className="bg-white text-red-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-200 transition"
        >
          Scopri i miei progetti
        </a>
      </div>
      <div className="bg-gray-800 flex items-center justify-center md:justify-start p-4">
        <img
          src={Avatar}
          alt="Salvatore Gianquinto"
          className="w-3/4 md:w-1/2 max-w-xs md:max-w-sm rounded-xl  transform hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  )
}

export default Hero
