angular.module('giphyApp').controller('giphyCtrl', function($scope, $rootScope, giphyService, dataService, giphyData) {

  $rootScope.showTopSearch = true;

  if (giphyData) {
  $scope.giphyInfo = giphyData;
  }

  $scope.bigPicture = function(item) {
    console.log("item", item);
    $scope.picture = item;
  }

  // $scope.savedGiph =['hello', 'something'];
  // $scope.saveGiph = function(picture) {
  //   $scope.savedGiph = giphyService.saveGiph(picture);
  //   console.log($scope.savedGiph);
  // }

})
