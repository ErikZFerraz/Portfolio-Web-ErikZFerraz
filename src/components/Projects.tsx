import { ArrowUpRightIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';

type Project = {
  id: number;
  title: string;
  period: string;
  category: string;
  description: string;
  contribution: string;
  tech: string[];
  link: string;
  media: { type: 'image' | 'video'; src: string };
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Reporte para o Técnico',
    period: '2022-2 · 1º semestre',
    category: 'Sistema Web · Fatec',
    description:
      'Plataforma para cadastro, acompanhamento e gerenciamento de ordens de serviço de hardware e software, criada para organizar o fluxo de atendimento técnico.',
    contribution:
      'Atuação na estrutura visual e funcional, páginas em HTML/CSS, interações em JavaScript e fluxo de reporte de equipamentos.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Python', 'Flask'],
    link: 'https://github.com/ErikZFerraz/API_MirageGroup',
    media: { type: 'video', src: '/projects/reporte-tecnico.mp4' },
  },
  {
    id: 2,
    title: 'Assistente Virtual para Documentos',
    period: '2023-2 · 2º semestre',
    category: 'Java Desktop · PLN',
    description:
      'Assistente capaz de ler arquivos PDF e TXT e responder perguntas contextualizadas, usando processamento de linguagem natural e indexação de conteúdo.',
    contribution:
      'Implementação da lógica em Java, integração do processamento de documentos, interface JavaFX, persistência em MySQL e testes unitários.',
    tech: ['Java', 'JavaFX', 'LangChain4j', 'MySQL', 'Hugging Face'],
    link: 'https://github.com/ErikZFerraz/Code-Wave-2-API',
    media: { type: 'image', src: '/projects/assistente-virtual.png' },
  },
  {
    id: 3,
    title: 'Dashboard de Vendas · Pro4Tech',
    period: '2024-1 · 3º semestre',
    category: 'Aplicação Web · Analytics',
    description:
      'Dashboard para centralizar vendas, importar planilhas, aplicar filtros, visualizar indicadores e automatizar cálculos de comissão.',
    contribution:
      'Desenvolvimento de funcionalidades em JavaScript, componentes em React, registro de usuários, responsividade e experiência do usuário.',
    tech: ['React', 'JavaScript', 'MySQL', 'SCSS', 'Figma'],
    link: 'https://github.com/Code-Lotus/api-3',
    media: { type: 'video', src: '/projects/pro4tech-dashboard.mp4' },
  },
  {
    id: 4,
    title: 'Integração Logística · JJM Log',
    period: '2024-2 · 4º semestre',
    category: 'Plataforma Web · Logística',
    description:
      'Sistema integrado para rotas, custos, entregas, cargas, solicitações internas e envio de documentos ao RH, centralizando processos logísticos.',
    contribution:
      'Construção da interface em React e TypeScript, participação no design em Figma e definição das funcionalidades centrais do produto.',
    tech: ['React', 'TypeScript', 'AWS', 'Figma', 'GitHub'],
    link: 'https://github.com/DriftOps/API-IV',
    media: { type: 'video', src: '/projects/jjm-log.mp4' },
  },
  {
    id: 5,
    title: 'FastRefund · GSW Software',
    period: '2025-1 · 5º semestre',
    category: 'Aplicativo Mobile · Finanças',
    description:
      'Aplicativo de gerenciamento de reembolsos corporativos com cadastro de despesas, comprovantes, alertas de limites e acompanhamento do status de aprovação.',
    contribution:
      'Atuação como Scrum Master, facilitação das cerimônias, organização das sprints e desenvolvimento frontend em React Native e TypeScript.',
    tech: ['React Native', 'TypeScript', 'Expo', 'MongoDB', 'MySQL', 'Figma'],
    link: 'https://github.com/DriftOps/API-V',
    media: { type: 'video', src: '/projects/fastrefund.mp4' },
  },
  {
    id: 6,
    title: 'NutriX · Xertica.ai',
    period: '2025-2 · 6º semestre',
    category: 'Plataforma Web · IA Generativa',
    description:
      'Plataforma de nutrição personalizada com agente conversacional de IA, acompanhamento de progresso e busca inteligente de academias e locais fit.',
    contribution:
      'Desenvolvimento do módulo de progresso, busca por locais próximos, design inicial no Figma e colaboração nas integrações entre frontend e backend.',
    tech: ['Vue', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Python', 'IA'],
    link: 'https://github.com/DriftOps/API-VI',
    media: { type: 'video', src: '/projects/nutrix.mp4' },
  },
];

function ProjectMedia({ project }: { project: Project }) {
  if (project.media.type === 'image') {
    return (
      <img
        src={project.media.src}
        alt={`Prévia do projeto ${project.title}`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
      />
    );
  }

  return (
    <video
      src={project.media.src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={`Demonstração do projeto ${project.title}`}
      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
    />
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal width="100%">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gray-500">03 · Portfólio</p>
              <h2 className="text-7xl font-bold text-white md:text-8xl">PROJETOS</h2>
            </div>
            <span className="text-xs uppercase tracking-[0.24em] text-gray-500">Projetos selecionados</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index * 0.06, 0.25)} width="100%">
              <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-zinc-950/60 transition duration-500 hover:border-white/30">
                <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-zinc-900">
                  <ProjectMedia project={project} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 border border-white/15 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-300 backdrop-blur">
                    {project.period}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <div className="mb-4 flex items-start justify-between gap-6">
                    <div>
                      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-500">{project.category}</span>
                      <h3 className="text-3xl font-bold leading-tight text-white">{project.title}</h3>
                    </div>
                    <span className="select-none text-4xl font-bold text-white/10">{String(project.id).padStart(2, '0')}</span>
                  </div>

                  <p className="text-sm font-light leading-relaxed text-gray-400 md:text-base">{project.description}</p>

                  <div className="mt-6 border-l border-white/15 pl-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Minha contribuição</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-300">{project.contribution}</p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-white transition hover:text-gray-300"
                  >
                    Ver repositório
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
