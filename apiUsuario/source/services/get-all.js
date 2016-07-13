'use strict';
var db = require('../db');

module.exports = function(cb){
  db.getAll(cb);
}
