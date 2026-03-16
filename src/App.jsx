import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
return (
  <div>
    <Navbar />
    <section id="hero"> 
      <Hero />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="certs">
      <Certifications />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer/>
  </div>
);
}

export default App;