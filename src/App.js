import React, { useEffect, useState,Component } from "react";
import HeaderBenner from './components/HeaderBenner';
import Header from './components/Header';
import Body from './components/Body';
import HeaderFixed from './components/HeaderFixed';
import Title from './components/Title';
import Act from './components/Act';


function App() {
  const [navbar, setNavbar] = useState(true);
  const changeheight = () => {
    if(window.scrollY > 0){
      setNavbar(false);
    }else{
      setNavbar(true);
    }
  }
  
  window.addEventListener('scroll', changeheight)
  return (
    <div className="transition-all duration-300">
      <HeaderBenner />
      {navbar ? <Header /> : <HeaderFixed />}
      <Title />
      <Act />
    </div>
  );
}

export default App;
