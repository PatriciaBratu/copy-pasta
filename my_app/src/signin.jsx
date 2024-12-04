import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import group from './assets/grup.png';
import './App.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post('http://localhost:3000/signin', user); // Endpointul de logare al serverului
            console.log('Server Response:', response);

            const token = response.data.token; // Token-ul returnat de server
            if (token) {
                localStorage.setItem('authToken', token);
                console.log('Token saved in localStorage');
                // Acum poți redirecționa către homepage_logat sau oriunde dorești
                navigate('/homepage_logat');
            } else {
                console.error('Token not received from server');
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="background"></div>
                <div
                    style={{
                        position: 'absolute',
                        width: '703px',
                        height: '703px',
                        top: '250px',
                        left: '608px',
                        gap: '0px',
                        borderRadius: '25px 25px 25px 25px',
                        background: 'rgba(0, 35, 109, 1)',
                    }}
                >
                    <header
                        style={{
                            position: 'absolute',
                            width: '332px',
                            height: '28px',
                            top: '50px',
                            left: '200px',
                            gap: '0px',
                            fontFamily: 'Inter',
                            fontSize: '36px',
                            fontWeight: '700',
                            lineHeight: '43.57px',
                            align: 'center',
                            color: 'white',
                        }}
                    >
                        Loghează-te, chiorăie mațele!
                    </header>

                    <div
                        style={{
                            width: '514.94px',
                            height: '154px',
                            top: '423px',
                            left: '703px',
                            gap: '0px',
                            border: '1px 0px 0px 0px',
                            color: 'black',
                        }}
                    >
                        <img
                            src={group}
                            style={{
                                position: 'relative',
                                top: '310px',
                                left: '100px',
                            }}
                        />
                        <div>
                            <input
                                type="text"
                                required
                                value={email}
                                onChange={handleChangeEmail}
                                placeholder="Email"
                                style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: '23px',
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 35, 109, 1)',
                                    top: '310px',
                                    left: '170px',
                                    width: '200px',
                                }}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            width: '514.94px',
                            height: '90.5px',
                            top: '350.5px',
                            left: '110px',
                        }}
                    >
                        <div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={handleChangePassword}
                                placeholder="Password"
                                style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: '23px',
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 35, 109, 1)',
                                    top: '75px',
                                    left: '55px',
                                    width: '200px',
                                }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={{
                            position: 'absolute',
                            width: '344px',
                            height: '74px',
                            top: '511px',
                            left: '188px',
                            gap: '0px',
                            borderRadius: '15px 15px 15px 15px',
                            backgroundColor: 'rgba(0, 156, 65, 1)',
                        }}
                    >
                        Log in
                    </button>

                    <div>
                        <header
                            style={{
                                position: 'absolute',
                                width: '159px',
                                height: '22px',
                                top: '600px',
                                left: '281px',
                                gap: '0px',
                                fontFamily: 'Montserrat',
                                fontSize: '18px',
                                fontWeight: '700',
                                lineHeight: '43.88px',
                                color: 'white',
                            }}
                        >
                            Forgot password
                        </header>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Signin;
