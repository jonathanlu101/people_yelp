angular.module("aight").controller("EditProfileCtrl",[
"$scope",
"userService",
"userResponse",
"Auth",
function($scope,userService,userResponse,Auth){
  $scope.user = userResponse.data;

  $scope.updateUser = function(user){

    userService.update(user).then(
      function(response){
        $scope.alerts = [{style: "alert-success", message: "Profile Updated"}];
        Auth.currentUser();
      },function(response){
        $scope.alerts = [{style: "alert-danger", message: "Profile Update Failed"}];
      });
  }

}]);
