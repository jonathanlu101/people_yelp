angular.module("aight").service('userService', ['$http','Upload',function($http,Upload){

  this.getAll = function(){
    return $http.get('api/users.json');
  };

  this.get = function(id){
    return $http.get('api/users/' + id + '.json');
  };

  this.update = function(user){
    return Upload.upload({
      url: 'api/users/' + user.id,
      method: 'PUT',
      data: user
    });
  }

  this.update1 = function(user){
    return $http.put('api/users/' + user.id, user);
  }

}]);
