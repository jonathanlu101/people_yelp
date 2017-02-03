angular.module("aight").service('reviewService', ['$http',function($http){

  this.create = function(userId, review){
    return $http.post(`api/users/${userId}/reviews`,review);
  };

}]);
