'use strict';
module.exports = function(user) {
  var newUser = {};
  newUser.nome = user.nome;
  newUser.email = user.email;
  newUser.senha = user.senha;
  newUser.cpf = user.cpf;
  newUser.endereco = user.endereco;
  newUser.estado = user.estado;

  return newUser;
}
