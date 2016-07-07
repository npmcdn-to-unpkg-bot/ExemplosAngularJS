var app = angular.module('mainApp', []);

app.controller('contactsController', function ($scope){
    $scope.counter = 3;
    $scope.contacts = new Array({
                                 id: 1, 
                                 name: "Marcos Lisboa", 
                                 age: 25, 
                                 email: "marcosplisboa@live.com",
                                 selected: false,
                                 gender: 'M',
                                 single: true
                               }, {
                                 id: 2, 
                                 name: "Geraldo Neto", 
                                 age: 24, 
                                 email: "geraldo@live.com",
                                 selected: false,
                                 gender: 'M',
                                 single: false
                               }, {
                                 id: 3, 
                                 name: "Priscila", 
                                 age: 25, 
                                 email: "priscila@live.com",
                                 selected: false,
                                 gender: 'F',
                                 single: true
                               });

    $scope.contact = {id: '', name: '', age: '', email: '', selected: false, gender: 'M', single: false};

    $scope.save = function () {
        if ($scope.contact.id) {
            for (var index = 0; index < $scope.contacts.length; index++) {
                if ($scope.contact.id === $scope.contacts[index].id) {
                    $scope.contacts[index] = {
                      id: $scope.counter, 
                      name: $scope.contact.name, 
                      age: $scope.contact.age, 
                      email: $scope.contact.email,
                      gender: $scope.contact.gender,
                      single: $scope.contact.single,
                      selected: false
                    };
                    break;
                }
            }
        } else {
            $scope.counter += 1; 
            $scope.contacts.push({
              id: $scope.counter, 
              name: $scope.contact.name, 
              age: $scope.contact.age, 
              email: $scope.contact.email,
              gender: $scope.contact.gender,
              single: $scope.contact.single
            });
        }

        $scope.contact = {};
        $scope.sort();
    }

    $scope.remove = function (item) {
       for (var index = 0; index < $scope.contacts.length; index++) {
           if (item.id === $scope.contacts[index].id) {
               $scope.contacts.splice(index, 1);
               break;
           }
       }
       $scope.sort();
    }

    $scope.edit = function (item) {
       for (var index = 0; index < $scope.contacts.length; index++) {
          $scope.contacts[index].selected = false;
       }
       item.selected = true;
       $scope.contact.id = item.id;
       $scope.contact.name = item.name;
       $scope.contact.age = item.age;
       $scope.contact.email = item.email;
       $scope.contact.gender = item.gender;
       $scope.contact.single = item.single;
    }

    $scope.sort = function(){
      $scope.contacts = _.sortBy($scope.contacts, function(item){ return item.name; });
    }

}); 