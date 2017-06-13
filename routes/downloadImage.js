var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var http = require('http');
var fs = require('fs');
var download = require('image-downloader');
var router = express.Router();

router.post('/', function(req, res, next) {

  console.log(req.body.checked_Image);
  var temp = req.body.checked_Image;
  for(var i in temp) {
    var options = {
      url : temp[i],
      dest : '/Users/KHUNET/Desktop/OpenS/Imazip/image/image'+i+'.jpg'
    }
    console.log(i);
    download.image(options).then(({i,image}) => {
      console.log('File saved to', 'image'+i+'.jpg');
    }).catch((err) => {
      throw err
    })

  }
  res.render('downloadImage', { title: 'imgzip'});
});

module.exports = router;
