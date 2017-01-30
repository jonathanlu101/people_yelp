angular.module('aight',['ui.router','templates','Devise','ngFileUpload']).config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
'AuthProvider',
function($stateProvider,$urlRouterProvider,$locationProvider,AuthProvider){

  AuthProvider.loginPath('/auth/users/sign_in.json');
  AuthProvider.logoutPath('/auth/users/sign_out.json');
  AuthProvider.registerPath('/auth/users/sign_up.json');

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
    url: '/everyone',
    templateUrl: 'user/_allUser.html',
    controller: 'AllUserCtrl',
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
        return userService.get($stateParams.id);
      }]
    }
  })
  .state('editProfile', {
    url: '/edit-profile',
    templateUrl: 'user/_editProfile.html',
    controller: 'EditProfileCtrl',
    resolve: {
      userOriginal: ["Auth",function(Auth){
        return Auth.currentUser();
      }]
    }
  });
  $urlRouterProvider.otherwise('home');

}]);
