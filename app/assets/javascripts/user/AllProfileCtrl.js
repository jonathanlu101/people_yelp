angular.module("aight").controller("AllProfileCtrl",[
"$scope",
"userService",
"usersResponse",
function($scope,userService,usersResponse){
  $scope.users = usersResponse.data;
  
}]);
