'use strict';
var db = require('../db');

module.exports = function(id, user, cb) {
  db.update(id, user, cb);
}
