var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);
app.set('views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {

	res.render('home')

});

app.get('/:width/:height', function (req, res){

	var allImages = [];
	for (var i = 0; i < 157; i++) {
		allImages.push('/css/images/img-' + i + ".jpg")
	};

	var randomImage = allImages[Math.floor(Math.random()*allImages.length)];

	console.log(randomImage);

});



app.listen(process.env.PORT || 3000 )