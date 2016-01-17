var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('4df56842935f4881bf3fa7f6592fed99');

// get Elvis' albums, using Promises through Promise, Q or when
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data);
  }, function(err) {
    console.error(err);
  });
