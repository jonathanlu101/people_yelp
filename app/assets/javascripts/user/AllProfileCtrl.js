angular.module("aight").controller("AllProfileCtrl",[
"usersResponse",
function(usersResponse){
  var vm = this;
  vm.users = usersResponse.data;

}]);
