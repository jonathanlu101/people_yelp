angular.module("aight").controller("EditProfileCtrl",[
"$scope",
"userService",
"userOriginal",
function($scope,userService,userOriginal){
  var user = angular.copy(userOriginal);
  $scope.user = user;

  $scope.updateUser = function(user){
    userService.update(user).then(
      function(response){
        $scope.alerts = [{style: "alert-success", message: "Profile Updated"}];
      },function(response){
        $scope.alerts = [{style: "alert-success", message: "Profile Update Failed"}];
      });
  }

}]);
