import { Reveal } from './ui/Reveal';

const hardSkills = [
  { category: 'Frontend', items: ['HTML5', 'CSS3 / SCSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Vue', 'Bootstrap'] },
  { category: 'Backend & IA', items: ['Node.js', 'Java', 'Spring Boot', 'JPA', 'Python', 'Flask', 'LangChain4j', 'IA Generativa'] },
  { category: 'Dados & Cloud', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Google Cloud', 'Docker'] },
  { category: 'Ferramentas', items: ['Git', 'GitHub', 'Figma', 'Trello', 'VS Code', 'NetBeans', 'Eclipse', 'Expo'] },
];

const softSkills = [
  'Comunicação e trabalho em equipe',
  'Proatividade e aprendizado contínuo',
  'Resolução de problemas',
  'Organização e gestão do tempo',
  'Resiliência e adaptabilidade',
  'Liderança de cerimônias Scrum',
];

const courses = [
  'Introdução ao MongoDB · MongoDB',
  'Google Cloud Foundations · Google Cloud',
  'Escola de Inovadores · Inova CPS',
  'Caminho do desenvolvedor MongoDB Python · MongoDB',
  'Perguntas práticas do desenvolvedor associado Python · MongoDB',
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal width="100%">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gray-500">04 · Competências</p>
              <h2 className="text-7xl font-bold text-white md:text-8xl">SKILLS</h2>
            </div>
            <span className="text-xs uppercase tracking-[0.24em] text-gray-500">Stack & ferramentas</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {hardSkills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.07} width="100%">
              <div>
                <h3 className="border-b border-white/10 pb-4 text-xl font-bold text-white">{group.category}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-400">
                      <span className="mr-3 h-1.5 w-1.5 bg-gray-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-2">
          <Reveal width="100%">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-gray-500">Habilidades interpessoais</p>
              <h3 className="text-5xl font-bold text-white">SOFT SKILLS</h3>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {softSkills.map((skill) => (
                  <div key={skill} className="border border-white/10 px-4 py-3 text-sm text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} width="100%">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-gray-500">Formação complementar</p>
              <h3 className="text-5xl font-bold text-white">CURSOS</h3>
              <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {courses.map((course) => (
                  <div key={course} className="py-4 text-sm leading-relaxed text-gray-300">
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
