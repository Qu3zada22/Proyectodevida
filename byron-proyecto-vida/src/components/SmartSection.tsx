import { Target, BarChart3, CheckCircle, Star, Clock } from "lucide-react"

const smartData = [
  { letter: "S", title: "Específico (Specific)", icon: Target, color: "#92140C", description: "Mi objetivo es ingresar a la Universidad del Valle de Guatemala para estudiar Ingeniería en Sistemas y formarme profesionalmente en el área de tecnología y programación." },
  { letter: "M", title: "Medible (Measurable)", icon: BarChart3, color: "#FFCF99", description: "Podré medir mi progreso mediante mis calificaciones, el conocimiento que adquiera en áreas como matemáticas, lógica y programación, y al lograr ingresar a la universidad." },
  { letter: "A", title: "Alcanzable (Achievable)", icon: CheckCircle, color: "#92140C", description: "Este objetivo es alcanzable si mantengo disciplina en mis estudios, me preparo académicamente y continúo aprendiendo sobre tecnología y computación." },
  { letter: "R", title: "Relevante (Relevant)", icon: Star, color: "#FFCF99", description: "Es importante para mí porque quiero construir un futuro profesional en el área tecnológica, obtener estabilidad económica y trabajar en algo que realmente me guste." },
  { letter: "T", title: "Tiempo (Time-bound)", icon: Clock, color: "#92140C", description: "Planeo alcanzar este objetivo en los próximos años después de graduarme de bachillerato y completar la carrera universitaria aproximadamente en cinco años." },
]

export function SmartSection() {
  return (
    <section id="smart" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(146,20,12,0.05)' }} />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm mb-4"
            style={{ backgroundColor: 'rgba(146,20,12,0.2)', color: '#92140C', fontFamily: 'Orbitron, sans-serif' }}>
            08 // METODOLOGÍA
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
            Objetivo <span style={{ color: '#FFCF99' }}>SMART</span>
          </h2>
          <p style={{ color: 'rgba(255,248,240,0.6)' }}>Un objetivo bien definido siguiendo la metodología SMART</p>
        </div>

        {/* Main goal */}
        <div className="p-8 rounded-3xl text-center mb-12"
          style={{ background: 'linear-gradient(135deg, #111D4A, #1E1E24)', border: '1px solid #3a3a44' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(146,20,12,0.2)' }}>
            <Target className="w-5 h-5" style={{ color: '#92140C' }} />
            <span className="font-semibold" style={{ color: '#92140C' }}>Mi Gran Objetivo</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#FFF8F0' }}>
            Estudiar <span style={{ color: '#FFCF99' }}>Ingeniería en Sistemas</span> en la{' '}
            <span style={{ color: '#92140C' }}>Universidad del Valle de Guatemala</span>
          </h3>
          <p style={{ color: 'rgba(255,248,240,0.6)' }}>
            Formarme profesionalmente en el área de tecnología y programación para construir un futuro exitoso
          </p>
        </div>

        {/* SMART items */}
        <div className="space-y-4">
          {smartData.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.letter} className="flex items-start gap-4 p-6 rounded-2xl transition-all"
                style={{ backgroundColor: 'rgba(17,29,74,0.3)', border: '1px solid #3a3a44' }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-black"
                  style={{ backgroundColor: item.color + '20', color: item.color, fontFamily: 'Orbitron, sans-serif' }}>
                  {item.letter}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                    <h3 className="text-lg font-bold" style={{ color: '#FFF8F0' }}>{item.title}</h3>
                  </div>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>{item.description}</p>
                </div>
                <div className="hidden sm:flex flex-shrink-0 w-8 h-8 rounded-full items-center justify-center"
                  style={{ backgroundColor: '#1E1E24', border: '1px solid #3a3a44' }}>
                  <span className="text-sm" style={{ color: '#FFCF99', fontFamily: 'Orbitron, sans-serif' }}>{index + 1}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}