const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">Chi sono</h2>
          <p className="text-gray-700 text-lg">
            {" "}
            Ciao! Mi chiamo Salvatore Gianquinto e ho intrapreso il mio percorso
            di sviluppo web con <strong>Epicode</strong>, dove ho avuto modo di
            approfondire le basi del Full Stack.
          </p>
          <p className="text-gray-700 text-lg">
            {" "}
            Durante questo percorso ho maturato esperienza nello sviluppo di
            progetti reali, imparando a gestire componenti, state e interazioni
            complesse, consolidando le mie competenze tecniche.
          </p>
          <p className="text-gray-700 text-lg">
            {" "}
            Attualmente il mio focus è sul <strong>Front-End moderno</strong>,
            con particolare attenzione a interfacce responsive, esperienza
            utente e design pulito. Continuo a esplorare nuove tecnologie per
            migliorare continuamente le mie capacità.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
