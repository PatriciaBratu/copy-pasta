import React, { useState, useEffect } from 'react';


import './App.css';
import image from './assets/Group 91.png';
import Div_Header3 from './Div_Header3';
import imag2 from './assets/1Asset 1 1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken');

            if (!token) {
                console.log('No token found');
                return;
            }

            try {
                const response = await axios.get('http://localhost:3000/user', {
                    headers: {
                        Authorization: token, // Trimiterea token-ului în header
                    },
                });
                setUser(response.data); // Setează datele utilizatorului
                window.location.href = '/retete';
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    if (!user) return <div>Loading...</div>;

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

                    <header style={{
                        position: "absolute",
                        top: "300px",
                        left: "150px",
                        color: "white",
                        width: "210px",
                        height: "23px",


                    }}>
                        Bucatar {user.username}
                    </header>
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
                    <header style={{
                        position: "absolute",
                        width: "537px",
                        height: "33px",
                        top: "87px",
                        left: "-65px",
                        color: "white",
                        fontFamily: "Montserrat",
                        fontSize: "32px",
                        fontWeight: "500",
                        lineHeight: "39.01px",



                    }}>
                        E-mail: {user.email}
                    </header>

                    <header style={{
                        position: "absolute",
                        width: "537px",
                        height: "33px",
                        top: "187px",
                        left: "-65px",
                        color: "white",
                        fontFamily: "Montserrat",
                        fontSize: "32px",
                        fontWeight: "500",
                        lineHeight: "39.01px",



                    }}>
                        Telephone: {user.telephone}
                    </header>
                    <header style={{
                        position: "absolute",
                        width: "537px",
                        height: "33px",
                        top: "287px",
                        left: "-65px",
                        color: "white",
                        fontFamily: "Montserrat",
                        fontSize: "32px",
                        fontWeight: "500",
                        lineHeight: "39.01px",



                    }}>
                        Date: {user.data_inregistrare}
                    </header>
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