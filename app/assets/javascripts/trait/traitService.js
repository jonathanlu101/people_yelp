angular.module("aight").service('traitService', ['$http',function($http){

  this.getAll = function(){
    return $http.get(`api/traits`);
  };

}]);
