/* eslint-disable */
import React, { useEffect, useState,Component } from "react";
import HeaderBenner from './components/HeaderBenner';
import Title from './components/Title';
import Act from './components/Act';
import Header from './components/Header';
import HeaderFixed from './components/HeaderFixed';
import Route from 'react-router-dom';
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
    <div>
      <Route path="/">
        <HeaderBenner />
        {navbar ? <Route><Header /></Route> : <HeaderFixed />}
        <Title />
        <Act />
      </Route>
      <Route exact path="lol"></Route>
      <Route exact path="app"></Route>
      <Route exact path="website"></Route>
    </div>
  );
}

export default App;
