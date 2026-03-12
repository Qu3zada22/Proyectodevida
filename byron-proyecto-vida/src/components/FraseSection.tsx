import { Quote, Sparkles, Heart, Star } from "lucide-react"

export function FraseSection() {
  return (
    <section id="frase" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full text-sm mb-4"
            style={{ backgroundColor: 'rgba(146,20,12,0.2)', color: '#92140C', fontFamily: 'Orbitron, sans-serif' }}>
            02 // PROPÓSITO NOBLE
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
            Mi <span style={{ color: '#FFCF99' }}>Frase</span> Inspiradora
          </h2>
        </div>

        {/* Quote card */}
        <div className="relative">
          <div className="absolute -top-6 -left-6" style={{ color: 'rgba(146,20,12,0.2)' }}>
            <Quote className="w-24 h-24" />
          </div>

          <div className="p-8 sm:p-12 rounded-2xl relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #111D4A, #1E1E24)', border: '1px solid #3a3a44' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(146,20,12,0.1)' }} />

            <blockquote className="relative z-10">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 italic font-light" style={{ color: '#FFF8F0' }}>
                "El mundo no es todo sol y arcoíris. Es un lugar cruel y duro, y no importa cuán
                fuerte seas, te pondrá de rodillas y te dejará ahí permanentemente si lo permites.
                Ni tú, ni yo, ni nadie golpea más fuerte que la vida.{" "}
                <span className="font-medium not-italic" style={{ color: '#FFCF99' }}>
                  Pero no se trata de qué tan fuerte golpeas, sino de qué tan fuerte puedes
                  ser golpeado y seguir avanzando.
                </span>"
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#92140C' }}>
                  <span className="font-bold text-lg" style={{ color: '#FFF8F0' }}>RB</span>
                </div>
                <div>
                  <cite className="not-italic font-bold text-lg" style={{ color: '#FFCF99' }}>Rocky Balboa</cite>
                  <p className="text-sm" style={{ color: 'rgba(255,248,240,0.5)' }}>Película Rocky (2006)</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: <Sparkles className="w-5 h-5" style={{ color: '#92140C' }} />,
              bg: 'rgba(146,20,12,0.2)',
              title: 'Cómo me inspira',
              text: 'Muestra que la vida no siempre será fácil y que todos enfrentamos dificultades. Me recuerda que el verdadero valor no está en evitar los problemas, sino en tener la fuerza para levantarse después de caer.'
            },
            {
              icon: <Heart className="w-5 h-5" style={{ color: '#FFCF99' }} />,
              bg: 'rgba(255,207,153,0.2)',
              title: 'Cómo la aplico',
              text: 'Enfrentando los problemas con paciencia y determinación, para el ejercicio, las tareas y los pendientes. Cuando algo no sale como espero, trato de no rendirme y seguir esforzándome para mejorar.'
            },
            {
              icon: <Star className="w-5 h-5" style={{ color: '#FFF8F0' }} />,
              bg: 'rgba(17,29,74,0.8)',
              title: 'Por qué la elegí',
              text: 'Desde pequeño me ha encantado la saga de Rocky y ha influido mucho en mi manera de ver las cosas. Desde que escuché esta frase me inspiró profundamente.'
            },
          ].map((card) => (
            <div key={card.title} className="p-6 rounded-xl transition-all hover:-translate-y-1"
              style={{ backgroundColor: 'rgba(17,29,74,0.3)', border: '1px solid #3a3a44' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: card.bg }}>
                {card.icon}
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#FFCF99' }}>{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}