const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username :{
        type: String,
        unique: true,
        required: true,
        minlength: [4, 'le username doit comporter au minimum 4 caractère ']

    },

    name: {
        type: String, 
        required: true,
        minlength: [4, 'le username doit comporter au minimum 4 caractère ']

    },


    email: {

        type: String,
        required: true,
        unique: true
    },


    password:{

        type: String,
        required: true,
        minlength: [8, 'le mot de passe doit  comporter au minimum 8 caractère']

    },


    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ],

    followers: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
})




const userModel = mongoose.model('user', userSchema)

module.exports = userModel