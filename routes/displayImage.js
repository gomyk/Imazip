var express = require('express');
var request = require('request');
var http = require('http');
var fs = require('fs');
var download = require('image-downloader');
var router = express.Router();

router.post('/', function(req, res, next) {

    res.sendStatus(200);

});

module.exports = router;
