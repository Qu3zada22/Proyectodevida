import { Shield, Palette, TreeDeciduous } from "lucide-react"

export function LogotipoSection() {
  return (
    <section id="logotipo" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm mb-4"
            style={{ backgroundColor: 'rgba(146,20,12,0.2)', color: '#92140C', fontFamily: 'Orbitron, sans-serif' }}>
            01 // IDENTIDAD
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
            Mi <span style={{ color: '#FFCF99' }}>Logotipo</span>
          </h2>
          <p style={{ color: 'rgba(255,248,240,0.6)' }}>
            Un símbolo que representa quién soy y los valores que me definen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Logo display */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl p-8 flex items-center justify-center"
              style={{ backgroundColor: '#111D4A', border: '1px solid #3a3a44' }}>
              <img
                src="/logotipo.jpeg"
                alt="Mi logotipo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Decorative corners */}
            <div className="absolute -top-4 -right-4 w-8 h-8"
              style={{ borderTop: '2px solid #92140C', borderRight: '2px solid #92140C' }} />
            <div className="absolute -bottom-4 -left-4 w-8 h-8"
              style={{ borderBottom: '2px solid #FFCF99', borderLeft: '2px solid #FFCF99' }} />
          </div>

          {/* Explanations */}
          <div className="space-y-6">
            {[
              {
                icon: <TreeDeciduous className="w-6 h-6" style={{ color: '#4ade80' }} />,
                bg: 'rgba(20,83,45,0.3)',
                title: 'Fondo: La Pradera',
                text: 'Representa una pradera verde, un espacio abierto que simboliza tranquilidad, crecimiento y equilibrio. Refleja un ambiente natural y armonioso, representando el deseo de crecer como persona y ayudar a otros.'
              },
              {
                icon: <Palette className="w-6 h-6" style={{ color: '#22c55e' }} />,
                bg: 'rgba(21,128,61,0.3)',
                title: 'Color: Verde',
                text: 'Representa la amabilidad, la empatía y la disposición de estar para los demás. Simboliza esperanza y crecimiento personal, recordando que siempre se puede mejorar y seguir desarrollando cualidades como persona.'
              },
              {
                icon: <Shield className="w-6 h-6" style={{ color: '#92140C' }} />,
                bg: 'rgba(146,20,12,0.3)',
                title: 'Símbolo: El Escudo',
                text: 'Representa fortaleza, protección y valores firmes. Simboliza la integridad y el compromiso de mantener los principios incluso en momentos difíciles. Refleja la idea de ser alguien en quien los demás puedan confiar.'
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl transition-all"
                style={{ backgroundColor: 'rgba(17,29,74,0.5)', border: '1px solid #3a3a44' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.bg }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#FFF8F0' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}