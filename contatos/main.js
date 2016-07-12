var app = angular.module('mainApp', ["ngRoute"]);
app.config(['$routeProvider', function($routeProvider){
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
app.controller('contactsController', function ($scope){
    $scope.counter = 3;
    $scope.contacts = new Array({
                                 id: 1,
                                 name: "Marcos Lisboa",
                                 age: 25,
                                 email: "marcosplisboa@live.com",
                                 selected: false,
                                 gender: 'M',
                                 single: true,
                                 ammount: 450.00,
                                 birthday: new Date("July 13, 1991")
                               }, {
                                 id: 2,
                                 name: "Geraldo Neto",
                                 age: 24,
                                 email: "geraldo@live.com",
                                 selected: false,
                                 gender: 'M',
                                 single: false,
                                 ammount: 450.00,
                                 birthday: new Date("June 10, 1991")
                               }, {
                                 id: 3,
                                 name: "Priscila Dias",
                                 age: 19,
                                 email: "priscila@live.com",
                                 selected: false,
                                 gender: 'F',
                                 single: true,
                                 ammount: 450.00,
                                 birthday: new Date("April 8, 1991")
                               });

    $scope.contact = {id: '', name: '', age: '', email: '', selected: false, gender: 'M', single: false};

    $scope.save = function () {
        if ($scope.contact.id) {
            for (var index = 0; index < $scope.contacts.length; index++) {
                if ($scope.contact.id === $scope.contacts[index].id) {
                    _.extend($scope.contacts[index], $scope.contact)
                    $scope.contacts[index].selected = false;
                    break;
                }
            }
        } else {
            $scope.counter += 1;
            var element = $scope.contact;
            _.extend(element, {id: $scope.counter});
            $scope.contacts.push(element);
        }

        $scope.contact = {};
    }

    $scope.remove = function (item) {
       for (var index = 0; index < $scope.contacts.length; index++) {
           if (item.id === $scope.contacts[index].id) {
               $scope.contacts.splice(index, 1);
               break;
           }
       }
    }

    $scope.edit = function (item) {
       for (var index = 0; index < $scope.contacts.length; index++) {
          $scope.contacts[index].selected = false;
       }
       item.selected = true;
       _.extend($scope.contact, item);
    }

    $scope.sort = function (field) {
       $scope.fieldFilter = field;
       $scope.ascFilter = !$scope.ascFilter;
    }

});