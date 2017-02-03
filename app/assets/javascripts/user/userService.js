angular.module("aight").service('userService', ['$http','Upload',function($http,Upload){

  this.getAll = function(){
    return $http.get('api/users');
  };

  this.get = function(id){
    return $http.get(`api/users/${id}`);
  };

  this.update = function(user){
    return Upload.upload({
      url: `api/users/${user.id}`,
      method: 'PUT',
      data: user
    });
  }

}]);
