const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Register = require('../models/Register');

router.get('/', async (req, res) => {
    const registers = await Register.find().sort('-_id');
    res.json(registers);
});

router.post('/', async (req, res) => {
    const { name, email, password, date_of_birth } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newRegister = new Register({name, email, password, date_of_birth, imagePath});
    console.log(newRegister)
    await newRegister.save();
    res.json({'message': 'Register Saved'});
});

router.delete('/:id', async (req, res) => {
    const register = await Register.findByIdAndDelete( req.params.id );
    await unlink(path.resolve('./backend/public/' + register.imagePath));
    res.json({message: 'Register Deleted'});
});


module.exports = router;