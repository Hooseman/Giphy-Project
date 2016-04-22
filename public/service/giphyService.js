angular.module('giphyApp').service('giphyService', function($http, $q) {
  var baseUrl = 'http://api.giphy.com/v1/gifs/search?';
  var apiKey = '&api_key=dc6zaTOxFJmzC';

  this.getGiphyInfo = function(genre) {

    return $http({
      method: 'GET',
      url: baseUrl + 'q=' + genre + apiKey
    }).then(function(response) {
      return response.data.data;
    })
  }

  var savedArray = [];
  this.saveGiph = function(picture) {
    savedArray.push(picture);
    console.log(savedArray);
    return savedArray;
  }
})
