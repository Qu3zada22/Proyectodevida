import { Users, Heart, Calendar, MapPin, GraduationCap, Gamepad2, Dumbbell, ChefHat } from "lucide-react"

export function AutobiografiaSection() {
  return (
    <section id="autobiografia" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm mb-4"
            style={{ backgroundColor: 'rgba(146,20,12,0.2)', color: '#92140C', fontFamily: 'Orbitron, sans-serif' }}>
            03 // MI HISTORIA
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#FFF8F0' }}>
            Auto<span style={{ color: '#FFCF99' }}>biografía</span>
          </h2>
          <p style={{ color: 'rgba(255,248,240,0.6)' }}>Byron David Andreé Carrillo Molina</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left — photo & quick info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Photo */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden"
                style={{ border: '1px solid #3a3a44' }}>
                <img
                  src="/foto-personal.jpeg"
                  alt="Byron Carrillo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quick info */}
              <div className="p-4 rounded-xl"
                style={{ backgroundColor: 'rgba(17,29,74,0.5)', border: '1px solid #3a3a44' }}>
                <div className="space-y-3">
                  {[
                    { icon: <Calendar className="w-4 h-4" style={{ color: '#FFCF99' }} />, text: '11 de marzo de 2009' },
                    { icon: <MapPin className="w-4 h-4" style={{ color: '#92140C' }} />, text: 'Guatemala' },
                    { icon: <GraduationCap className="w-4 h-4" style={{ color: '#FFCF99' }} />, text: 'APDE El Roble - 5to A' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm"
                      style={{ color: 'rgba(255,248,240,0.7)' }}>
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — story */}
          <div className="lg:col-span-2 space-y-8">

            {/* Familia */}
            <div className="p-6 rounded-2xl"
              style={{ backgroundColor: 'rgba(17,29,74,0.3)', border: '1px solid #3a3a44' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(146,20,12,0.2)' }}>
                  <Users className="w-5 h-5" style={{ color: '#92140C' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#FFF8F0' }}>Mi Familia</h3>
              </div>
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,248,240,0.7)' }}>
                Mi familia está formada por mis dos padres,{' '}
                <span style={{ color: '#FFCF99' }}>Byron y Nancy</span>, quienes ambos son abogados
                y han sido un ejemplo importante para mí en cuanto a responsabilidad, dedicación y
                compromiso con su trabajo. También tengo tres hermanas:{' '}
                <span style={{ color: '#FFCF99' }}>Anggie, Isabel y Ariana</span>, con quienes he
                compartido gran parte de mi vida.
              </p>
              <p className="leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>
                Además de mi familia cercana, también tengo una relación muy fuerte con mis tíos,
                mis abuelos y mis primos. En especial, tengo un primo con quien me llevo muy bien
                y que considero prácticamente como un hermano.
              </p>

              {/* Foto familiar */}
              <div className="mt-4 rounded-xl overflow-hidden"
                style={{ border: '1px solid #3a3a44' }}>
                <div className="aspect-video">
                  <img
                    src="/foto-familia.jpeg"
                    alt="Familia Carrillo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Infancia */}
            <div className="p-6 rounded-2xl"
              style={{ backgroundColor: 'rgba(17,29,74,0.3)', border: '1px solid #3a3a44' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,207,153,0.2)' }}>
                  <Heart className="w-5 h-5" style={{ color: '#FFCF99' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#FFF8F0' }}>Mi Infancia</h3>
              </div>
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,248,240,0.7)' }}>
                Cuando era niño era una persona muy energética. Me gustaba moverme, hacer cosas y
                mantenerme activo. No era una energía molesta, sino más bien una curiosidad constante
                por realizar actividades y explorar lo que me rodeaba.
              </p>
              <p className="leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>
                Una de las actividades que más me gustaba practicar era el{' '}
                <span style={{ color: '#FFCF99' }}>karate</span>, ya que me permitía canalizar mi
                energía y aprender disciplina. Desde pequeño también me ha gustado ayudar a los
                demás y estar presente cuando alguien necesita apoyo.
              </p>
            </div>

            {/* Momento que me marcó */}
            <div className="p-6 rounded-2xl" style={{
              background: 'linear-gradient(135deg, rgba(146,20,12,0.2), rgba(17,29,74,0.3))',
              border: '1px solid rgba(146,20,12,0.3)'
            }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FFF8F0' }}>Momento que me Marcó</h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255,248,240,0.7)' }}>
                Uno de los momentos que más me ha marcado fue cuando falleció el abuelito de mi
                primo. Aunque no era mi abuelo directamente, era una persona muy cercana a nuestra
                familia. Fue la primera vez que experimenté la muerte de forma tan cercana, y eso
                me hizo reflexionar mucho sobre la vida. Ese momento cambió mi forma de ver las
                cosas, ya que me hizo comprender que{' '}
                <span style={{ color: '#FFCF99' }}>
                  la vida es limitada y que es importante aprovechar el tiempo con las personas que queremos
                </span>.
              </p>
            </div>

            {/* Actualmente */}
            <div className="p-6 rounded-2xl"
              style={{ backgroundColor: 'rgba(17,29,74,0.3)', border: '1px solid #3a3a44' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FFF8F0' }}>Actualmente</h3>
              <p className="leading-relaxed mb-6" style={{ color: 'rgba(255,248,240,0.7)' }}>
                Me considero una persona algo reservada, especialmente con personas nuevas, aunque
                cuando tomo confianza puedo ser alguien alegre y conversador. Físicamente tengo
                una complexión delgada, piel clara y cabello negro.
              </p>
              <h4 className="font-semibold mb-4" style={{ color: '#FFCF99' }}>Lo que me gusta hacer:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: <Gamepad2 className="w-6 h-6" style={{ color: '#FFCF99' }} />, label: 'Videojuegos' },
                  { icon: <Dumbbell className="w-6 h-6" style={{ color: '#92140C' }} />, label: 'Boxeo & Gym' },
                  { icon: <ChefHat className="w-6 h-6" style={{ color: '#FFCF99' }} />, label: 'Cocinar' },
                  { icon: <Heart className="w-6 h-6" style={{ color: '#92140C' }} />, label: 'Tiempo de calidad' },
                ].map((hobby) => (
                  <div key={hobby.label} className="p-3 rounded-xl text-center"
                    style={{ backgroundColor: '#1E1E24', border: '1px solid #3a3a44' }}>
                    <div className="flex justify-center mb-2">{hobby.icon}</div>
                    <span className="text-sm" style={{ color: 'rgba(255,248,240,0.7)' }}>{hobby.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}