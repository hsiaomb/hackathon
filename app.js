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
app.use(express.static(__dirname + '/css'));


app.get('/', function(req, res) {

	res.render('home')

});

app.get('/:width/:height/', function (req, res){
	var width = parseInt(req.params.width)
	var height = parseInt(req.params.height)
	var effect = function(){
		if(req.params.effect === 'blur'){
			 return '.blur(30,20)'
	}
	}
	console.log(req.params.effect === 'blur')
	console.log(effect)
	var allImages = [];
	for (var i = 0; i < 158; i++) {
		allImages.push('./css/images/img-' + i + ".jpg")
	};

	var randomImage = allImages[Math.floor(Math.random()*allImages.length)];

  res.set('Content-Type', 'image/jpeg');
	gm(randomImage)
    .resize(width, height, '^')
    .gravity('Center')
    .crop(width, height)
    .stream(function streamOut (err, stdout, stderr) {
      if (err) return next(err);
      stdout.pipe(res);
  });

});

app.get('/:width/:height/:effect', function (req, res){
	var width = parseInt(req.params.width)
	var height = parseInt(req.params.height)
	var effect = req.params.effect
	var allImages = [];
	for (var i = 0; i < 158; i++) {
		allImages.push('./css/images/img-' + i + ".jpg")
	};

	var randomImage = allImages[Math.floor(Math.random()*allImages.length)];

  res.set('Content-Type', 'image/jpeg');
  if(effect === 'blur'){
	gm(randomImage)
    .resize(width, height, '^')
    .gravity('Center')
    .crop(width, height)
    .blur(30,5)
    .stream(function streamOut (err, stdout, stderr) {
      if (err) return next(err);
      stdout.pipe(res);
  });
 } else if (effect === 'pinkify'){
 		gm(randomImage)
 	    .resize(width, height, '^')
 	    .gravity('Center')
 	    .crop(width, height)
 	    .colorize(112, 66, 20)
 	    .stream(function streamOut (err, stdout, stderr) {
 	      if (err) return next(err);
 	      stdout.pipe(res);
 	  });
 } else if (effect === 'sepia'){
 		gm(randomImage)
 	    .resize(width, height, '^')
 	    .gravity('Center')
 	    .crop(width, height)
 	    .sepia()
 	    .stream(function streamOut (err, stdout, stderr) {
 	      if (err) return next(err);
 	      stdout.pipe(res);
 	  });
 } else if (effect === 'negative'){
 	gm(randomImage)
     .resize(width, height, '^')
     .gravity('Center')
     .crop(width, height)
     .negative()
     .stream(function streamOut (err, stdout, stderr) {
       if (err) return next(err);
       stdout.pipe(res);
   });
} else if (effect === 'implode'){
		gm(randomImage)
	    .resize(width, height, '^')
	    .gravity('Center')
	    .crop(width, height)
	    .implode(0.5)
	    .stream(function streamOut (err, stdout, stderr) {
	      if (err) return next(err);
	      stdout.pipe(res);
	  });
} else if (effect === 'default'){
	res.redirect('/:width/:height')
}

});

app.post('/face', function(req, res){
	res.redirect('/' + req.body.width + '/' + req.body.height)
});

app.listen(process.env.PORT || 3000 )