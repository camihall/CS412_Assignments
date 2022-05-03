/*
        https://github.com/perrydBUCS/cs412fall21/tree/asynchIntro
API: https://rapidapi.com/community/api/open-weather-map
       camihall2
       Katieapi1!
 */

/* part a */

'use strict';
var express = require('express');
var router = express.Router();
const request = require("request");
const { response } = require("express");
const nodeFetch = require('node-fetch');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Problem set 4' });
});

/* Part B: API Request with promises*/
router.get('/', function (req, res, next){
    let param = req.body.city; //"london,uk";
    return new Promise((resolve, reject) => {
        let APIendpt = 'https://rapidapi.com/community/api/open-weather-map' + param;
        console.log("the endpt value is ", APIendpt);
        request(APIendpt, (err, response, body) => {
            if (response.statusCode == 200) {
                resolve(body);
            } else {
                reject(response);
            }
        });
    })
        .then((result) => {
                //resolve
                console.log("Result was resolved")
                let data = JSON.parse(result);
                console.log("data items is ", data.items[0].title);
                res.render('/', {part: "b", title: "Weather Channel", title: data.items[0].title,
                description: data.items[0].description, cautionMSG: data.items[0].caution}); //result
            },
                //reject
                (result) => {
                console.log("Result was rejected")
                res.render('/', {title: "Weather Channel", data: result.statusMessage});
            }
        );
});


/* Part C: async/await */
router.get('/', function(req, res){

    async function getWeather() {
        let param = req.body.city;
        const data = await nodeFetch('https://rapidapi.com/community/api/open-weather-map' + param, {method: "GET"});
    
        console.log("response", res.items[0].title);
        return data;
    }

    getWeather()
        .then(function(data){
            console.log(`Response is ${data}`) //resolve
            res.render('/', {part: "c", title: "Weather Channel", title: data.items[0].title,
                description: data.items[0].description, cautionMSG: data.items[0].caution});
        },
            (err) => console.log(`${err}`) //reject
        )
    });


/* Part D: Callback */

router.get('/', function(req, res){

    const param = req.body.city; //"london,uk";
    const callAPI = function (param, callback){
        const APIendpt = "https://rapidapi.com/community/api/open-weather-map" + param;
        request(APIendpt,function(err, response, body){
            return callback(err, body);
        });
    }

    callAPI(param, function(err, result){
        if(err){
            res.send("There was an error!!")
        }
        else{
            console.log("the result is ", result);
            res.render('/', {part: "d", title: "Weather Channel", title: result.title, data: result,
                description: data.items[0].description, cautionMSG: data.items[0].caution});
        }
    });
});

module.exports = router;