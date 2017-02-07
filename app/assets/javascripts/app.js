angular.module('aight',
['ui.router',
'templates',
'Devise',
'ngFileUpload',
'ui.select',
'smart-table'])
.config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
'AuthProvider',
function($stateProvider,$urlRouterProvider,$locationProvider,AuthProvider){

  AuthProvider.loginPath('/auth/users/sign_in.json');
  AuthProvider.logoutPath('/auth/users/sign_out.json');
  AuthProvider.registerPath('/auth/users.json');

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
  .state('allProfile', {
    url: '/everyone',
    templateUrl: 'user/_allProfile.html',
    controller: 'AllProfileCtrl',
    controllerAs: 'vm',
    resolve: {
      usersResponse: ["userService",function(userService){
        return userService.getAll();
      }]
    }
  })
  .state('viewProfile', {
    url: '/view-profile/{id}',
    templateUrl: 'user/_viewProfile.html',
    controller: 'ViewProfileCtrl',
    resolve: {
      userResponse: ["$stateParams","userService",function($stateParams,userService){
        return userService.get($stateParams.id,"reviews");
      }]
    }
  })
  .state('editProfile', {
    url: '/edit-profile',
    templateUrl: 'user/_editProfile.html',
    controller: 'EditProfileCtrl',
    resolve: {
      userResponse: ["Auth","userService",function(Auth,userService){
        return Auth.currentUser().then(function(user){
          return userService.get(user.id);
        })
      }]
    }
  });
  $urlRouterProvider.otherwise('home');

}]);
