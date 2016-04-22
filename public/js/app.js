angular.module('giphyApp', ['ui.router', 'firebase', 'angularMoment', 'ngClipboard'])
  .run(function($rootScope) {
      $rootScope.showTopSearch = false;
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/homeTmpl.html',
        controller: 'mainCtrl'
      })
      .state('giphy', {
        url: '/giphy/:genre',
        templateUrl: 'views/giphyTmpl.html',
        controller: 'giphyCtrl',
        resolve: {
          giphyData: function($stateParams, giphyService) {
            return giphyService.getGiphyInfo($stateParams.genre);
          }
        }
      })
      .state('favorites', {
        url: '/favorites',
        templateUrl: 'views/favoritesTmpl.html',
        controller: 'giphyCtrl',
        resolve: {
          giphyData: function($stateParams, giphyService) {

            return giphyService.getGiphyInfo($stateParams.genre);
          }
        }
      });
  });
