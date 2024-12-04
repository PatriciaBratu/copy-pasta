import React, { useState, useEffect } from 'react';
import Div_Header2 from "./Div_Header2.jsx"
import axios from 'axios';
import Divwithrecipes from "./Divwithrecipes.jsx";
import Div_contact from "./div_contact.jsx";
import Div_bottom from "./div_bottom.jsx";
import './App.css';
import image from './assets/Group 91.png';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false); // Pentru a afișa starea de încărcare
    const navigate = useNavigate();

    // Preluarea datelor utilizatorului
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken');
            console.log('tokenul din homepage_logta este: ', token);
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
        } else {
            console.log('User data is not available yet.');
        }
    };


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