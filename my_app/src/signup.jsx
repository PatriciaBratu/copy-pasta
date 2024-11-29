import React from 'react';
import Div_Header1 from "./Div_Header1"
import person from "./assets/person.png"
import phone from "./assets/phone.png"
import mail from "./assets/mail.png"
import lock from "./assets/lock.png"
import './App.css';
const Signup = () => {
    return (
        <>
            <div className="background">
                <div style={{
                    position: "absolute",
                    width: "703px",
                    height: "993px",
                    top: "200px",
                    left: "608px",
                    gap: "0px",
                    borderRadius: "25px 25px 25px 25px",
                    background: "rgba(0, 35, 109, 1)",

                }}>
                    <div style={{
                        position: "absolute",
                        width: "450px",
                        height: "48px",
                        top: "85px",
                        left: "155px",
                        gap: "0px",
                        // backgroundColor: "green"

                    }}>
                        <header style={{
                            position: "absolute",
                            width: "450px",
                            height: "28px",
                            top: "35px",
                            left: "5px",
                            gap: "0px",
                            color: "white",
                            fontFamily: "Inter",
                            fontSize: "36px",
                            fontWeight: "700",
                            lineHeight: "43.57px",
                            // text-align: center;
                            // text-underline-position: from-font;
                            // text-decoration-skip-ink: none;

                        }}>
                            Hai, fă foamea cu noi!
                        </header>
                    </div>

                    <div style={{
                        position: "absolute",
                        width: "514.94px",
                        height: "90.5px",
                        top: "250.5px",
                        left: "110px",
                        gap: "0px",
                        // border: "2px 2px 2px 2px",
                        borderBottom: "2px solid white",
                        // backgroundColor: "green"

                    }}> <div>
                            <img src={person} style={{
                                position: "absolute",
                                width: "21px",
                                height: "31px",
                                top: "55px",
                                left: "30px",
                                gap: "0px",
                                border: "0.3px 0px 0px 0px",

                            }} />
                        </div>
                        <header style={{
                            color: "white",
                            width: "123px",
                            height: "23px",
                            position: "absolute",
                            top: "55px",
                            left: "75px",
                            fontSize: "16px",
                            fontWeight: "500"

                        }}>
                            Full name</header></div>
                    <div style={{
                        position: "absolute",
                        width: "514.94px",
                        height: "90.5px",
                        top: "350.5px",
                        left: "110px",
                        gap: "0px",
                        // border: "2px 2px 2px 2px",
                        borderBottom: "2px solid white",
                        // backgroundColor: "green"

                    }}>
                        <div>
                            <img src={phone} style={{
                                position: "absolute",
                                width: "21px",
                                height: "31px",
                                top: "55px",
                                left: "30px",
                                gap: "0px",
                                border: "0.3px 0px 0px 0px",

                            }} />
                        </div>

                        <header style={{
                            color: "white",
                            width: "123px",
                            height: "23px",
                            position: "absolute",
                            top: "55px",
                            left: "75px",
                            fontSize: "16px",
                            fontWeight: "500"
                        }}>Telephone</header>
                    </div>
                    <div style={{
                        position: "absolute",
                        width: "514.94px",
                        height: "90.5px",
                        top: "450.5px",
                        left: "110px",
                        gap: "0px",
                        // border: "2px 2px 2px 2px",
                        borderBottom: "2px solid white",
                        // backgroundColor: "green"

                    }}> <div>
                            <img src={mail} style={{
                                position: "absolute",
                                width: "21px",
                                height: "31px",
                                top: "55px",
                                left: "30px",
                                gap: "0px",
                                border: "0.3px 0px 0px 0px",

                            }} />
                        </div>
                        <header style={{
                            color: "white",
                            width: "123px",
                            height: "23px",
                            position: "absolute",
                            top: "55px",
                            left: "75px",
                            fontSize: "16px",
                            fontWeight: "500"
                        }}>E-mail</header></div>

                    <div style={{
                        position: "absolute",
                        width: "514.94px",
                        height: "90.5px",
                        top: "550.5px",
                        left: "110px",
                        gap: "0px",
                        // border: "2px 2px 2px 2px",
                        borderBottom: "2px solid white",
                        // backgroundColor: "green"

                    }}><div>
                            <img src={lock} style={{
                                position: "absolute",
                                width: "21px",
                                height: "31px",
                                top: "55px",
                                left: "30px",
                                gap: "0px",
                                border: "0.3px 0px 0px 0px",

                            }} />
                        </div>
                        <header style={{
                            color: "white",
                            width: "123px",
                            height: "23px",
                            position: "absolute",
                            top: "55px",
                            left: "75px",
                            fontSize: "16px",
                            fontWeight: "500"

                        }}>Password</header></div>

                    <div style={{
                        position: "absolute",
                        width: "514.94px",
                        height: "90.5px",
                        top: "650.5px",
                        left: "110px",
                        gap: "0px",
                        // border: "2px 2px 2px 2px",
                        borderBottom: "2px solid white",
                        // backgroundColor: "green"

                    }}><div>
                            <img src={lock} style={{
                                position: "absolute",
                                width: "21px",
                                height: "31px",
                                top: "55px",
                                left: "30px",
                                gap: "0px",
                                border: "0.3px 0px 0px 0px",

                            }} />
                        </div>
                        <header style={{
                            color: "white",
                            width: "223px",
                            height: "23px",
                            position: "absolute",
                            top: "55px",
                            left: "55px",
                            fontSize: "16px",
                            fontWeight: "500"
                        }}>Confirm Password</header></div>
                </div>
                <div style={{
                    position: "absolute",
                    width: "344px",
                    height: "74px",
                    top: "1011px",
                    left: "788px",
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

            </div >
        </>
    );
}
export default Signup