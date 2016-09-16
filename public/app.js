$(document).ready(function(){

  var $searchButton = $('.searchButton');
  $searchButton.on('click', makeRequest);
  $('.clear').on('click', clearBin);
  $(document).on('click','.artists', getArt);
  $(document).on('click','.artwork', getTracks);

  function makeRequest(userInput){
    var userInput = $('.searchText').val();
    $.get(`https://api.spotify.com/v1/search?q=${userInput}&type=artist`, function(data, status){
    showArtist(data.artists.items);
      })
    }
  function showArtist(artists){
    $('.textBin').empty();
    artists.forEach(function(result){
      var artistID = result.id;
      var name = document.createElement('h2');
      $(name).addClass('artists');
      name.id = artistID;
      name.innerHTML = result.name;
      $('.textBin').append(name);
      })
    }
    function getArt() {
      $.get('https://api.spotify.com/v1/artists/'+ this.id +'/albums', function(data,status) {
        showArt(data.items)
      })
    }
    function showArt(albums) {
      $('.albums').empty();
      var duplicates = [];
      albums.forEach(function(album){
        var ids = album.id;
        var results = album.name.toLowerCase();
        if(duplicates.indexOf(results) === -1) {
          duplicates.push(results)
          var albumUrl = album.images[1].url;
          $('<img class=artwork id='+ids+' src=' + albumUrl + '>').appendTo('.albums');
          $('.playlist-page').html('click an album to hear its tracks')
        }
      })
   }
   function getTracks(){
     $.get('https://api.spotify.com/v1/albums/'+this.id+'/tracks', function(data,status) {
       showTracks(data.items);
     })
   }
   function showTracks(tracks){
     $('.textBin').empty();
     tracks.forEach(function(track){
       var track_play = document.createElement('h2');
       track_play.innerHTML = '<iframe src="https://embed.spotify.com/?uri=' + track.uri + '" width="450" height="80" frameborder="0" allowtransparency="true"></iframe>';
       $('.textBin').append(track_play);
       })
     }
     function clearBin(){
       $('.textBin').empty();
     }
});
