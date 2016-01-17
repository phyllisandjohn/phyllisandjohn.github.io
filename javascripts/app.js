var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('b64ac87cd207424ab87eb317b9a25aa5');

// get Elvis' albums, using Promises through Promise, Q or when
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data);
  }, function(err) {
    console.error(err);
  });

 
