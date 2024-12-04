import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Group89 from './assets/Group 89.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Div_Header() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false); // Pentru a afișa starea de încărcare
    const navigate = useNavigate();

    // Preluarea datelor utilizatorului


    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken'); // Preia token-ul din localStorage
            console.log('tokenul din header este: ', token);
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
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);


    // Funcția pentru gestionarea redirecționării
    const handleRedirectToProfile = () => {
        if (user) {
            setLoading(true); // Setăm starea de încărcare
            navigate('/profile', { state: { user } }); // Redirecționare cu date
            console.log('user: ', user)
        } else {
            console.log('User data is not available yet.');
        }
    };
    // const handleRedirectToProfile = () => {
    //     if (user) {
    //         setLoading(true); // Setăm starea de încărcare
    //         navigate('/profile', { state: { user } }); // Redirecționare cu datele utilizatorului
    //     } else {
    //         console.log('User data is not available yet.');
    //     }
    // };

    return (
        <header style={{ width: "1920px", height: "136px", color: "white", top: "0px", left: "0px", position: "fixed" }}>
            <div style={{ padding: "20px", backgroundColor: 'rgba(0, 35, 109, 1)', width: "1920px", height: "97px", top: "0px", borderColor: "rgba(255, 255, 255, 1)", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                <div>
                    <img src={Group89} style={{ width: '123px', height: '63.4px', top: "20px", left: "20px", position: "absolute" }} />
                </div>
                <Link to={"./retete"}>
                    <div style={{ position: 'absolute', width: "89px", height: "27px", left: "308px", top: "35px", fontFamily: "Montserrat", fontWeight: "600", fontSize: "22px", lineHeight: "26.82px" }}>
                        Recipes
                    </div></Link>
                <Link to={"/adauga_retete"}>
                    <div style={{ position: 'absolute', width: "131px", height: "27px", left: "427px", top: "35px", fontFamily: "Montserrat", fontWeight: "600", fontSize: "22px", lineHeight: "26.82px" }}>
                        Add Recipe
                    </div></Link>
                <div style={{ position: 'absolute', width: "95px", height: "27px", left: "1756px", top: "35px", fontFamily: "Montserrat", fontWeight: "600", fontSize: "22px", lineHeight: "26.82px" }}>
                    {/* <Link to="/profile" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>
                        Profile
                    </Link> */}
                    <Button
                        onClick={handleRedirectToProfile}
                        disabled={loading || !user} Style={{
                            backgroundColor: "rgba(0, 35, 109, 1)"
                        }}>

                        Profile
                    </Button>
                </div>

            </div>


        </header >

    )
}
export default Div_Header