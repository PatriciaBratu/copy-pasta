import React from 'react';

import './App.css';
import image from './assets/Group 91.png';
import Div_Header3 from './Div_Header3';
import imag2 from './assets/1Asset 1 1.png';
import { Link } from 'react-router-dom';

const Adauga_retete = () => {
    return (
        <>
            <div className="background">

            </div>

            <div style={{
                position: "absolute",
                width: "613px",
                height: "545px",
                top: " 350px",
                left: "705px",
                gap: "0px",
                borderRadius: "25px 25px 25px 25px",
                backgroundColor: " rgba(0, 35, 109, 1)",

            }}>
                <button type="submit"
                    style={{
                        position: "absolute",
                        width: "344px",
                        height: "74px",
                        top: "411px",
                        left: "168px",
                        gap: "0px",
                        borderRadius: "15px 15px 15px 15px",
                        backgroundColor: "rgba(0, 156, 65, 1)",
                        color: "white"
                    }}>Add recipe</button>
            </div>
        </>
    );
}

export default Adauga_retete;