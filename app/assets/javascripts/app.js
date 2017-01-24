angular.module('aight',['ui.router','templates','Devise']).config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
function($stateProvider,$urlRouterProvider,$locationProvider){
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
  });
  $urlRouterProvider.otherwise('home');

}]);
