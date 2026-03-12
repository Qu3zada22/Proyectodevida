import { ChevronDown, Gamepad2, Dumbbell, Bot } from "lucide-react"

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("logotipo")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="inicio" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(146,20,12,0.2)' }} />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(17,29,74,0.4)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ backgroundColor: 'rgba(255,207,153,0.05)' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(to right, #3a3a44 1px, transparent 1px), linear-gradient(to bottom, #3a3a44 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(17,29,74,0.5)', border: '1px solid #3a3a44' }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#92140C' }} />
          <span className="text-sm font-medium" style={{ color: '#FFCF99' }}>APDE El Roble • 5to A • 2025</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-black mb-4" style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
          BYRON
          <span className="block" style={{ color: '#92140C' }}>CARRILLO</span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium mb-6" style={{ color: '#FFCF99' }}>
          Proyecto de Vida
        </p>

        <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>
          Un viaje hacia el futuro, construyendo sueños con determinación,
          constancia y la fortaleza de seguir adelante sin importar los golpes de la vida.
        </p>

        {/* Interests */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: <Gamepad2 className="w-5 h-5" style={{ color: '#FFCF99' }} />, label: "Videojuegos" },
            { icon: <Dumbbell className="w-5 h-5" style={{ color: '#92140C' }} />, label: "Boxeo & Gym" },
            { icon: <Bot className="w-5 h-5" style={{ color: '#FFCF99' }} />, label: "Tecnología" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: '#111D4A', border: '1px solid #3a3a44' }}>
              {item.icon}
              <span className="text-sm" style={{ color: '#FFF8F0' }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Photo placeholder */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full flex items-center justify-center mb-8 overflow-hidden"
          style={{ border: '4px solid #92140C', backgroundColor: '#111D4A' }}>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#3a3a44' }}>
              <span className="text-3xl" style={{ color: 'rgba(255,248,240,0.5)' }}>BC</span>
            </div>
            <span className="text-xs" style={{ color: 'rgba(255,248,240,0.5)' }}>Tu foto aquí</span>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="animate-bounce p-2 rounded-full transition-colors"
          style={{ backgroundColor: 'rgba(146,20,12,0.2)', border: '1px solid rgba(146,20,12,0.5)' }}
        >
          <ChevronDown className="w-6 h-6" style={{ color: '#FFCF99' }} />
        </button>
      </div>
    </section>
  )
}