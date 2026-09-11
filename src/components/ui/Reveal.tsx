import { useEffect, useRef, type ReactNode } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
}

export function Reveal({ children, width = 'fit-content', delay = 0.18 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      void controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 48 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
