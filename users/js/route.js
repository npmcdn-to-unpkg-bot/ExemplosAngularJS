angular.module('mainApp').config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    controller:'usersController',
    templateUrl:'views/user/list.html'
  });

  $routeProvider.when('/new', {
    controller:'usersController',
    templateUrl:'views/user/form.html'
  });

  $routeProvider.when('/edit/:id', {
    controller:'usersController',
    templateUrl:'views/user/form.html'
  });

  $routeProvider.otherwise({redirectTo: '/'});

}]);