import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import { ScrollingProvider, Section } from 'react-scroll-section'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Jobs from './components/Jobs/Jobs';
import Proyects from './components/Proyects/Proyects';

function App() {

  return (
    <ScrollingProvider>
      <NavBar />
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />    
      </Section>
      <Section id="jobs">
        <Jobs />
      </Section>
      <Section id="studys">
        <Proyects />
      </Section>
      <Section id="proyects">
        <Proyects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </ScrollingProvider>
  );
}

export default App;
