'use strict';
var services = require('../services');
var logger = require('../logger');

module.exports = function(request, response) {
  var id = request.params.id;
  var user = request.body;

  services.update(id, user, function(err, res) {
    if (err) {
      response.status(500).send();
    } else {
      response.status(200).send();
    }
  });
};
