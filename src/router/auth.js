const express = require('express');
const User = require('../models/User');
const  Appointment= require('../models/Appointment');
const Doctor = require('../models/Doctor');


var passport = require("passport");
const router = new express.Router();

router.post('/register', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        passport.authenticate("local")(req,res,function(){
            console.log(req.user);
            res.status(201).send(user);
        });
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    async (req, res) => {
        console.log(req.user);
        try {
            const user = await User.findOne({ email: req.body.email })
            res.status(200).send(user)
        } catch (e) {
            console.log(e);
            res.status(400).send()
        }
    })


module.exports = router;
