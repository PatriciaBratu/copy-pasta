import React, { useState } from 'react';
import person from "./assets/person.png"
import phone from "./assets/phone.png"
import mail from "./assets/mail.png"
import lock from "./assets/lock.png"


import axios from 'axios';
import './App.css';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [telephone, setTelephone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value); // Aceeași valoare pentru toate câmpurile
    };
    const handleChangeName = (e) => {
        setUsername(e.target.value);
    };

    const handleChangeTelephone = (e) => {
        setTelephone(e.target.value);
    };


    const handleChangeemail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const onSubmit = async (e) => {
        e.preventDefault(); // Previne comportamentul implicit (reîncărcarea paginii)

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const user = {
            username: username,
            telephone: telephone,
            email: email, // Folosim starea email
            password: password,
        };
        try {
            console.log(user);
            const response = await axios.post('http://localhost:3000/signup', user);
            console.log(response.data); // Afișează user-ul în consolă 




            // Redirecționează utilizatorul (înlocuind window.location)
            window.location = '/';
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };
    return (
        <>
            <form onSubmit={onSubmit}>
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

                            <input type="text"
                                required
                                value={username}
                                onChange={handleChangeName}
                                placeholder="Full name"
                                style={{
                                    position: 'absolute',
                                    width: "150px",
                                    height: "23px",
                                    color: "white",
                                    backgroundColor: "rgba(0, 35, 109, 1)",
                                    top: '55px',
                                    left: '75px',
                                    width: '200px',
                                }}
                            /></div>
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


                            <input type="text"
                                required
                                value={telephone}
                                onChange={handleChangeTelephone}
                                placeholder="Telephone"
                                style={{
                                    position: 'absolute',
                                    width: "150px",
                                    height: "23px",
                                    color: "white",
                                    backgroundColor: "rgba(0, 35, 109, 1)",
                                    top: '55px',
                                    left: '75px',
                                    width: '200px',
                                }}
                            />
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
                            <div>

                                <input type="text"
                                    required
                                    value={email}
                                    onChange={handleChangeemail}
                                    placeholder="Email"
                                    style={{
                                        position: 'absolute',
                                        width: "150px",
                                        height: "23px",
                                        color: "white",
                                        backgroundColor: "rgba(0, 35, 109, 1)",
                                        top: '55px',
                                        left: '75px',
                                        width: '200px',
                                    }}
                                />
                            </div>
                        </div>

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

                            <input type="text"
                                required
                                value={password}
                                onChange={handleChangePassword}
                                placeholder="Password"
                                style={{
                                    position: 'absolute',
                                    width: "150px",
                                    height: "23px",
                                    color: "white",
                                    backgroundColor: "rgba(0, 35, 109, 1)",
                                    top: '55px',
                                    left: '75px',
                                    width: '200px',
                                }}
                            />
                        </div>

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

                            <input type="text"
                                required
                                value={confirmPassword}
                                onChange={handleChangeConfirmPassword}
                                placeholder="Confirm Password"
                                style={{
                                    position: 'absolute',
                                    width: "150px",
                                    height: "23px",
                                    color: "white",
                                    backgroundColor: "rgba(0, 35, 109, 1)",
                                    top: '55px',
                                    left: '75px',
                                    width: '200px',
                                }}
                            /></div>
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
                        <div style={{
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



                        }} >
                            <button type="submit">
                                Log in</button></div>
                    </div>

                </div >
            </form>
        </>
    );
}
export default Signup