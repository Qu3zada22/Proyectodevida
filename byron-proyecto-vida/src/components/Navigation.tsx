import { useState, useEffect } from "react"
import { Menu, X, Shield } from "lucide-react"

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "logotipo", label: "Logotipo" },
  { id: "frase", label: "Mi Frase" },
  { id: "autobiografia", label: "Autobiografía" },
  { id: "vision-mision", label: "Visión & Misión" },
  { id: "principios", label: "Principios" },
  { id: "valores", label: "Valores" },
  { id: "metas", label: "Metas" },
  { id: "smart", label: "Objetivo SMART" },
  { id: "nahual", label: "Nahual" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(30,30,36,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(146,20,12,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollToSection("inicio")} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: '#92140C' }}>
              <Shield className="w-6 h-6" style={{ color: '#FFF8F0' }} />
            </div>
            <span className="text-lg font-bold hidden sm:block" style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
              BYRON<span style={{ color: '#FFCF99' }}>.DEV</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-200"
                style={{
                  color: activeSection === item.id ? '#FFCF99' : 'rgba(255,248,240,0.7)',
                  backgroundColor: activeSection === item.id ? '#111D4A' : 'transparent',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md transition-colors"
            style={{ color: '#FFF8F0' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className="lg:hidden transition-all duration-300 overflow-hidden"
        style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-4 py-2" style={{ backgroundColor: 'rgba(30,30,36,0.95)', borderTop: '1px solid #3a3a44' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-3 text-sm font-medium rounded-md my-1 transition-all"
              style={{
                color: activeSection === item.id ? '#FFCF99' : 'rgba(255,248,240,0.7)',
                backgroundColor: activeSection === item.id ? '#111D4A' : 'transparent',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}