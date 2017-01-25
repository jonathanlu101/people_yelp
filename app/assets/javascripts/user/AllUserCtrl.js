angular.module("aight").controller("AllUserCtrl",[
"$scope",
"userService",
"usersResponse",
function($scope,userService,usersResponse){
  $scope.users = usersResponse.data;
}]);
