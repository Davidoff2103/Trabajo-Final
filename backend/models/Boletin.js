const { Schema, model } = require('mongoose');

const BoletinSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    alias: { type: String, required: true },
    about: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Boletin', BoletinSchema);