var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');
var gm = require('gm').subClass({imageMagick: true});



app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);
app.set('views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res) {

	res.render('home')

});

app.get('/:width/:height', function (req, res){
	var width = parseInt(req.params.width)
	var height = parseInt(req.params.height)

	var allImages = [];
	for (var i = 0; i < 158; i++) {
		allImages.push('./css/images/img-' + i + ".jpg")
	};

	var randomImage = allImages[Math.floor(Math.random()*allImages.length)];

  res.set('Content-Type', 'image/jpeg');

	gm(randomImage)
    .resize(width,height)
    .stream(function streamOut (err, stdout, stderr) {
      if (err) return next(err);
      stdout.pipe(res);
  });

});



app.listen(process.env.PORT || 3000 )