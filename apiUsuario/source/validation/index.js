'use strict';
var tv4 = require('tv4');

var userSchema = require('./schemas/user-schema.json');

tv4.addSchema(userSchema);

module.exports = function(req, res, next) {

  var body = req.body;

  var result = tv4.validateMultiple(body, 'UserSchema', true);

  req.valid = {
    isValid: result.valid,
    message : (result.valid ? null : result.errors[0].message)
  };

  next();
};
