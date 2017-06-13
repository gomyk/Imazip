var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var http = require('http');
var fs = require('fs');
var download = require('image-downloader');
var router = express.Router();

router.post('/', function(req, res, next) {
  var options = {
    uri: 'https://www.bing.com/images/search?q='+req.body.word+'&FORM=HDRSC2',
    headers: {
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
    },
    encoding: 'binary'
  };

  request(options, function (err, response, body) {
        var $ = cheerio.load(body);

        var imgs = [];
        $("img").each(function(itme,index,array) {
          if($(this).attr("src") !== undefined) {
            if($(this).attr("src").indexOf("http") !== -1)
            imgs.push($(this).attr("src"));
          }
          else if($(this).attr("data-src") !== undefined) {
            if($(this).attr("data-src").indexOf("http") !== -1)
            imgs.push($(this).attr("data-src"));
          }
        });
        console.log(imgs.length);
        console.log(imgs);

        res.render('displayImage', { title: 'imgzip', img: imgs });
      });
});

module.exports = router;
