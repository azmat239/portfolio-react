import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimony from './components/testimony/Testimony';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About/>
        <Experience />
        <Services/>
        <Portfolio/>
        <Testimony/>
        <Contact />
        <Footer/>
    </div>
  )
}

export default App;
