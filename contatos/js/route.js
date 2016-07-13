angular.module('mainApp')
       .config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    controller:'contactsController',
    templateUrl:'list.html'
  });

  $routeProvider.when('/new', {
    controller:'contactsController',
    templateUrl:'form.html'
  });

  $routeProvider.when('/edit', {
    controller:'contactsController',
    templateUrl:'form.html'
  });

  $routeProvider.otherwise({redirectTo: '/'});

}]);