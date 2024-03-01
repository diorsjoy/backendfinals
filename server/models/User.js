const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'], // Specify the possible roles
        default: 'user' // Default role for new users
    }
});

module.exports = mongoose.model('User', UserSchema);
