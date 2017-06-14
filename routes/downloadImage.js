var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var http = require('http');
var fs = require('fs');
var download = require('image-downloader');
var zipFolder = require('zip-folder');
var os = require('os');
var router = express.Router();
var async = require('async');

router.post('/', function(req, res, next) {

  console.log(req.body.checked_Image);
  var temp = req.body.checked_Image;
  var dir = os.userInfo().username;

  var destination = '/Users/'+dir+'/Downloads/imgzip';
  if(!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }
  for(var i in temp) {
    var options = {
      url : temp[i],
      dest : '/Users/'+dir+'/Downloads/imgzip/image'+i+'.jpg'
    };
    download.image(options).then(({i,image}) => {
      console.log('File saved to', 'image'+i+'.jpg');
    }).catch((err) => {
      throw err;
    });
  }

  setTimeout(function() {
    zipFolder('/Users/'+dir+'/Downloads/imgzip','/Users/'+dir+'/Downloads/imgzip.zip', function(err) {
      if(err) {
        console.log('fail');
      }
      else {
          console.log('sucess');
      }
    });
  }, 1000);

  res.render('index', { title: 'imgzip'});
});

module.exports = router;
