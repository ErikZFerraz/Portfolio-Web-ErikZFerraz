import { Reveal } from './ui/Reveal';

const items = [
  {
    number: '01',
    title: 'Secretaria da Educação de Caçapava',
    subtitle: 'Estágio · Suporte de TI',
    description:
      'Manutenção e conserto de equipamentos, visitas técnicas às escolas e atendimento de problemas específicos de tecnologia, com contato direto com usuários e demandas de suporte.',
  },
  {
    number: '02',
    title: 'Fatec Prof. Jessen Vidal',
    subtitle: 'Análise e Desenvolvimento de Sistemas',
    description:
      'Formação orientada a projetos, com desenvolvimento de soluções para instituições e empresas parceiras, trabalhando em equipe com métodos ágeis, versionamento e entregas semestrais.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal width="100%">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gray-500">02 · Experiência</p>
              <h2 className="text-7xl font-bold text-white md:text-8xl">TRAJETÓRIA</h2>
            </div>
            <span className="text-xs uppercase tracking-[0.24em] text-gray-500">Formação + prática</span>
          </div>
        </Reveal>

        <div>
          {items.map((item, index) => (
            <div key={item.number} className="group border-t border-white/10 py-10 transition hover:bg-white/[0.025] md:py-12">
              <div className="grid grid-cols-1 gap-7 md:grid-cols-12 md:items-start">
                <div className="md:col-span-2">
                  <Reveal delay={index * 0.08}>
                    <span className="text-5xl font-bold text-zinc-800 transition-colors group-hover:text-white md:text-6xl">
                      {item.number}
                    </span>
                  </Reveal>
                </div>
                <div className="md:col-span-5">
                  <Reveal delay={0.08 + index * 0.08} width="100%">
                    <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-lg text-gray-400">{item.subtitle}</p>
                  </Reveal>
                </div>
                <div className="md:col-span-5">
                  <Reveal delay={0.16 + index * 0.08} width="100%">
                    <p className="max-w-xl text-sm font-light leading-relaxed text-gray-400 md:text-base">
                      {item.description}
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
