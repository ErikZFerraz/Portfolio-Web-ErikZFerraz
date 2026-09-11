import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

const links = [
  { name: 'Sobre', href: '#about' },
  { name: 'Trajetória', href: '#experience' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          aria-label="Voltar ao início"
          className="text-3xl font-bold tracking-tighter transition-colors hover:text-gray-300"
        >
          EZF.
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="rounded-sm border border-white/10 p-2 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-black md:hidden"
          >
            <div className="flex flex-col gap-5 p-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
