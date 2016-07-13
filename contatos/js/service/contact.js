angular.module('mainApp').factory('contactAPI', function($http, config){
   var _findAll = function(){
        return $http.get(config.baseURL + "/contact")
   };
   var _findById = function(id){
        return $http.get(config.baseURL + "/contact/" + id);
   };
   var _create = function(contact){
        return $http.post(config.baseURL + "/contact/", contact);
   };
   var _update = function(contact, id){
        return $http.put(config.baseURL + "/contact/:id" + id,  contact);
   };
   var _delete = function(id){
        return $http.delete(config.baseURL + "/contact/:id", id);
   };

   return {
       findAll : _findAll,
       findById: _findById,
       create : _create,
       update : _update,
       delete : _delete
   };
});