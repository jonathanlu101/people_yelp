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
  });
  $urlRouterProvider.otherwise('home');

}]);
