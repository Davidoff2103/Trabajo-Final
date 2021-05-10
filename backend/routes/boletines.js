const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Boletin = require('../models/Boletin');

router.get('/', async (req, res) => {
    const boletines = await Boletin.find().sort('-_id');
    res.json(boletines);
});

router.post('/', async (req, res) => {
    const { name, email, alias, about} = req.body;
    const newBoletin = new Boletin({name, email, alias, about});
    console.log(newBoletin)
    await newBoletin.save();
    res.json({'message': 'Boletin Saved'});
});

router.delete('/:id', async (req, res) => {
    const boletin = await Boletin.findByIdAndDelete(req.params.id);
    res.json({message: 'Boletin Deleted'});
});


module.exports = router;