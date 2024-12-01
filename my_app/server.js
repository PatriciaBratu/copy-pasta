const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const { User, Recipe } = require('./models/productModel')


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
        const { username, password, email, nume_complet, data_inregistrare } = req.body;
        const newUser = new User({ username, password, email, nume_complet, data_inregistrare });

        // const salt = await bcrypt.genSalt()
        // const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // console.log(salt)
        // console.log(hashedPassword)
        // const user = new User({
        //     username: username, password: hashedPassword, email: email,
        //     nume_complet: nume_complet, data_inregistrare: data_inregistrare
        // })
        await newUser.save()
        res.status(200).json({ message: 'User created!' });




    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }

})

// app.post('/signup', async (req, res) => {
//     const user = User.find(user => user.email = req.body.email)
//     if (user == null) {
//         return res.status(400).send('Cannot find this email')
//     }
//     try {
//         if (await bcrypt.compare(res.body.password, user.password)) {
//             res.send('Success')
//         } else {
//             res.send('Incorrect password')
//         }
//     } catch {
//         res.status(500).send()
//     }
// })

