const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Salvatore Gianquinto. Tutti i diritti
        riservati.
      </p>
      <p className="text-sm space-x-4">
        <a href="#about" className="hover:text-white transition">
          About
        </a>
        <a href="#skills" className="hover:text-white transition">
          Skills
        </a>
        <a href="#projects" className="hover:text-white transition">
          Progetti
        </a>
        <a href="#contact" className="hover:text-white transition">
          Contatti
        </a>
      </p>
      <p className="text-xs text-gray-400 mt-1">
        Sviluppato con cura in React e Tailwind CSS
      </p>
    </footer>
  )
}
export default Footer
