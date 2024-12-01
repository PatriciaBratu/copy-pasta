const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const { User, Recipe } = require('./models/productModel')
const jwt = require('jsonwebtoken');


const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json());
app.use(cors());
const port = 3000;
mongoose.connect('mongodb+srv://patricia:1234patri@cluster0.cbbsr.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(3000, () => {
            console.log('Node API is running on port 3000')
        })
        console.log('connected')
    }).catch((error) => {
        console.log(error);


    })

app.post('/signup', async (req, res) => {
    try {
        console.log(req.body);
        const { username, password, email, nume_complet, data_inregistrare, phone } = req.body;
        const newUser = new User({ username, password, email, nume_complet, data_inregistrare, phone });

        // const salt = await bcrypt.genSalt()
        // const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // console.log(salt)
        // console.log(hashedPassword)
        // const user = new User({
        //     username: username, password: hashedPassword, email: email,
        //     nume_complet: nume_complet, data_inregistrare: data_inregistrare
        // })
        await newUser.save()
        const token = jwt.sign({ userId: newUser._id }, 'secret_key', { expiresIn: '1h' });
        res.status(200).json({ message: 'User created!', token: token });
        console.log(token)



    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }

})

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']; // Token-ul ar trebui să fie trimis în header

    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    jwt.verify(token, 'secret_key', async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token.' });
        }
        // Token-ul este valid, decodăm ID-ul utilizatorului
        const user = await User.findById(decoded.userId);
        req.user = user; // Adăugăm user-ul în req pentru a fi disponibil în endpoint-uri
        next();
    });
};

module.exports = verifyToken;







app.get('/user', verifyToken, (req, res) => {
    // Accesăm datele utilizatorului din req.user
    res.json({
        username: req.user.username,
        email: req.user.email,
        fullName: req.user.fullName,
        // Poți returna orice informație dorești despre utilizator
    });
});

app.post('/adauga_retete', verifyToken, async (req, res) => {
    const { name, rating, creator, description } = req.body;

    if (!name || !rating || !creator) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const newRecipe = new Recipe({
            name,
            description,
            rating,
            creator: req.user._Id

        });

        await newRecipe.save();
        res.status(201).json({ message: 'Recipe added successfully!', recipe: newRecipe });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while adding recipe.' });
    }
});

app.get('/retete', async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('creator', 'username'); // Include informații despre creator
        res.status(200).json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while fetching recipes.' });
    }
});


