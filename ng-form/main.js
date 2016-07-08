var app = angular.module('mainApp', ["ngMessages"]);

app.controller('usuariosController', function ($scope){
    $scope.contador = 3;
    $scope.usuarios = [{
                         id: 1,
                         nome: "Marcos Lisboa",
                         email: "marcosplisboa@live.com",
                         telefone: '(31)9415-1412',
                         estado: 'RJ',
                         senha: "admin",
                         selected: false
                       }, {
                         id: 2,
                         nome: "Geraldo Neto",
                         email: "geraldo@live.com",
                         telefone: '(31)4181-2451',
                         estado: 'MG',
                         senha: "admin",
                         selected: false
                       }, {
                         id: 3,
                         nome: "Priscila",
                         email: "priscila@live.com",
                         telefone: '(31)3145-4151',
                         estado: 'MG',
                         senha: "admin",
                         selected: false
                       }];

    $scope.estados = [{ id: 'RJ', nome: "Rio de Janeiro" },
                      { id: 'MG', nome: "Minas Gerais" },
                      { id: 'SP', nome: "São Paulo" },
                      { id: 'ES', nome: "Espírito Santo" }];

    $scope.usuario = {id: '', nome: '', telefone: '', email: '', selected: false, estado: {}, senha: ''};

    $scope.findEstado = function (id) {
      return _.find($scope.estados, function(element){ return element.id === id; });
    };

    $scope.salvar = function () {
        if ($scope.usuario.id) {
            for (var index = 0; index < $scope.usuarios.length; index++) {
                if ($scope.usuario.id === $scope.usuarios[index].id) {
                    $scope.usuarios[index] = {
                      id: $scope.contador,
                      nome: $scope.usuario.nome,
                      telefone: $scope.usuario.telefone,
                      email: $scope.usuario.email,
                      estado: $scope.usuario.estado,
                      senha: $scope.usuario.senha,
                      selected: false
                    };
                    break;
                }
            }
        } else {
            $scope.contador += 1;
            $scope.usuarios.push({
              id: $scope.contador,
              nome: $scope.usuario.nome,
              telefone: $scope.usuario.telefone,
              email: $scope.usuario.email,
              estado: $scope.usuario.estado,
              senha: $scope.usuario.senha
            });
        }

        $scope.usuario = {};
        $scope.ordenar();
    }

    $scope.remover = function (element) {
       for (var index = 0; index < $scope.usuarios.length; index++) {
           if (element.id === $scope.usuarios[index].id) {
               $scope.usuarios.splice(index, 1);
               break;
           }
       }
       $scope.ordenar();
    }

    $scope.editar = function (element) {
       for (var index = 0; index < $scope.usuarios.length; index++) {
          $scope.usuarios[index].selected = false;
       }
       element.selected = true;
       $scope.usuario.id = element.id;
       $scope.usuario.nome = element.nome;
       $scope.usuario.telefone = element.telefone;
       $scope.usuario.email = element.email;
       $scope.usuario.estado = element.estado;
    }

    $scope.ordenar = function(){
      $scope.usuarios = _.sortBy($scope.usuarios, function(element){ return element.nome; });
    }

});