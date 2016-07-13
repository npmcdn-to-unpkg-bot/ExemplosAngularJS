'use strict';

var _db = {};
var _users = [];
var _id = 0;

_db.save = function(user, cb) {
  _id++;
  user.id = _id;
  _users.push(user);
  cb();
}
_db.delete = function(id, cb) {
  _users = _users
    .filter(function(el) {
      return el.id != id;
    })

  cb(null, _users);
}

_db.getById = function(id, cb) {
  var result = _users
    .filter(function(el) {
      return el.id == id;
    })

  cb(null, result);
}

_db.update = function(id, user,  cb) {

  _users.forEach(function(entry) {
    if (entry.id == id) {
      entry.nome = user.nome;
      entry.email = user.email;
      entry.senha = user.senha;
      entry.cpf = user.cpf;
      entry.endereco = user.endereco;
      entry.estado = user.estado;
    }
  });
  cb();
}

_db.getAll = function(cb) {
  cb(null, _users);
}

module.exports = _db;
