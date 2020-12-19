const express = require('express');
const User = require('../models/User');
const  Appointment= require('../models/Appointment');
const Doctor = require('../models/Doctor');


var passport = require("passport");
const router = new express.Router();

router.post('/api/register', async (req, res) => {
    // console.log(req.body);
    const user = new User(req.body.data);
    try {
        await user.save();
        // console.log(user);
        res.status(201).send(user);
        // passport.authenticate("local")(req,res,function(){
        //     console.log(req.user);
        //     res.status(201).send(user);
        // });
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.post('/api/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    async (req, res) => {
        console.log(req.user);
        try {
            const user = await User.findOne({ username: req.user.username })
            res.status(200).send(user)
        } catch (e) {
            console.log(e);
            res.status(400).send()
        }
    })


module.exports = router;
