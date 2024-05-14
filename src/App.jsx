import './assets/css/layout/back.css';
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/font-awesome.css';
import './assets/css/vendor/slick-theme.css';
import './assets/css/vendor/slick.css';
import './assets/css/app.css';
import './assets/js/vendor/bootstrap.min.js';
import './assets/js/vendor/jquery-3.6.3.min.js';
import './assets/js/vendor/jquery-appear.js';
import './assets/js/vendor/jquery-validator.js';
import './assets/js/vendor/slick.min.js';
import './assets/js/app.js';
import React from 'react';

function Navbar() {
  return (
    <header className="large-screens">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse justify-content-between">
            <a className="navbar-brand" href="/"><img alt="logo" src="assets/media/logo.png" /></a>
            <ul className="navbar-nav mainmenu">
              <li className="nav-item"><a className="nav-link" href="#services">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact me</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

function MobileNavbar() {
  return (
    <header className="small-screen">
      <div className="container">
        <div className="mobile-menu">
          <div>
            <a className="navbar-brand" href="/"><img alt="" src="assets/media/logo.png" /></a>
          </div>
          <div className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
        <nav className="mobile-navar d-xl-none">
          <ul>
            <li className="menu-item"><a href="#services">Services</a></li>
            <li className="menu-item"><a href="#skills">Skills</a></li>
            <li className="menu-item"><a href="#experience">Experience</a></li>
            <li className="menu-item"><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-block bg-gradient shadow br-30">
              <div className="text-block">
                <h2 className="mb-16">About Me</h2>
                <h5 className="dark-gray">As a dedicated software engineer, I possess a strong academic background and an insatiable thirst for learning and growth in the technology realm. My objective is to contribute to the development of robust software solutions while continuously expanding my expertise in programming.</h5>
              </div>
              <a href="#contact" className="cus-btn primary">Contact Me</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img-block bg-gradient shadow br-30 text-center">
              <img src="assets/media/banner/self-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="services p-40" id="services">
      <div className="container">
        <div className="heading mb-48">
          <h3 className="mb-32">Projects</h3>
          <h5>My projects</h5>
        </div>
        {/* Agrega tu contenido de proyectos aquí */}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills p-40" id="skills">
      <div className="container">
        <div className="heading mb-48">
          <h3 className="mb-32">Skills</h3>
          <h5>Empowering Expertise: My Skill Set in Focus.</h5>
        </div>
        {/* Agrega tu contenido de habilidades aquí */}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience p-40" id="experience">
      <div className="container">
        <div className="heading mb-48">
          <h3 className="mb-32">Testimonials</h3>
          <h5>“Testimonials from my top clients back up the quality of my best work.”</h5>
        </div>
        {/* Agrega tu contenido de experiencia aquí */}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact p-40" id="contact">
      <div className="container">
        <div className="heading mb-48">
          <h3 className="mb-32">Contact Me</h3>
        </div>
        {/* Agrega tu contenido de contacto aquí */}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container py-8">
        <div className="content">
          <h6>©2023 Infinity. All Rights Reserved.</h6>
          <ul className="social-icons unstyled">
            <li><a href="#"><img src="/src/assets/media/icons/Behance.png" alt="" /></a></li>
            <li><a href="#"><img src="/src/assets/media/icons/Dribbble.png" alt="" /></a></li>
            <li><a href="#"><img src="/src/assets/media/icons/Twitter.png" alt="" /></a></li>
            <li><a href="#"><img src="/src/assets/media/icons/Linkedin.png" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="bg-gray-100">
      <a href="#main-wrapper" id="backto-top" className="back-to-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <div id="main-wrapper" className="main-wrapper overflow-hidden">
        <Navbar />
        <MobileNavbar />
        <HeroBanner />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

