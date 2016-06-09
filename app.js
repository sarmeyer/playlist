$(document).ready(function(){

    var $searchButton = $('#searchButton');
    // var clear = $inputs[2];
    // var submit = $inputs[3];

  $searchButton.on('click', makeRequest);
  $(document).on('click','.artists', getArt);


  function makeRequest(userInput){
    var userInput = $('#searchText').val();
    $.get(`https://api.spotify.com/v1/search?q=${userInput}&type=artist`, function(data, status){
    showArtist(data.artists.items);
      })
    }
  function showArtist(artists){
    $('#textBin').empty();
    artists.forEach(function(result){
      var artistID = result.id;
      var name = document.createElement('h2');
      $(name).addClass('artists');
      name.id = artistID;
      name.innerHTML = result.name;
      $('#textBin').append(name);
      })
    }
    function getArt(albums) {
      $.get('https://api.spotify.com/v1/artists/'+ this.id +'/albums', function(data,status) {
        showArt(data.items)
      })
    }
    function showArt(albums) {
      $('#albums').empty();
      var duplicates = [];
      albums.forEach(function(album){
        var results = album.name.toLowerCase();
        if(duplicates.indexOf(results) === -1) {
          duplicates.push(results)
          var albumUrl = album.images[1].url;
          $('#albums').append('<img src=' + albumUrl + '>');
        }
        console.log(duplicates);
      })
   }

});
