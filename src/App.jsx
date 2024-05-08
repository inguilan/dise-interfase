import React, { useState } from 'react';
import './App.css';

function App() {
  
  const translations = {
    en: 'Hello, World!',
    es: '¡Hola, Mundo!'
  };

  
  const getTranslation = () => translations[language];

  
  const [language, setLanguage] = useState('en');

  
  const handleChangeLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Utilizar la función getTranslation para mostrar el texto */}
        <button className="language-button" onClick={handleChangeLanguage}>
          Idioma
        </button>
      </header>
      {/* Mostrar la traducción correspondiente utilizando la función getTranslation */}
      <p>{getTranslation()}</p>
    </div>
  );
}

export default App;
