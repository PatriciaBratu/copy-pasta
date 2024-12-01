import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage.jsx';
import Div_Header from "./Div_Header"
import Divwithrecipes from "./Divwithrecipes.jsx";
import Div_contact from "./div_contact.jsx";
import Div_bottom from "./div_bottom.jsx";
import Signin from './signin.jsx';
import Homepage_logat from './homepage_logat.jsx'

import './App.css';
import image from './assets/Group 91.png';
import Signup from './signup.jsx';
import Profile from './profile.jsx'
import Adauga_retete from './adauga_retete.jsx';
import Retete from './retete.jsx';


function App() {

  return (

    <Router>
      <Div_Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/homepage_logat" element={<Homepage_logat />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/adauga_retete' element={<Adauga_retete />} />
        <Route path='/retete' element={<Retete />} />
      </Routes>

    </Router>

  );

}

export default App
