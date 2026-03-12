import { useState } from "react"
import { Repeat, ShieldCheck, Heart, BookOpen, Handshake, Scale } from "lucide-react"

const principios = [
  {
    icon: Repeat,
    title: "Constancia en lo que me propongo",
    description: "Entiendo que los resultados importantes no se logran de un día para otro, sino con disciplina y repetición. Esto lo aplico cuando voy al gimnasio o cuando entreno boxeo, porque sé que mejorar físicamente requiere tiempo, esfuerzo y paciencia. Este principio también lo quiero aplicar en mis estudios y en mi futuro profesional.",
    color: "#92140C"
  },
  {
    icon: ShieldCheck,
    title: "No rendirme frente a los golpes de la vida",
    description: "Creo que una persona se define por cómo responde ante los momentos difíciles. En el boxeo, uno aprende que recibir golpes es parte del proceso, pero lo importante es seguir peleando y mantenerse de pie. De la misma manera veo la vida: siempre habrá problemas, pero lo importante es seguir avanzando.",
    color: "#FFCF99"
  },
  {
    icon: Heart,
    title: "Cuidar y valorar las relaciones importantes",
    description: "Esto incluye a mi familia, mis amigos y mi pareja. Creo que las relaciones se construyen con tiempo, respeto y confianza, por lo que intento mantener una buena comunicación con las personas que me importan y pasar tiempo de calidad con ellas.",
    color: "#92140C"
  },
  {
    icon: BookOpen,
    title: "Buscar siempre aprender algo nuevo",
    description: "Me gusta aprender cosas nuevas y entender cómo funcionan las cosas. Esto se refleja en mi interés por los videojuegos, la tecnología y mi deseo de estudiar ingeniería en sistemas. Para mí es importante no quedarme estancado, sino seguir desarrollando conocimientos.",
    color: "#FFCF99"
  },
  {
    icon: Handshake,
    title: "Ser alguien en quien los demás puedan confiar",
    description: "Intento ser una persona que esté presente cuando alguien necesita apoyo. Aunque a veces puedo ser reservado, cuando tengo confianza con alguien trato de demostrar que puede contar conmigo. Para mí es importante construir relaciones basadas en la confianza y el respeto.",
    color: "#92140C"
  },
  {
    icon: Scale,
    title: "Equilibrar el crecimiento personal con disfrutar la vida",
    description: "Creo que es importante trabajar por las metas personales sin olvidar disfrutar el camino. Me gusta pasar tiempo con mi familia, mis amigos y las personas que quiero, porque esos momentos también forman parte de lo que hace que la vida tenga valor.",
    color: "#FFCF99"
  }
]

export function PrincipiosSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="principios" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm mb-4"
            style={{ backgroundColor: 'rgba(146,20,12,0.2)', color: '#92140C', fontFamily: 'Orbitron, sans-serif' }}>
            05 // FUNDAMENTOS
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
            Mis <span style={{ color: '#FFCF99' }}>Principios</span>
          </h2>
          <p style={{ color: 'rgba(255,248,240,0.6)' }}>Las bases que guían mis decisiones y acciones en la vida</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principios.map((p, index) => {
            const Icon = p.icon
            const isActive = activeIndex === index
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className="relative p-6 rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(17,29,74,0.3)',
                  border: `1px solid ${isActive ? p.color : '#3a3a44'}`,
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#1E1E24', border: '1px solid #3a3a44' }}>
                  <span className="text-sm" style={{ color: '#FFCF99', fontFamily: 'Orbitron, sans-serif' }}>{index + 1}</span>
                </div>

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: p.color + '20' }}>
                  <Icon className="w-6 h-6" style={{ color: p.color }} />
                </div>

                <h3 className="text-lg font-bold mb-3" style={{ color: '#FFF8F0' }}>{p.title}</h3>

                <p className="text-sm leading-relaxed transition-all duration-300"
                  style={{
                    color: 'rgba(255,248,240,0.7)',
                    display: '-webkit-box',
                    WebkitLineClamp: isActive ? 'unset' : 3,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: isActive ? 'visible' : 'hidden',
                  }}>
                  {p.description}
                </p>

                <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(58,58,68,0.5)' }}>
                  <span className="text-xs" style={{ color: '#FFCF99' }}>
                    {isActive ? 'Click para cerrar' : 'Click para expandir'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}