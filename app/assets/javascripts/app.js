angular.module('aight',['ui.router','templates','Devise','ngFileUpload']).config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
'AuthProvider',
function($stateProvider,$urlRouterProvider,$locationProvider,AuthProvider){

  AuthProvider.loginPath('/auth/users/sign_in.json');
  AuthProvider.logoutPath('/auth/user/sign_out.json');
  AuthProvider.registerPath('/auth/user/sign_up.json');

  $locationProvider.html5Mode(true);

  $stateProvider.state('home',{
    url: '/home',
    templateUrl: 'home/_home.html',
    controller: 'HomeCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'auth/_login.html',
    controller: 'AuthCtrl',
    onEnter: ['$state', 'Auth', function($state, Auth) {
      Auth.currentUser().then(function (){
        $state.go('home');
      })
    }]
  })
  .state('register', {
    url: '/register',
    templateUrl: 'auth/_register.html',
    controller: 'AuthCtrl',
    onEnter: ['$state', 'Auth', function($state, Auth) {
      Auth.currentUser().then(function (){
        $state.go('home');
      })
    }]
  })
  .state('allUser', {
    url: '/users',
    templateUrl: 'user/_allUser.html',
    controller: 'AllUserCtrl',
    resolve: {
      usersResponse: ["userService",function(userService){
        return userService.getAll();
      }]
    }
  })
  .state('userUpdate', {
    url: '/users/{id}/edit',
    templateUrl: 'user/_userUpdate.html',
    controller: 'UserUpdateCtrl',
    resolve: {
      userResponse: ["$stateParams","userService",function($stateParams,userService){
        return userService.get($stateParams.id);
      }]
    }
  });
  $urlRouterProvider.otherwise('home');

}]);
