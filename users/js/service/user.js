angular.module('mainApp').factory('userAPI', function($http, config){
   var _findAll = function(){
        return $http.get(config.baseURL + "/users")
   };
   var _findById = function(id){
        return $http.get(config.baseURL + "/users/" + id);
   };
   var _create = function(user){
        return $http.post(config.baseURL + "/users", user);
   };
   var _update = function(user, id){
        return $http.put(config.baseURL + "/users/" + id,  user);
   };
   var _delete = function(id){
        return $http.delete(config.baseURL + "/users/" + id);
   };

   return {
       findAll : _findAll,
       findById: _findById,
       create : _create,
       update : _update,
       delete : _delete
   };
});