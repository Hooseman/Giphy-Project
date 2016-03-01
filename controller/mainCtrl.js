angular.module('giphyApp').controller('mainCtrl', function($scope, $interval, $stateParams, $rootScope, giphyService, $firebaseArray, dataService, $state) {
  var myFirebaseRef = new Firebase('https://giphyapp.firebaseio.com');

  $rootScope.showTopSearch = false;

  $scope.giphs = $firebaseArray(myFirebaseRef);
  console.log($scope.giphs)

  $scope.saveGiph = function(picture) {
    console.log("pic", picture);
    $scope.giphs.$add({
      value: picture,
      date: (new Date()).toString()
    });
  };

  $scope.deleteImage = function(picture) {
    var removeRef = new Firebase('https://giphyapp.firebaseio.com/' + picture.$id);
    removeRef.remove();
  }
  var randomHashTags = [
    'dog',
    'fantastic',
    'funny',
    'crazy',
    'stupid',
    'laugh',
    'ducks',
    'silly',
    'fail',
    'scare'
  ];
  function getRandomInt() {
    var max = randomHashTags.length - 1, min = 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  $scope.suggestionOne = randomHashTags[getRandomInt()];
  var one = $interval(function() {
    $scope.suggestionOne = randomHashTags[getRandomInt()];
  }, 6000);

  $scope.suggestionTwo = randomHashTags[getRandomInt()];
  var one = $interval(function() {
    $scope.suggestionTwo = randomHashTags[getRandomInt()];
  }, 4000);

  $scope.suggestionThree = randomHashTags[getRandomInt()];
  var one = $interval(function() {
    $scope.suggestionThree = randomHashTags[getRandomInt()];
  }, 5000);

  $scope.goToSuggestion = function(suggestion) {
    $state.go('giphy', {genre: suggestion});
  }



})
