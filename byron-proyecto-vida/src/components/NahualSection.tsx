import { Users, Shield, Sparkles, Heart } from "lucide-react"

export function NahualSection() {
  return (
    <section id="nahual" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm mb-4"
            style={{ backgroundColor: 'rgba(146,20,12,0.2)', color: '#92140C', fontFamily: 'Orbitron, sans-serif' }}>
            09 // COSMOVISIÓN MAYA
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
            Mi <span style={{ color: '#FFCF99' }}>Nahual</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'rgba(255,248,240,0.6)' }}>
            El nahual es un símbolo de la cosmovisión maya que representa las características
            de las personas según su día de nacimiento
          </p>
        </div>

        {/* Card */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-16 h-16"
            style={{ borderTop: '2px solid #92140C', borderLeft: '2px solid #92140C' }} />
          <div className="absolute -bottom-4 -right-4 w-16 h-16"
            style={{ borderBottom: '2px solid #FFCF99', borderRight: '2px solid #FFCF99' }} />

          <div className="p-8 sm:p-12 rounded-3xl"
            style={{ background: 'linear-gradient(135deg, #111D4A, #1E1E24)', border: '1px solid #3a3a44' }}>

            {/* Nahual name */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-6xl sm:text-8xl font-black"
                  style={{ fontFamily: 'Orbitron, sans-serif', color: '#92140C' }}>1</span>
                <div className="text-left">
                  <span className="text-4xl sm:text-6xl font-black"
                    style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFCF99' }}>KAWOQ</span>
                  <p className="text-sm" style={{ color: 'rgba(255,248,240,0.5)' }}>Mi nahual maya</p>
                </div>
              </div>

              {/* Glyph placeholder */}
              <div className="w-40 h-40 mx-auto rounded-2xl flex items-center justify-center mt-6"
                style={{ backgroundColor: '#1E1E24', border: '2px dashed #3a3a44' }}>
                {/* REEMPLAZA CON IMAGEN DEL GLIFO:
                    <img src="/kawoq.png" alt="Glifo KAWOQ" className="w-full h-full object-contain p-4" /> */}
                <div className="text-center">
                  <Sparkles className="w-10 h-10 mx-auto mb-2" style={{ color: 'rgba(255,207,153,0.3)' }} />
                  <span className="text-xs" style={{ color: 'rgba(255,248,240,0.3)' }}>Glifo de KAWOQ</span>
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(30,30,36,0.5)', border: '1px solid #3a3a44' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(146,20,12,0.2)' }}>
                    <Users className="w-5 h-5" style={{ color: '#92140C' }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#FFF8F0' }}>Qué representa</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>
                  El nahual <span style={{ color: '#FFCF99' }}>KAWOQ</span> representa la familia,
                  la comunidad, la cooperación y la protección. Está asociado con las personas
                  que buscan mantener la armonía entre quienes los rodean, fomentando la unión
                  y el apoyo mutuo. También simboliza el cuidado hacia los demás y la importancia
                  de trabajar juntos para superar los problemas.
                </p>
              </div>

              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(30,30,36,0.5)', border: '1px solid #3a3a44' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,207,153,0.2)' }}>
                    <Heart className="w-5 h-5" style={{ color: '#FFCF99' }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#FFF8F0' }}>Características</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>
                  Las personas nacidas bajo este nahual suelen ser{' '}
                  <span style={{ color: '#FFCF99' }}>solidarias, responsables y protectoras</span>{' '}
                  con su familia y amigos. Tienden a valorar mucho la unidad familiar, la
                  colaboración y el bienestar de la comunidad. Además, suelen tener una capacidad
                  natural para apoyar a otros y mantener la paz en los grupos.
                </p>
              </div>
            </div>

            {/* Number meaning */}
            <div className="mt-8 p-6 rounded-2xl"
              style={{ background: 'linear-gradient(to right, rgba(146,20,12,0.1), rgba(255,207,153,0.1))', border: '1px solid #3a3a44' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#111D4A' }}>
                  <Shield className="w-5 h-5" style={{ color: '#FFF8F0' }} />
                </div>
                <h3 className="text-lg font-bold" style={{ color: '#FFF8F0' }}>El número 1</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>
                El número <span className="font-bold" style={{ color: '#92140C' }}>1</span> representa
                inicio, liderazgo y nuevas oportunidades, lo que indica que las personas con{' '}
                <span style={{ color: '#FFCF99' }}>1 KAWOQ</span> pueden tener la capacidad de
                iniciar proyectos, guiar a otros y promover la cooperación entre las personas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}