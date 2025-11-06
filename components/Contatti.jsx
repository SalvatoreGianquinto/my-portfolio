const Contatti = () => {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-20 px-6 md:px-20 text-center text-white"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-gray-700">Contattami</h2>
        <p className="text-lg text-gray-700">
          Se vuoi collaborare, discutere di un progetto o semplicemente dire
          ciao, puoi contattarmi tramite uno dei seguenti canali:
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
          <div className="flex flex-col items-center">
            <a
              href="mailto:gianquinto.salvatore11@gmail.com"
              className="bg-white text-blue-600 font-semibold px-4 py-2 rounded shadow hover:bg-gray-200 transition"
            >
              gianquinto.salvatore11@gmail.com
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/salvatore-gianquinto/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/SalvatoreGianquinto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contatti
