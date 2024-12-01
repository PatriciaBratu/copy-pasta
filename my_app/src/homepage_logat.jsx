import React from 'react';
import Div_Header2 from "./Div_Header2.jsx"
import Divwithrecipes from "./Divwithrecipes.jsx";
import Div_contact from "./div_contact.jsx";
import Div_bottom from "./div_bottom.jsx";
import './App.css';
import image from './assets/Group 91.png';

function Home() {
    return (
        <>
            <div className="background">
                <img src={image}
                    alt="Foreground"
                    className="foreground-image"
                />
            </div>
            <Div_Header2 />
            <Divwithrecipes />
            <Div_contact />
            <Div_bottom /></>
    );
}

export default Home;