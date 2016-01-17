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
    
    $scope.addSong = function (track) {  
      Spotify.addPlaylistTracks('1249169823', '5xGlCjEssIbP9yVPd62uy2', track);  
    };
  }]);

 
