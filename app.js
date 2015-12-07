var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);
app.set('views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {

  res.render('home')

});

var allImages = [];
for (var i = 0; i < 157; i++) {
  allImages.push('/css/images/img-'+i)
};

app.listen(process.env.PORT || 3000 )