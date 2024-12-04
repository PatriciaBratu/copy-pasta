const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Referință la User
});


const userSchema = new mongoose.Schema(
    {
        id: { type: String, default: uuidv4, unique: true },
        username: {
            type: String,

        },
        telephone: {
            type: String,
        },
        email: {
            type: String,
            required: [true, "Please enter the email"]
        },
        password: {
            type: String,
            required: [true, "Please enter the password"],

        },


    }
)

const Recipe = mongoose.model('Recipe', recipeSchema);
const User = mongoose.model('User', userSchema);

module.exports = { User, Recipe };
