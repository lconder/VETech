require('./model/db');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name:"lconder",
  api_key: "538936326982445",
  api_secret: "cy_pz-vsi2nNNhknDHvaHfKZ4_4"
});

var routes = require('./routes/index');
var perros = require('./routes/perros');
var perdidos = require('./routes/perdidos');
var adoptados = require('./routes/adoptados');
var users = require('./routes/users');
var duenos = require('./routes/duenos');
var api = require('./routes/api');
var collar = require('./routes/collar');
var panelAdopcion = require('./routes/panelAdopcion');
var panelPerdidos = require('./routes/panelPerdidos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({dest: "./public/images/dogs"}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use('/Duenos', duenos);


app.use('/Dogs', perros);
app.use('/Dogs/:id', perros);
app.use('/create', perros);
app.use('/update', perros);

app.use('/update', api);
app.use('/Api', api);

app.use('/Perdidos', perdidos);
app.use('/update', perdidos);

app.use('/Adoptados', adoptados);
app.use('/update', adoptados);

app.use('/Collar',collar);

app.use('/panelAdopcion',panelAdopcion);
app.use('/panelPerdidos',panelPerdidos);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
