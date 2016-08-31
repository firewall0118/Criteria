var app = angular.module('flapperNews', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'home/_home.html',
        controller: 'Mainctrl'
      })

      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'post/_posts.html',
        controller: 'PostsCtrl'
      })

    $urlRouterProvider.otherwise('home');
  }
]);