import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowUpRightIcon } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-16 pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.09),transparent_28%),linear-gradient(180deg,#090909_0%,#000_75%)]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />
      <img
        src="/erik-zanetti-ferraz.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-7rem] top-24 hidden h-[78vh] max-h-[760px] select-none object-contain opacity-[0.12] grayscale lg:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 text-xs uppercase tracking-[0.32em] text-gray-400 md:text-sm"
        >
          Desenvolvimento de software · Web · Mobile · IA
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            className="text-[22vw] font-bold leading-[0.76] tracking-tighter text-white sm:text-[18vw] lg:text-[13vw]"
          >
            ERIK
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.34 }}
            className="text-[22vw] font-bold leading-[0.82] tracking-tighter text-gray-300 sm:text-[18vw] lg:text-[13vw]"
          >
            FERRAZ
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xl font-light leading-relaxed text-gray-300 md:text-2xl">
              Desenvolvedor de software com experiência acadêmica e prática em aplicações web,
              mobile, bancos de dados e soluções com inteligência artificial.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-white bg-white px-5 py-3 text-xs uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white"
              >
                Ver projetos
                <ArrowDownIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/ErikZFerraz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white"
              >
                GitHub
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs uppercase tracking-[0.22em] text-gray-500">Erik Zanetti Ferraz</p>
            <p className="mt-2 text-sm text-gray-300">Análise e Desenvolvimento de Sistemas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
