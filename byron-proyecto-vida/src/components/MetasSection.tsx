import { useState } from "react"
import { Users, Heart, Dumbbell, Brain, Briefcase, Wallet, ChevronRight } from "lucide-react"

const campos = [
  {
    id: "familiar", icon: Users, titulo: "Familiar", color: "#92140C",
    corto: { meta: "Pasar más tiempo de calidad con mi familia y fortalecer la relación con mis padres y hermanas.", estrategia: "Compartir más momentos con mi familia, hablar con ellos y valorar el tiempo juntos." },
    mediano: { meta: "Mantener una relación cercana con mi familia mientras estudio en la universidad.", estrategia: "Mantener comunicación constante con mi familia y apoyarlos cuando lo necesiten." },
    largo: { meta: "Tener estabilidad en mi vida y seguir apoyando a mi familia.", estrategia: "Mantener los valores que me enseñaron y seguir presente en sus vidas." }
  },
  {
    id: "afectivo", icon: Heart, titulo: "Afectivo", color: "#FFCF99",
    corto: { meta: "Fortalecer mis relaciones personales con respeto, confianza y comunicación.", estrategia: "Escuchar más a los demás, ser honesto y dedicar tiempo a las personas importantes." },
    mediano: { meta: "Mantener relaciones sanas y estables con las personas importantes en mi vida.", estrategia: "Aprender a comunicar mejor mis emociones y mantener relaciones basadas en respeto." },
    largo: { meta: "Tener relaciones maduras y construir una vida estable con las personas que quiero.", estrategia: "Construir relaciones basadas en confianza, apoyo y estabilidad emocional." }
  },
  {
    id: "fisico", icon: Dumbbell, titulo: "Físico", color: "#92140C",
    corto: { meta: "Mantener constancia en el gimnasio y seguir practicando boxeo para mejorar mi condición física.", estrategia: "Ir al gimnasio regularmente, entrenar boxeo y mantener hábitos saludables." },
    mediano: { meta: "Mantener hábitos saludables y disciplina en el ejercicio físico.", estrategia: "Mantener disciplina en el entrenamiento y cuidar mi salud." },
    largo: { meta: "Tener una buena salud física y seguir entrenando como parte de mi estilo de vida.", estrategia: "Continuar practicando ejercicio y mantener un estilo de vida saludable." }
  },
  {
    id: "mental", icon: Brain, titulo: "Mental / Académico", color: "#FFCF99",
    corto: { meta: "Mejorar mi disciplina en los estudios y desarrollar mejores hábitos de aprendizaje.", estrategia: "Estudiar con más organización, cumplir tareas y aprender cosas nuevas." },
    mediano: { meta: "Desarrollar habilidades académicas fuertes para la universidad.", estrategia: "Dedicar tiempo al estudio, investigar y desarrollar habilidades intelectuales." },
    largo: { meta: "Seguir aprendiendo constantemente y desarrollar nuevos conocimientos.", estrategia: "Seguir capacitándome y aprendiendo nuevas habilidades durante mi vida." }
  },
  {
    id: "profesional", icon: Briefcase, titulo: "Profesional", color: "#92140C",
    corto: { meta: "Graduarme de bachillerato y prepararme para entrar a la universidad.", estrategia: "Estudiar con disciplina, prepararme académicamente y aprender más sobre tecnología." },
    mediano: { meta: "Estudiar Ingeniería en Sistemas en la Universidad del Valle de Guatemala.", estrategia: "Aprovechar la universidad para aprender programación y sistemas informáticos." },
    largo: { meta: "Graduarme de la universidad y trabajar en el área de tecnología.", estrategia: "Trabajar en proyectos tecnológicos y seguir desarrollándome profesionalmente." }
  },
  {
    id: "economico", icon: Wallet, titulo: "Económico", color: "#FFCF99",
    corto: { meta: "Aprender a administrar mejor el dinero y entender el valor del trabajo.", estrategia: "Aprender sobre ahorro y administración básica del dinero." },
    mediano: { meta: "Buscar oportunidades laborales relacionadas con mi carrera.", estrategia: "Buscar experiencias laborales o proyectos relacionados con tecnología." },
    largo: { meta: "Tener estabilidad económica y libertad financiera gracias a mi profesión.", estrategia: "Trabajar en mi carrera profesional y administrar bien mis ingresos." }
  }
]

type Plazo = 'corto' | 'mediano' | 'largo'

export function MetasSection() {
  const [selectedPlazo, setSelectedPlazo] = useState<Plazo>('corto')
  const [expandedCampo, setExpandedCampo] = useState<string | null>(null)

  const plazos: { id: Plazo; label: string; tiempo: string }[] = [
    { id: 'corto', label: 'Corto Plazo', tiempo: '1 año' },
    { id: 'mediano', label: 'Mediano Plazo', tiempo: '5 años' },
    { id: 'largo', label: 'Largo Plazo', tiempo: '10 años' },
  ]

  return (
    <section id="metas" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full text-sm mb-4"
            style={{ backgroundColor: 'rgba(146,20,12,0.2)', color: '#92140C', fontFamily: 'Orbitron, sans-serif' }}>
            07 // OBJETIVOS
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
            Metas y <span style={{ color: '#FFCF99' }}>Estrategias</span>
          </h2>
          <p style={{ color: 'rgba(255,248,240,0.6)' }}>Mis objetivos organizados por área de vida y horizonte temporal</p>
        </div>

        {/* Plazo selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {plazos.map((plazo) => (
            <button key={plazo.id} onClick={() => setSelectedPlazo(plazo.id)}
              className="px-6 py-3 rounded-xl font-medium transition-all"
              style={{
                backgroundColor: selectedPlazo === plazo.id ? '#92140C' : 'rgba(17,29,74,0.5)',
                color: selectedPlazo === plazo.id ? '#FFF8F0' : 'rgba(255,248,240,0.7)',
                border: selectedPlazo === plazo.id ? 'none' : '1px solid #3a3a44',
                boxShadow: selectedPlazo === plazo.id ? '0 4px 20px rgba(146,20,12,0.3)' : 'none',
              }}>
              <span className="block text-sm">{plazo.label}</span>
              <span className="block text-xs opacity-70">{plazo.tiempo}</span>
            </button>
          ))}
        </div>

        {/* Goals grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campos.map((campo) => {
            const Icon = campo.icon
            const data = campo[selectedPlazo]
            const isExpanded = expandedCampo === campo.id
            return (
              <div key={campo.id}
                onClick={() => setExpandedCampo(isExpanded ? null : campo.id)}
                className="p-6 rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(17,29,74,0.3)',
                  border: `1px solid ${isExpanded ? '#FFCF99' : '#3a3a44'}`,
                  gridColumn: isExpanded ? 'span 2' : 'span 1',
                }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: campo.color + '20' }}>
                      <Icon className="w-6 h-6" style={{ color: campo.color }} />
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: '#FFF8F0' }}>{campo.titulo}</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 transition-transform"
                    style={{ color: '#FFCF99', transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }} />
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#FFCF99' }}>Meta</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>{data.meta}</p>
                </div>

                {isExpanded && (
                  <div className="pt-4" style={{ borderTop: '1px solid #3a3a44' }}>
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#FFCF99' }}>Estrategia</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>{data.estrategia}</p>
                  </div>
                )}

                {!isExpanded && (
                  <p className="text-xs" style={{ color: 'rgba(255,248,240,0.4)' }}>Click para ver estrategia</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}