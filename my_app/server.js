const express = require('express');
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const { User, Recipe } = require('./models/productModel')
const jwt = require('jsonwebtoken');


const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json());
app.use(cors());

const router = express.Router();
const port = 3000;
app.use(cors({
    origin: 'http://127.0.0.1:5173',  // Permite cereri din clientul React
    methods: ['GET', 'POST'],  // Permite metodele necesare
    credentials: true,  // Permite cookie-uri și autentificare
}));
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
        const { username, password, email, telephone } = req.body;

        // Validare pentru câmpuri lipsă
        if (!username || !password || !email || !telephone) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const data_inregistrare = new Date(); // Setăm data curentă pentru înregistrare
        const newUser = new User({ username, password, email, telephone });

        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, 'secret_key', { expiresIn: '1h' });

        res.status(200).json({ message: 'User created!', token });



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
const jwt1 = require('jsonwebtoken');

const verifyToken1 = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extrage token-ul din header-ul Authorization

    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    jwt1.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token.' });
        }

        req.user = decoded; // Setează utilizatorul în req.user
        next(); // Continuă la ruta următoare
    });
};

module.exports = verifyToken;







app.get('/user', verifyToken, (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log('Token primit în backend:', req.headers['authorization']);

    console.log('Date utilizator:', req.user);
    // Accesăm datele utilizatorului din req.user
    res.json({
        username: req.user.username,
        email: req.user.email,
        telephone: req.user.telephone,           // Include telefonul utilizatorului

    });
});

app.post('/adauga_retete', verifyToken1, async (req, res) => {
    const { name, creator, description } = req.body;

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

router.post('/signin', async (req, res) => {
    console.log('req.body:', req.body);

    const { email, password } = req.body;
    console.log('Email:', email, 'Password:', password);

    try {
        // Căutăm utilizatorul în baza de date după email
        const user = await User.findOne({ email });
        // const user = User.findOne({ email }).then(console.log).catch(console.error);
        // const normalizedEmail = email.trim().toLowerCase();
        // const user = await User.findOne({ email: normalizedEmail });
        console.log('User găsit:', user);
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Comparăm parola introdusă direct cu parola stocată
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Dacă parola este corectă, generăm un token JWT
        const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
        console.log('datele sunt valide');
        res.json({
            token,
            username: user.username,
            email: user.email,
            telephone: user.telephone // Informații suplimentare
        });


    } catch (err) {

        console.error('Error during sign-in:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.use(router);
