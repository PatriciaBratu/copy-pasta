import React from 'react';

import './App.css';
import image from './assets/Group 91.png';
import Div_Header3 from './Div_Header3';
import imag2 from './assets/1Asset 1 1.png';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <>
            <div className="background">

            </div>
            <div>
                <Div_Header3 />
                <div style={{
                    position: "absolute",
                    width: "513px",
                    height: "445px",
                    top: " 350px",
                    left: "205px",
                    gap: "0px",
                    borderRadius: "25px 25px 25px 25px",
                    backgroundColor: " rgba(0, 35, 109, 1)",

                }}>
                    <img src={imag2} style={{
                        position: "absolute",
                        top: "50px",
                        left: "200px"
                    }} />
                </div>

                <div style={{
                    position: "absolute",
                    width: "442px",
                    height: "703px",
                    top: "350px",
                    left: "1220px",
                    gap: "0px",
                    borderRadius: "25px 25px 25px 25px",
                    backgroundColor: " rgba(0, 35, 109, 1)",


                }}>

                </div>
                <Link to="/adauga_retete">
                    <button type="submit"
                        style={{
                            position: "absolute",
                            width: "344px",
                            height: "74px",
                            top: "1011px",
                            left: "788px",
                            gap: "0px",
                            borderRadius: "15px 15px 15px 15px",
                            backgroundColor: "rgba(0, 156, 65, 1)"
                        }}>Add a recipe</button></Link>
            </div>
        </>
    );
}

export default Profile;