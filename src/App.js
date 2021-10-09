import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import { ScrollingProvider, Section } from 'react-scroll-section'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Jobs from './components/Jobs/Jobs';
import Proyects from './components/Proyects/Proyects';
import Studys from './components/Studys/Studys';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <ScrollingProvider>
      {console.log(process.env.REACT_APP_SALUDOS)}
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
        <Studys />
      </Section>
      <Section id="proyects">
        <Proyects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </ScrollingProvider>
  );
}

export default App;
