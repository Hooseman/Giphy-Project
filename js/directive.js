angular.module('giphyApp')
  .directive('clearText', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('keypress', function(e) {
          if (e.which === 13) {
            this.value = '';
          }
        })
      }
    }
  })
angular.module('giphyApp')
  .directive('giphyHeader', function() {
    return {
      restrict: 'E',
      template: '<h3>Search For Giphy</h3>'
    }
  })
