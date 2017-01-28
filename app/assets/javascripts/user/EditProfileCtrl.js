angular.module("aight").controller("EditProfileCtrl",[
"$scope",
"userService",
"userOriginal",
function($scope,userService,userOriginal){
  var user = angular.copy(userOriginal);
  $scope.user = user;

  $scope.updateUser = function(user){
    userService.update(user).then(function(r){console.log(r);},function(r){console.log(r);});
  }

}]);
