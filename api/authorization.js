const router = require('express').Router();
const express = require('express');
// const express = require('../server.js').express;
const passport = require('passport');
const path = require('path');

router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend_works/logged.html'));
    // res.app.use('/auth/login',express.static(path.join(__dirname,'../frontend_works')));
});

router.get('/google',
    passport.authenticate('google',{scope:['profile']}),
    (req,res)=>{
        console.log("hey I'm here");
    });

router.get('/google/redirect',
    passport.authenticate('google'),
    (req,res)=>{
        res.redirect('/auth/login');
    });

router.get('/logout',(req,res)=>{
    // console.log('before logout');
    req.logout();
    // console.log('after logout');
    res.redirect('/');
});

module.exports.router= router;