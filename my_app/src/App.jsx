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


function App() {
  // const [currentPage, setCurrentPage] = useState('home');
  return (
    // <Router>
    //   <div className="background">
    //     <img
    //       src={image}
    //       alt="Foreground"
    //       className="foreground-image"
    //     />
    //   </div>

    //   <Div_Header />
    //   <Divwithrecipes />
    //   <Div_contact />
    //   <Div_bottom />
    // </Router>
    <Router>
      <Div_Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

    </Router>

  );

}

export default App
