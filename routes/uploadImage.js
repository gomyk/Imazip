var express = require('express');
var http = require('http');
var fs = require('fs');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'test/')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now()+file.originalname);
  }
})

var upload = multer({ storage: storage });

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('uploadTest');
});

router.post('/', upload.single('userfile'),function(req, res){
    res.send('Uploaded! : '+req.file);
    console.log(req.file);
});
module.exports = router;
