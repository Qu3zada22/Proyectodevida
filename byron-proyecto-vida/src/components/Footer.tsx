import { Shield, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4" style={{ borderTop: '1px solid #3a3a44' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#92140C' }}>
              <Shield className="w-6 h-6" style={{ color: '#FFF8F0' }} />
            </div>
            <span className="text-lg font-bold" style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
              BYRON<span style={{ color: '#FFCF99' }}>.DEV</span>
            </span>
          </div>

          <p className="text-sm max-w-md mb-6 italic" style={{ color: 'rgba(255,248,240,0.6)' }}>
            "No se trata de qué tan fuerte golpees, sino de qué tan fuerte puedes ser golpeado y seguir avanzando."
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm mb-6" style={{ color: 'rgba(255,248,240,0.5)' }}>
            <span>Byron David Andreé Carrillo Molina</span>
            <span className="hidden sm:inline">•</span>
            <span>APDE El Roble</span>
            <span className="hidden sm:inline">•</span>
            <span>5to A</span>
            <span className="hidden sm:inline">•</span>
            <span>2025</span>
          </div>

          <p className="text-xs flex items-center gap-1" style={{ color: 'rgba(255,248,240,0.3)' }}>
            Hecho con <Heart className="w-3 h-3" style={{ color: '#92140C' }} /> para el Proyecto de Vida
          </p>
        </div>
      </div>
    </footer>
  )
}