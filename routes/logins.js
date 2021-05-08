const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Login = require('../models/Login');

router.get('/', async (req, res) => {
    const logins = await Login.find().sort('-_id');
    res.json(logins);
});

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const newLogin = new Login({email, password});
    console.log(newLogin)
    await newLogin.save();
    res.json({'message': 'Login Saved'});
});

router.delete('/:id', async (req, res) => {
    const login = await Login.findByIdAndDelete(req.params.id);
    res.json({message: 'Login Deleted'});
});


module.exports = router;