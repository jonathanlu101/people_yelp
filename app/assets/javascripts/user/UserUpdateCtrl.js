angular.module("aight").controller("UserUpdateCtrl",[
"$scope",
"userService",
"userResponse",
function($scope,userService,userResponse){

  $scope.user = userResponse.data;

  $scope.updateUser = function(user){
    userService.update(user).then(function(r){console.log(r);},function(r){console.log(r);});
  }

}]);
