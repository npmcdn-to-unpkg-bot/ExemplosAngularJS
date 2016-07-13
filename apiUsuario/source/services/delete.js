'use strict';
var db = require('../db');

module.exports = function(id, cb){
  db.delete(id, cb);
}
