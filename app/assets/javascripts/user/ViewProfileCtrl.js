angular.module("aight").controller("ViewProfileCtrl",[
"$scope",
"userService",
"userResponse",
function($scope,userService,userResponse){
  $scope.user = userResponse.data;
}]);
