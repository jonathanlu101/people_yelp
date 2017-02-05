angular.module("aight").controller("EditProfileCtrl",[
"$scope",
"userService",
"userResponse",
function($scope,userService,userResponse){
  console.log(userResponse);
  $scope.user = userResponse.data;

  $scope.updateUser = function(user){

    userService.update(user).then(
      function(response){
        $scope.alerts = [{style: "alert-success", message: "Profile Updated"}];
      },function(response){
        $scope.alerts = [{style: "alert-danger", message: "Profile Update Failed"}];
      });
  }

}]);
