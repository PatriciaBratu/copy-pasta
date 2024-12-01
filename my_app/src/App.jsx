import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage.jsx';
import Div_Header from "./Div_Header"
import Divwithrecipes from "./Divwithrecipes.jsx";
import Div_contact from "./div_contact.jsx";
import Div_bottom from "./div_bottom.jsx";
import Signin from './signin.jsx';

import './App.css';
import image from './assets/Group 91.png';
import Signup from './signup.jsx';


function App() {

  return (

    <Router>
      <Div_Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>

    </Router>

  );

}

export default App
