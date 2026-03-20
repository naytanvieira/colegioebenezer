import EventosSection from "@/components/landing/Events";

export default function MeuBharuLandingPage() {
  const menuItems = [
    {
      name: 'Moqueca Especial da Casa',
      description: 'Peixe fresco, camarões e temperos marcantes servidos com arroz e pirão.',
      price: 'R$ 69,90',
    },
    {
      name: 'Risoto de Camarão',
      description: 'Cremoso, sofisticado e finalizado com ervas frescas e toque cítrico.',
      price: 'R$ 58,90',
    },
    {
      name: 'Burger Orla Premium',
      description: 'Pão artesanal, carne suculenta, queijo especial e molho exclusivo.',
      price: 'R$ 39,90',
    },
  ];

  const highlights = [
    'Ambiente moderno e acolhedor',
    'Pratos autorais com identidade própria',
    'Experiência ideal para família, casal ou amigos',
    'Atendimento ágil e cardápio selecionado',
  ];

  const categorys = [
    {
      title: 'Entradas',
      url: '/comida_buteco.jpg',
      description: 'No Meu Bhar Orla, toda quarta tem Rodízio + Modão por apenas R$ 49,90 por pessoa.'
    },
    {
      title: 'Pratos Principais',
      url: '/principal.jpg',
      description: 'Não tente agradar todo mundo, você não é porção de batata frita. 😂'
    },
    {
      title: 'Uma nova Experiência no seu Paladar',
      url: '/principal2.jpg',
      description: 'Saboreie a vida em porções generosas de felicidade!'
    },
    {
      title: 'Drinks',
      url: '/drink.jpg',
      description: 'Já conhece o nosso Moça Tropical? 🍹🌴'
    },

  ]

  return (
    <main className="">
      <section className="relative overflow-hidden  text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-16 -left-10 h-52 w-52 rounded-full bg-white blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#7a4b16] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-white blur-2xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
              Sabor, estilo e experiência à beira da orla
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              <span className="text-[#fff0c8]">Meu Bhar Orla</span>
            </h1>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/espaco.jpg"
                alt="Ambiente do restaurante Meu Bharu Orla"
                className="w-full h-[260px] md:h-[340px] object-cover"
              />

              {/* overlay elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />


              {/* texto opcional em cima da imagem */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">Ambiente moderno</p>
                <h3 className="text-lg font-bold">Experiência única à beira da orla</h3>
              </div>
            </div>
            <div className="rounded-2xl mt-3 border border-white/20 bg-white/10 p-4 text-sm backdrop-blur">
              <p className=" max-w-xl text-base leading-7 text-white/90 md:text-lg">
                Vir para o Bar Orla é sempre a melhor escolha.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-[#b87400] shadow-lg transition hover:-translate-y-0.5">
                Reservar mesa
              </button>
              <button className="rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Ver cardápio
              </button>
            </div>



            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {['Cozinha autoral', 'Drinks especiais', 'Vista incrível', 'Delivery'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">

            <div className="mx-auto max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#fff8ec] p-5 text-[#1f1a17]">
                <div className="rounded-[1.25rem] bg-[#f7ead1] p-6 shadow-inner">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#8b5a12]">Destaque da semana</p>
                      <h2 className="mt-1 text-2xl font-bold">Menu Exclusivo</h2>
                    </div>
                    <div className="rounded-2xl bg-[#d89411] px-4 py-2 text-sm font-semibold text-white">
                      Novo
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {menuItems.map((item) => (
                      <div key={item.name} className="rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="mt-1 text-sm leading-6 text-[#5c5145]">{item.description}</p>
                          </div>
                          <span className="whitespace-nowrap rounded-xl bg-[#fff3d6] px-3 py-1 text-sm font-bold text-[#a56600]">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventosSection />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-black/5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87400]">
              Sobre o restaurante
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Uma experiência gastronômica com identidade forte e visual inesquecível
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f564e]">
              O melhor drink, a cerveja mais gelada, vinho de produção própria e porções e pratos que dão água na boca.
              E aí, o que você está esperando para conhecer o nosso ambiente?
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-[#f2dfb6] bg-[#fff4de] p-6">
                <p className="text-lg font-semibold text-[#7a4b16]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <div className="rounded-[2rem] bg-[#1f1a17] p-8 text-white md:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7c861]">
                Cardápio em destaque
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Pratos que despertam o desejo antes mesmo da primeira garfada
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
                Podemos trabalhar com imagens impactantes, descrições curtas e botões de ação
                para delivery, reserva e WhatsApp. Tudo pensado para transformar visitas em pedidos.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {categorys.map((category, index) => (
                <div
                  key={index}
                  className="rounded-[1.5rem] bg-white/5 p-6 ring-1 ring-white/10"
                >
                  <div className="mb-4 h-36 overflow-hidden rounded-[1.25rem] shadow-2xl">
                    <img
                      src={category.url}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold">{category.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="rounded-[2rem] bg-[#fff1cf] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a56600]">
                Reserva rápida
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#241d18] md:text-4xl">
                Garanta sua mesa agora e viva essa experiência 🍻
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#5c5145]">
                A landing page pode finalizar com botão para WhatsApp, mapa, horário de funcionamento,
                endereço e formulário simples de reserva. Tudo com um visual consistente com a marca.
              </p>
            </div>

            <button className="rounded-2xl bg-[#d89411] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5">
              Fazer reserva agora
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
