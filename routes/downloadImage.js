var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var http = require('http');
var fs = require('fs');
var download = require('image-downloader');
var zipFolder = require('zip-folder');
var router = express.Router();

router.post('/', function(req, res, next) {

  console.log(req.body.checked_Image);
  var temp = req.body.checked_Image;
  for(var i in temp) {
    var options = {
      url : temp[i],
      dest : '/Users/hiasi/Desktop/Download_image/image/image'+i+'.jpg'
    }
    download.image(options).then(({i,image}) => {
      console.log('File saved to', 'image'+i+'.jpg');
    }).catch((err) => {
      throw err

    })
  }
  zipFolder('/Users/hiasi/Desktop/Download_image/image','/Users/hiasi/Desktop/Download_image/image.zip', function(err) {
    if(err) {
      console.log('fail');
    }
    else {
        console.log('sucess');
    }
  });


  res.render('index', { title: 'imgzip'});
});

module.exports = router;
