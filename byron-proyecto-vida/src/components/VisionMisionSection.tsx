import { Eye, Target, Brain, Users, GraduationCap } from "lucide-react"

export function VisionMisionSection() {
  return (
    <section id="vision-mision" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm mb-4"
            style={{ backgroundColor: 'rgba(146,20,12,0.2)', color: '#92140C', fontFamily: 'Orbitron, sans-serif' }}>
            04 // DIRECCIÓN
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
            Visión <span style={{ color: '#FFCF99' }}>&</span> Misión
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Visión */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl blur-xl transition-all"
              style={{ background: 'linear-gradient(135deg, rgba(146,20,12,0.2), transparent)' }} />
            <div className="relative h-full p-8 rounded-2xl transition-colors"
              style={{ backgroundColor: 'rgba(17,29,74,0.5)', border: '1px solid #3a3a44' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#92140C' }}>
                  <Eye className="w-7 h-7" style={{ color: '#FFF8F0' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-black" style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>Visión</h3>
                  <p className="text-sm" style={{ color: '#FFCF99' }}>Lo que quiero lograr</p>
                </div>
              </div>
              <div className="space-y-4 leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>
                <p>En el futuro me veo siguiendo un camino diferente al que había llevado durante
                gran parte de mi vida. Mi objetivo ahora es <span style={{ color: '#FFCF99' }}>crecer
                como persona</span>, esforzarme más en lo que hago y comenzar a construir un futuro
                del que me pueda sentir orgulloso.</p>
                <p>Aspiro a estudiar una carrera que realmente me apasione, dedicarle el esfuerzo
                necesario para comprenderla profundamente y poder ejercerla con seguridad. También
                deseo tener un trabajo que me permita vivir bien económicamente y al mismo tiempo
                disfrutar lo que hago.</p>
                <p>Quiero ser alguien con más conocimientos, con mayor disciplina y con una mentalidad
                fuerte frente a los desafíos. Quiero que las personas me reconozcan como{' '}
                <span style={{ color: '#FFCF99' }}>alguien que no se rinde fácilmente</span> y que
                continúa avanzando a pesar de los golpes que da la vida.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Crecimiento', 'Disciplina', 'Estabilidad'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs"
                    style={{ backgroundColor: 'rgba(146,20,12,0.2)', color: '#92140C' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Misión */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl blur-xl transition-all"
              style={{ background: 'linear-gradient(135deg, rgba(255,207,153,0.2), transparent)' }} />
            <div className="relative h-full p-8 rounded-2xl transition-colors"
              style={{ backgroundColor: 'rgba(17,29,74,0.5)', border: '1px solid #3a3a44' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#FFCF99' }}>
                  <Target className="w-7 h-7" style={{ color: '#1E1E24' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-black" style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>Misión</h3>
                  <p className="text-sm" style={{ color: '#FFCF99' }}>Quién soy y qué hago</p>
                </div>
              </div>
              <div className="space-y-4 leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>
                <p>Soy una persona que busca <span style={{ color: '#FFCF99' }}>mejorar constantemente</span> y
                construir un futuro basado en el conocimiento, el esfuerzo y la disciplina. Desde pequeño
                he tenido curiosidad por aprender cosas nuevas y por entender cómo funcionan las cosas.</p>
                <p>Mi objetivo es desarrollar mis capacidades intelectuales y personales para poder
                convertirme en un profesional preparado. Aspiro a estudiar{' '}
                <span style={{ color: '#FFCF99' }}>Ingeniería en Sistemas en la Universidad del Valle
                de Guatemala</span>, una meta que representa para mí un desafío académico importante.</p>
                <p>Mi misión es aprovechar todas las enseñanzas de mi familia para construir una vida
                en la que pueda alcanzar éxito académico, estabilidad económica y libertad. Quiero
                mantener valores como la perseverancia, la responsabilidad y el respeto.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Ing. en Sistemas', 'UVG', 'Tecnología'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs"
                    style={{ backgroundColor: 'rgba(255,207,153,0.2)', color: '#FFCF99' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {[
            { icon: <Brain className="w-6 h-6" style={{ color: '#FFCF99' }} />, title: 'Conocimiento', desc: 'Aprender y desarrollar habilidades en tecnología' },
            { icon: <Users className="w-6 h-6" style={{ color: '#92140C' }} />, title: 'Familia', desc: 'Mantener y valorar las relaciones importantes' },
            { icon: <GraduationCap className="w-6 h-6" style={{ color: '#FFCF99' }} />, title: 'Educación', desc: 'Estudiar Ingeniería en Sistemas en la UVG' },
          ].map((pillar) => (
            <div key={pillar.title} className="p-6 rounded-xl text-center transition-colors"
              style={{ backgroundColor: '#1E1E24', border: '1px solid #3a3a44' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#111D4A' }}>
                {pillar.icon}
              </div>
              <h4 className="font-bold mb-2" style={{ color: '#FFF8F0' }}>{pillar.title}</h4>
              <p className="text-sm" style={{ color: 'rgba(255,248,240,0.6)' }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}