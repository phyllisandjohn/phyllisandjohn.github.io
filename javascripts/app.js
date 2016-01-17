angular
  .module('requestApp', ['spotify'])
  .config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('b64ac87cd207424ab87eb317b9a25aa5');
    SpotifyProvider.setRedirectUri('http://phyllisandjohn.com/callback.html');
    SpotifyProvider.setScope('playlist-read-private');
  })
  .controller('MainController', ['$scope', 'Spotify', function ($scope, Spotify) {

    $scope.searchArtist = function () {
      Spotify.search($scope.searchartist, 'artist,track').then(function (data) {
        $scope.artists = data.artists.items;
      });
    };
  }]);

 
