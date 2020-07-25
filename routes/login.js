var express = require('express');
var router = express.Router();


router.post('/', function (req, res) {
    var username = JSON.stringify(req.body.username);
    var pass = JSON.stringify(req.body.password);
    console.log("name :" + username);
    console.log("pass:" + pass);
    res.render('index', { title: "express"});

});


module.exports = router;
