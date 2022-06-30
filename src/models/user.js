const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "this email is already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("this email is not valid")
            }
        }
    },
    number: {
        type: String,
        required: true,
        min: 11,
    },
    amount: {
        type: Number,
        required: true
    }
})

const user =  new mongoose.model('user',userSchema);

module.exports = user;