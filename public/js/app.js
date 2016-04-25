angular.module('giphyApp', ['ui.router', 'firebase', 'angularMoment', 'ngClipboard'])
  .run(function($rootScope) {
      $rootScope.showTopSearch = false;
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'public/views/loginTmpl.html',
        controller: 'loginCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'public/views/homeTmpl.html',
        controller: 'mainCtrl'
      })
      .state('giphy', {
        url: '/giphy/:genre',
        templateUrl: 'public/views/giphyTmpl.html',
        controller: 'giphyCtrl',
        resolve: {
          giphyData: function($stateParams, giphyService) {
            return giphyService.getGiphyInfo($stateParams.genre);
          }
        }
      })
      .state('favorites', {
        url: '/favorites',
        templateUrl: 'public/views/favoritesTmpl.html',
        controller: 'giphyCtrl',
        resolve: {
          giphyData: function($stateParams, giphyService) {

            return giphyService.getGiphyInfo($stateParams.genre);
          }
        }
      });
  });
