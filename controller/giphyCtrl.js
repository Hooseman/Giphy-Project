angular.module('giphyApp').controller('giphyCtrl', function($scope, $rootScope, giphyService, dataService, giphyData, ngClipboard) {

  $rootScope.showTopSearch = true;

  if (giphyData) {
    $scope.giphyInfo = giphyData;
    $scope.picture = $scope.giphyInfo[0];
  }



  $scope.bigPicture = function(item) {
    console.log("item", item);
    $scope.picture = item;
  }

  $scope.copyImage = function(item) {
    ngClipboard.toClipboard(item.value.images.fixed_height.url);
  }



  // $scope.savedGiph =['hello', 'something'];
  // $scope.saveGiph = function(picture) {
  //   $scope.savedGiph = giphyService.saveGiph(picture);
  //   console.log($scope.savedGiph);
  // }

})
