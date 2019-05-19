var express = require('express');
var exphbs_section = require('express-handlebars-sections');
var expHbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');
var wnumb = require('wnumb');
var session = require('express-session');
var app = express();
var baiDangController=require('./controllers/BaiDangController');

app.use('/test', baiDangController);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var hbsConfig = expHbs.create({
    // helpers: require('./helpers/handlebars.js').helpers,
      layoutsDir: path.join(__dirname, '/templates/layouts'),
      defaultLayout: path.join(__dirname, '/templates/layouts/layout' ),
      partialsDir:  path.join(__dirname, '/templates/partials' ),
      extname:'.hbs'
  })

// Lấy đường dẫn tới các file hbs trong template
app.engine('.hbs', hbsConfig.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/baiviet/'));

app.listen(3000, () => {
    console.log('server running on port 3000');
});