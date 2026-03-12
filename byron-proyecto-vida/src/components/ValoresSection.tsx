import { Repeat, ClipboardCheck, Shield, TrendingUp, Heart } from "lucide-react"

const valores = [
  {
    icon: Repeat,
    valor: "Constancia",
    definicion: "La capacidad de mantenerse firme en una meta y seguir esforzándose aunque los resultados no aparezcan inmediatamente.",
    aprendido: "Lo he desarrollado principalmente a través del gimnasio, el boxeo y de mi propia experiencia intentando mejorar cada día.",
    acciones: "Voy al gimnasio y entreno boxeo con regularidad para mejorar poco a poco. También intento mantener disciplina en mis estudios."
  },
  {
    icon: ClipboardCheck,
    valor: "Responsabilidad",
    definicion: "Cumplir con los compromisos y hacerse cargo de las propias acciones y decisiones.",
    aprendido: "Lo aprendí principalmente de mis padres, Byron y Nancy, quienes como abogados han demostrado la importancia del compromiso.",
    acciones: "Cumplo con mis tareas escolares, trato de organizar mi tiempo y asumir las consecuencias cuando cometo errores."
  },
  {
    icon: Shield,
    valor: "Lealtad",
    definicion: "Mantener apoyo, respeto y compromiso con las personas que son importantes en mi vida.",
    aprendido: "Lo aprendí en mi familia y en las relaciones cercanas que tengo con mis primos, amigos y mi pareja.",
    acciones: "Intento estar presente para las personas que quiero, escuchar cuando alguien necesita apoyo y mantener relaciones basadas en la confianza."
  },
  {
    icon: TrendingUp,
    valor: "Superación Personal",
    definicion: "El deseo constante de mejorar como persona, aprender más y desarrollar nuevas habilidades.",
    aprendido: "Lo he aprendido con el tiempo al darme cuenta de que para lograr metas importantes es necesario esforzarse y seguir creciendo.",
    acciones: "Busco aprender cosas nuevas, mejorar en mis estudios y prepararme para cumplir mi meta de estudiar ingeniería en sistemas."
  },
  {
    icon: Heart,
    valor: "Respeto",
    definicion: "Reconocer el valor de los demás y tratarlos con consideración y educación.",
    aprendido: "Lo aprendí desde pequeño en mi familia y en la forma en que me enseñaron a tratar a los demás.",
    acciones: "Intento escuchar las opiniones de otras personas, tratar bien a quienes me rodean y mantener una buena convivencia."
  }
]

export function ValoresSection() {
  return (
    <section id="valores" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm mb-4"
            style={{ backgroundColor: 'rgba(146,20,12,0.2)', color: '#92140C', fontFamily: 'Orbitron, sans-serif' }}>
            06 // VALORES
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
            Mis <span style={{ color: '#FFCF99' }}>Valores</span>
          </h2>
          <p style={{ color: 'rgba(255,248,240,0.6)' }}>Los valores que definen mi carácter y guían mi comportamiento</p>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block overflow-hidden rounded-2xl" style={{ border: '1px solid #3a3a44' }}>
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: '#111D4A' }}>
                {['Valor', 'Definición', '¿Con quién lo aprendí?', 'Acciones concretas'].map(h => (
                  <th key={h} className="text-left p-4 text-sm" style={{ color: '#FFCF99', fontFamily: 'Orbitron, sans-serif' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {valores.map((item, index) => {
                const Icon = item.icon
                return (
                  <tr key={index} className="transition-colors"
                    style={{
                      borderTop: '1px solid #3a3a44',
                      backgroundColor: index % 2 === 0 ? '#1E1E24' : 'rgba(17,29,74,0.3)'
                    }}>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(146,20,12,0.2)' }}>
                          <Icon className="w-5 h-5" style={{ color: '#92140C' }} />
                        </div>
                        <span className="font-bold" style={{ color: '#FFF8F0' }}>{item.valor}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm" style={{ color: 'rgba(255,248,240,0.7)' }}>{item.definicion}</td>
                    <td className="p-4 text-sm" style={{ color: 'rgba(255,248,240,0.7)' }}>{item.aprendido}</td>
                    <td className="p-4 text-sm" style={{ color: 'rgba(255,248,240,0.7)' }}>{item.acciones}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-4">
          {valores.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(17,29,74,0.3)', border: '1px solid #3a3a44' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(146,20,12,0.2)' }}>
                    <Icon className="w-6 h-6" style={{ color: '#92140C' }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#FFF8F0' }}>{item.valor}</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Definición', text: item.definicion },
                    { label: '¿Con quién lo aprendí?', text: item.aprendido },
                    { label: 'Acciones concretas', text: item.acciones },
                  ].map(({ label, text }) => (
                    <div key={label}>
                      <h4 className="text-sm font-semibold mb-1" style={{ color: '#FFCF99' }}>{label}</h4>
                      <p className="text-sm" style={{ color: 'rgba(255,248,240,0.7)' }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}