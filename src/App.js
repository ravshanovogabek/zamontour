import React, { useState } from 'react';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';


import Contacts from './Components/Contacts/Contacts';
import LanguageSwitcher from './Components/LanguageSwitcher/LanguageSwitcher';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <>
      <Navbar />
      <LanguageSwitcher/>
      <Main />
      <Home setSelectedCity={setSelectedCity} />
      <About selectedCity={selectedCity} />
      
      
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
