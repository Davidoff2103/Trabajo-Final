const { Schema, model } = require('mongoose');

const LoginSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Login', LoginSchema);