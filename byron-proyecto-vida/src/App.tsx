import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/HeroSection"
import { LogotipoSection } from "./components/LogotipoSection"
import { FraseSection } from "./components/FraseSection"
import { AutobiografiaSection } from "./components/AutobiografiaSection"
import { VisionMisionSection } from "./components/VisionMisionSection"
import { PrincipiosSection } from "./components/PrincipiosSection"
import { ValoresSection } from "./components/ValoresSection"
import { MetasSection } from "./components/MetasSection"
import { SmartSection } from "./components/SmartSection"
import { NahualSection } from "./components/NahualSection"
import { Footer } from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#1E1E24' }}>
      <Navigation />
      <HeroSection />
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #3a3a44, transparent)' }} />
      <LogotipoSection />
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #92140C4D, transparent)' }} />
      <FraseSection />
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #3a3a44, transparent)' }} />
      <AutobiografiaSection />
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #FFCF994D, transparent)' }} />
      <VisionMisionSection />
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #3a3a44, transparent)' }} />
      <PrincipiosSection />
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #92140C4D, transparent)' }} />
      <ValoresSection />
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #3a3a44, transparent)' }} />
      <MetasSection />
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #FFCF994D, transparent)' }} />
      <SmartSection />
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #3a3a44, transparent)' }} />
      <NahualSection />
      <Footer />
    </main>
  )
}

export default App