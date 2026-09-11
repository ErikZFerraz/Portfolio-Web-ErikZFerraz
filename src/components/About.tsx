import { Reveal } from './ui/Reveal';

export function About() {
  return (
    <section id="about" className="border-b border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-4">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gray-500">01 · Perfil</p>
            <h2 className="mb-8 text-7xl font-bold text-white md:text-8xl">SOBRE</h2>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <div className="relative aspect-square overflow-hidden border border-white/10 bg-zinc-950">
              <img
                src="/erik-zanetti-ferraz.png"
                alt="Erik Zanetti Ferraz"
                className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center md:col-span-8">
          <Reveal delay={0.15} width="100%">
            <h3 className="mb-8 max-w-4xl text-3xl font-light leading-tight text-white md:text-4xl">
              Minha trajetória em tecnologia começou ainda na infância, criando modificações,
              scripts e experimentos para jogos. Hoje, transformo esse interesse em soluções de software.
            </h3>
          </Reveal>

          <div className="space-y-6 text-base font-light leading-relaxed text-gray-400 md:text-lg">
            <Reveal delay={0.25} width="100%">
              <p>
                Desenvolvi minha formação em Análise e Desenvolvimento de Sistemas na Fatec Prof.
                Jessen Vidal, em São José dos Campos, participando de projetos semestrais com problemas
                reais de empresas e instituições. Ao longo desse percurso, atuei em frontend, backend,
                banco de dados, experiência do usuário e integração de sistemas.
              </p>
            </Reveal>
            <Reveal delay={0.35} width="100%">
              <p>
                Também adquiri experiência profissional em suporte de TI na Secretaria da Educação de
                Caçapava, realizando manutenção de equipamentos e atendimento técnico em escolas. Meu
                foco atual é continuar evoluindo em desenvolvimento de software, especialmente em backend,
                bancos de dados relacionais e aplicações modernas com IA.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <Reveal delay={0.45} width="100%">
              <div>
                <span className="block text-xs uppercase tracking-[0.22em] text-gray-500">Formação</span>
                <span className="mt-2 block text-lg text-white">ADS · Fatec</span>
              </div>
            </Reveal>
            <Reveal delay={0.52} width="100%">
              <div>
                <span className="block text-xs uppercase tracking-[0.22em] text-gray-500">Projetos</span>
                <span className="mt-2 block text-lg text-white">6 cases completos</span>
              </div>
            </Reveal>
            <Reveal delay={0.59} width="100%">
              <div>
                <span className="block text-xs uppercase tracking-[0.22em] text-gray-500">Foco</span>
                <span className="mt-2 block text-lg text-white">Software & Dados</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
