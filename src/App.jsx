import React from 'react';
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

import './App.css'; // Asegúrate de importar tus estilos CSS aquí


function Navbar() {
  return (
    <header className="large-screens navbar-container mb-4"> {/* Agrega un margen inferior */}
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-blue">
          <a className="navbar-brand" href="/"><img alt="" src="src/assets/media/icons/c-removebg-preview.png" className="logo-img" /></a>
          <div className="navbar-collapse justify-content-end">
            <ul className="navbar-nav mainmenu">
              <li className="nav-item"><a className="nav-link" href="#services">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#experience">Testimonials</a></li>
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
          <a className="navbar-brand" href="/"><img alt="" src="assets/media/icons/logo_trial.png" /></a>
          <div className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
        <nav className="mobile-navar d-xl-none">
          <ul>
            <li className="menu-item"><a href="#services">Services</a></li>
            <li className="menu-item"><a href="#skills">Skills</a></li>
            <li className="menu-item"><a href="#experience">Testimonials</a></li>
            <li className="menu-item"><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Header() {
  return (
    <header id="headermain" className="mb-4"> {/* Agrega un margen inferior */}
      <div className="container">
        <div className="row headerwrap">
          <div className="col-lg-6 d-flex align-items-center">
            {/* Texto a la izquierda */}
            <div className="headerwrap__text">
              <h1>Tu texto aquí</h1>
              <p>Opcional: descripción o cualquier otro texto</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            {/* Logo */}
            <div className="headerwrap__logo rounded-circle overflow-hidden" style={{ padding: '100px' }}> {/* Añade padding personalizable */}
              <img src="src\assets\media\icons\giphy.gif" alt="logo" className="img-fluid rounded-circle" style={{ width: '300px', height: '300px' }} /> {/* Agrega bordes redondos */}
            </div>
          </div>
          {/* Icono de navegación para dispositivos móviles */}
          <div className="col-lg-2 d-block d-lg-none">
            <div className="navicon">
              <div className="navicon__bar"></div>
            </div>
          </div>
          {/* Fin del icono de navegación */}
        </div>
      </div>
    </header>
  );
}


function HeroBanner() {
  return (
    <section className="hero-banner bg-blue-transparent mb-4"> {/* Agrega un margen inferior aquí */}
      <div className="heading mb-48"> {/* Agrega un margen superior */}
        <div className="row">
          <div className="col-lg-12">
            <div className="content-block bg-gradient shadow br-30 p-4 mb-48"> {/* Agrega un padding y un margen inferior */}
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h2 className="mb-16">David Inguilán</h2>
                  <h5 className="dark-gray mb-16">"Desarrollador de software comprometido con la excelencia y la innovación."</h5>
                </div>
                <div className="col-lg-6">
                  <h2 className="mb-16">About Me</h2>
                  <h5 className="dark-gray mb-4">As a dedicated software engineer, I possess a strong academic background and an insatiable thirst for learning and growth in the technology realm. My objective is to contribute to the development of robust software solutions while continuously expanding my expertise in programming.</h5>
                  <a href="#contact" className="cus-btn primary">Contact Me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="services p-40" id="services" style={{ padding: '0.1rem' }}>
      <div className="container">
        <div className="heading mb-48">
          <h3 className="mb-32">Projects</h3>
          <h5>My projects</h5>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              <h4 className="mb-16">Secure Password Generator</h4>
              <p>Description: Program that generates secure passwords randomly and displays them to the user. Length and character types can be set.
Technologies: Python with CLI or GUI using libraries such as Tkinter or PyQt.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              <h4 className="mb-16">Azure database-driven coffee sales website</h4>
              <p>Description: A website to buy coffee with Azure cloud database.
Technologies: HTML, CSS, JavaScript, Node.js or ASP.NET Core, SQL Database or Cosmos DB.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              <h4 className="mb-16">Movie API using Django REST Framework</h4>
              <p>Description: A movie API built with Django REST Framework.
Technologies: Django REST Framework, Django ORM.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills p-40" id="skills" style={{ padding: '0.1rem' }}>
      <div className="container">
        <div className="heading mb-48">
          <h3 className="mb-32">Skills</h3>
          <h5>Empowering Expertise: My Skill Set in Focus.</h5>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              <h4 className="mb-16">MySql</h4>
              <p>Expert in MySQL, efficiently manage relational databases to create robust and scalable storage systems.</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              <h4 className="mb-16">TypeScript</h4>
              <p>Proficiency in TypeScript, empowering JavaScript programming with a static type system to develop more secure and reliable applications.</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              <h4 className="mb-16">Python</h4>
              <p>Outstanding Python skills, using it for a wide range of applications, from web development to artificial intelligence.</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              <h4 className="mb-16">Javascript</h4>
              <p>Expertise in JavaScript, creating dynamic interactivity in web pages and developing both client-side and server-side applications.</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              <h4 className="mb-16">C#</h4>
              <p>C# specialist, building high performance and scalable applications in the Microsoft ecosystem.</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
              <h4 className="mb-16">Node js</h4>
              <p>Solid experience in Node.js, leveraging its ability to develop fast and efficient web services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience p-40" id="experience" style={{ padding: '0.1rem' }}>
      <div className="container">
        <div className="heading mb-48">
          <h2 className="mb-32">Testimonials</h2>
          <h5>“Testimonials from my top clients back up the quality of my best work.”</h5>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
            <h3 className="mb-16">Sofia Pedrozo</h3>
              <h4 className="mb-16">Secure Password Generator</h4>
              <p>"Awesome! This password generator is easy to use and offers customizable options. I feel more secure with strong passwords for my online accounts - highly recommended!"</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
            <h3 className="mb-16">Ricardo 
            Cardona</h3>
              <h4 className="mb-16">Azure database-driven coffee sales website</h4>
              <p>"Amazing shopping experience! Wide selection of quality coffee, easy navigation and delicious coffee - my favorite online coffee shopping destination!"</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="content-block bg-gradient shadow br-30 p-20">
            <h3 className="mb-16">Miguelito Revelo</h3>
              <h4 className="mb-16">Movie API using Django REST Framework</h4>
              <p>"Excellent API! Easy to integrate, clear documentation and responsive support. A valuable tool for any app developer."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactInfo = [
    { label: 'Email', value: 'dg4834307@gmail.com' },
    { label: 'Phone', value: '3235806283' },
    { label: 'Address', value: '11 Street, City, Pasto' }
  ];

  return (
    <section className="contact p-20" id="contact">
      <div className="container">
        <div className="heading mb-32">
          <h3>Contact Me</h3>
        </div>
        <div className="contact-info bg-gray-800 bg-opacity-50 p-12 rounded-lg shadow-lg">
          <p className="text-white">If you have any questions or inquiries, feel free to get in touch with me.</p>
          <ul className="list-unstyled text-white">
            {contactInfo.map((item, index) => (
              <li key={index} className="mb-4">
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container">
        <div className="content">
          <h6>Portafolio David inguilan.</h6>
          <ul className="social-icons unstyled d-flex justify-content-center">
            <li><a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Behance.png" alt="Behance" style={{backgroundColor: "#1769FF"}} /></a></li>
            <li><a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Dribbble.png" alt="Dribbble" style={{backgroundColor: "#EA4C89"}} /></a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Twitter.png" alt="Twitter" style={{backgroundColor: "#1DA1F2"}} /></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="/src/assets/media/icons/Linkedin.png" alt="Linkedin" style={{backgroundColor: "#0077B5"}} /></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png" alt="Instagram" style={{backgroundColor: "#E4405F", width: "28px", height: "28px"}} /></a></li>
            <li><a href="https://telegram.org/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" style={{backgroundColor: "#0088CC", width: "28px", height: "28px"}} /></a></li>
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
        <Header  />
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
