'use strict';
var express = require('express');
var router = express.Router();

//part d using form
router.get('/', function (req, res) {
    let newtitle = String(req.url).replace('/?phrase=', '').replaceAll('+',' ');
    let len = newtitle.length;
    res.render('index', {title: newtitle, length: len});
});

//part d using url
router.get('/:phrase', ((req, res, next)=>{
    let phrase = req.params.phrase
    let len = phrase.length
    console.log('This is on req.params: ', req.params.phrase);
    res.render('index', {title: phrase, length: len});
}));
module.exports = router;
