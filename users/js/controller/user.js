angular.module('mainApp')
       .controller('usersController', function ($scope){
    $scope.counter = 3;
    $scope.users = new Array({
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

    $scope.user = {id: '', name: '', age: '', email: '', selected: false, gender: 'M', single: false};

    $scope.save = function () {
        if ($scope.user.id) {
            for (var index = 0; index < $scope.users.length; index++) {
                if ($scope.user.id === $scope.users[index].id) {
                    _.extend($scope.users[index], $scope.user)
                    $scope.users[index].selected = false;
                    break;
                }
            }
        } else {
            $scope.counter += 1;
            var element = $scope.user;
            _.extend(element, {id: $scope.counter});
            $scope.users.push(element);
        }

        $scope.user = {};
    }

    $scope.remove = function (item) {
       for (var index = 0; index < $scope.users.length; index++) {
           if (item.id === $scope.users[index].id) {
               $scope.users.splice(index, 1);
               break;
           }
       }
    }

    $scope.edit = function (item) {
       for (var index = 0; index < $scope.users.length; index++) {
          $scope.users[index].selected = false;
       }
       item.selected = true;
       _.extend($scope.user, item);
    }

    $scope.sort = function (field) {
       $scope.fieldFilter = field;
       $scope.ascFilter = !$scope.ascFilter;
    }

});