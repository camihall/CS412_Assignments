'use strict';
var express = require('express');
var router = express.Router();

//part a, b
router.get('/', function (req, res) {
    res.render('index', { title: 'Hi Buddies!' });   
});

//part c
router.post('/', function (req, res) {
    let foo = req.body.name;
    let len = foo.length
    res.render('index', { title: foo, length:len});
});

//part d
router.get('/:phrase', ((req, res, next)=>{
    let phrase = req.params.phrase
    let len = phrase.length
    console.log('This is on req.params: ', req.params.phrase);
    res.render('index', {title: phrase, length: len});
}));
module.exports = router;
