import React from 'react';
import Div_Header1 from "./Div_Header1"
import './App.css';
import { Link } from 'react-router-dom';
import group from './assets/grup.png'
const Signin = () => {
    return (
        <>

            <div className="background">

            </div><div style={{
                position: "absolute",
                width: "703px",
                height: "703px",
                top: "250px",
                left: "608px",
                gap: "0px",
                borderRadius: "25px 25px 25px 25px",
                background: "rgba(0, 35, 109, 1)",


            }}>
                <header style={{
                    position: "absolute",
                    width: "332px",
                    height: "28px",
                    top: "50px",
                    left: "200px",
                    gap: "0px",
                    fontFamily: "Inter",
                    fontSize: "36px",
                    fontWeight: "700",
                    lineHeight: "43.57px",
                    align: "center",
                    // textUn: from-font;
                    // text-decoration-skip-ink: none;
                    color: "white"
                }}>
                    Loghează-te, chiorăie mațele!
                </header>

                <div style={{
                    width: "514.94px",
                    height: "154px",
                    top: "423px",
                    left: "703px",
                    gap: "0px",
                    border: "1px 0px 0px 0px",
                    color: "black"

                }}>
                    <img src={group} style={{
                        position: "relative",
                        top: "310px",
                        left: "100px"
                    }}></img>
                </div>

                <div style={{
                    position: "absolute",
                    width: "344px",
                    height: "74px",
                    top: "511px",
                    left: "188px",
                    gap: "0px",
                    borderRadius: "15px 15px 15px 15px",
                    backgroundColor: "rgba(0, 156, 65, 1)"

                }}>
                    <header style={{
                        position: "relative",
                        width: "117px",
                        height: "29px",
                        top: "13px",
                        left: "110px",
                        gap: "0p",
                        color: "white",
                        fontFamily: "Montserrat",
                        fontSize: "36px",
                        fontWeight: "700",
                        lineHeight: "43.88px",



                    }}>
                        Log in</header>
                </div>

                <div>
                    <header style={{
                        position: "absolute",
                        width: "159px",
                        height: "22px",
                        top: "600px",
                        left: "281px",
                        gap: "0px",
                        fontFamily: "Montserrat",
                        fontSize: "18px",
                        fontWeight: "700",
                        lineHeight: "43.88px",
                        color: "white"
                    }}>
                        Forgot password
                    </header>
                </div>
            </div >

        </>
    );
}
export default Signin