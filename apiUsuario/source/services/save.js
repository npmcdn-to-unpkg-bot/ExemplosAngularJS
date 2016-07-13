'use strict';
var db = require('../db');

module.exports = function(user, cb){
  db.save(user, cb);
}
