const { Schema, model } = require('mongoose');

const RegisterSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    imagePath: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Register', RegisterSchema);