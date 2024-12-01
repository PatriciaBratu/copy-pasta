import React, { useState } from 'react';

import './App.css';
import image from './assets/Group 91.png';
import Div_Header3 from './Div_Header3';
import imag2 from './assets/1Asset 1 1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Adauga_retete = () => {

    const [description, setDescription] = useState('');

    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleAddRecipe = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('You need to be logged in to add a recipe.');
            return;
        }
        try {
            const response = await axios.post(
                '/retete', // Endpoint-ul tău backend
                { title: 'Sample Title', ingredients: ['Ingredient1', 'Ingredient2'], instructions: 'Sample instructions' }, // Exemplu de date
                {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Adaugă tokenul în header
                    },
                }
            );
            console.log('Recipe added successfully:', response.data);
            window.location
        } catch (error) {
            console.error('Error adding recipe:', error);
            alert('Failed to add recipe. Please try again.');
        }
    };


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
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Name"
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        marginTop: '10px',
                    }}
                />

                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description:"
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        marginTop: '10px',
                    }}
                />
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