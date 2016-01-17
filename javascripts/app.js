angular
  .module('requestApp', ['spotify'])
  .config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('b64ac87cd207424ab87eb317b9a25aa5');
    SpotifyProvider.setRedirectUri('http://phyllisandjohn.com/callback.html');
    SpotifyProvider.setScope('playlist-read-private');
  })
  .controller('MainController', ['$scope', 'Spotify', function ($scope, Spotify) {

    $scope.searchArtist = function () {
      Spotify.search($scope.searchartist, 'track').then(function (data) {
        $scope.tracks = data.tracks.items; 
      });
    };
    
    $scope.hoverTrack = function (track) {  
      angular.element(document).find("input").val(track);
      Spotify.search($scope.searchartist, 'track').then(function (data) {
      $scope.tracks = data.tracks.items; 
      });
    };    
    
  }]);

 
