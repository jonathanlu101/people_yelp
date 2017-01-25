angular.module("aight").service('userService', ['$http',function($http){

  this.getAll = function(){
    return $http.get('api/users.json');
  };

  this.get = function(id){
    return $http.get('api/users/' + id + '.json');
  };

}]);
