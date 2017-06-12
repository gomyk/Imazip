var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var http = require('http');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index',{title : 'imgzip'})
});

module.exports = router;
