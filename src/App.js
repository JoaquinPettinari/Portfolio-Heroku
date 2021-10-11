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
import SectionContainer from './components/ui/SectionContainer';
// import { useEffect } from 'react';
import { fetchGetWeatherInfo } from "./actions/fetchGetWeather";
import { connect } from "react-redux";

function App(props) {
  // const { fetchGetWeatherInfo, data } = props;


  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       fetchGetWeatherInfo(position.coords.latitude, position.coords.longitude)        
  //     }
  //   )
  // }, [])


  return (
    <ScrollingProvider>
      <NavBar />      
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <SectionContainer>
          <About />
        </SectionContainer>
      </Section>
      <Section id="jobs">
        <SectionContainer greyBackground="true">
          <Jobs />
        </SectionContainer>
      </Section>
      <Section id="studys">
        <SectionContainer>
          <Studys />
        </SectionContainer>
      </Section>
      <Section id="proyects">
        <SectionContainer greyBackground="true">
          <Proyects />
        </SectionContainer>
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </ScrollingProvider>
  );
}

const mapStateToProps = state => ({
  data: state.wheatherReducer
});

const mapDispatchToProps = {
  fetchGetWeatherInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
