import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { Nav } from '../components/Nav';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
