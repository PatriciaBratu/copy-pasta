import React from 'react';
import Div_Header from "./Div_Header"
import Divwithrecipes from "./Divwithrecipes.jsx";
import Div_contact from "./div_contact.jsx";
import Div_bottom from "./div_bottom.jsx";
import './App.css';
import image from './assets/Group 91.png';

function App() {

  return (
    <>
      <div className="background">
        <img
          src={image}
          alt="Foreground"
          className="foreground-image"
        />
      </div>
      <Div_Header />
      <Divwithrecipes />
      <Div_contact />
      <Div_bottom />
    </>
  )
}

export default App
