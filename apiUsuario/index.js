'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

var config = require('./source/config');
var logger = require('./source/logger');

var app = express();

app.use(morgan(':method :url :reqbody - :status :resbody', {
  stream: {
    write: logger.info
  }
}));

morgan.token('reqbody', function(req) {
  return JSON.stringify(req.body);
});

morgan.token('resbody', function(req, res) {
  return JSON.stringify(res.body);
});

app.use(cors());

app.use(bodyParser.json());

require('./source/routes')(app);

var port = config.get('server:port');

app.listen(port, function(err) {
  if (err) {
    logger.error('An unhandled error occurred. Error: %s', err);
  } else {
    logger.info('Listening on port: %s ', port);
  }
});
