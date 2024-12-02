import React, { useState, useEffect } from 'react';

import './App.css';
import image from './assets/Group 91.png';
import Div_Header3 from './Div_Header3';
import imag2 from './assets/1Asset 1 1.png';
import { Link } from 'react-router-dom';


const Retete = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('/retete'); // Endpoint-ul pentru a obține rețetele
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <>
            <div className="background">

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    {recipes.map((recipe) => (
                        <div
                            key={recipe._id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '10px',
                                padding: '20px',
                                backgroundColor: '#f9f9f9',
                            }}
                        >
                            <h2>{recipe.name}</h2>
                            <p>{recipe.description}</p>
                            <p><strong>Rating:</strong> {recipe.rating}</p>
                            <p><strong>Creator:</strong> {recipe.creator?.username || 'Unknown'}</p>
                        </div>
                    ))}
                </div>

            </div>


        </>
    );
}

export default Retete;