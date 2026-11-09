import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Lewati ke konten
      </a>
      <Header />
      <main id="konten">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
