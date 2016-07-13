'use strict';
var services = require('../services');
var logger = require('../logger');

module.exports = function(request, response) {
  var user = request.body;
  var messageStatus = request.valid;

  if (messageStatus.isValid) {

    services.save(services.createUser(user), function(err, res) {
      if (err) {
        response.status(500).send();
      } else {
        response.status(201).send();
      }
    });

  } else {
    response.status(400).send(messageStatus.message);
  }
};
