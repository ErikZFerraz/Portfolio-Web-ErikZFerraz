import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function Contact() {
  const githubUrl = 'https://github.com/ErikZFerraz';
  const linkedinUrl = 'https://www.linkedin.com/in/erik-zanetti-ferraz-09895a180/';

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal width="100%">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-gray-500">05 · Contato</p>
          <h2 className="text-[14vw] font-bold leading-[0.8] tracking-tighter text-white md:text-[11vw]">
            VAMOS CONVERSAR
          </h2>
        </Reveal>

        <Reveal width="100%" delay={0.12}>
          <p className="mx-auto mt-10 max-w-2xl text-lg font-light leading-relaxed text-gray-400 md:text-xl">
            Conheça meu código, minha trajetória e os projetos que desenvolvi. Para contato profissional,
            você pode falar comigo pelo LinkedIn.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.22}>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            Entrar em contato
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="mt-20 flex justify-center gap-10 border-t border-white/10 pt-10">
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-500 transition hover:text-white">
            <GithubIcon className="h-8 w-8" />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-500 transition hover:text-white">
            <LinkedinIcon className="h-8 w-8" />
          </a>
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-gray-600">
          © 2026 Erik Zanetti Ferraz · Portfólio profissional
        </p>
      </div>
    </section>
  );
}
