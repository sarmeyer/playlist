$(document).ready(function(){

    var inputs = $('input')
    var userInput = inputs[0];
    var searchButton = inputs[1];
    var clear = inputs[2];
    var submit = inputs[3];

  $(searchButton).on('click', makeRequest);

  function makeRequest(userInput){
    $.get(`https://api.spotify.com/v1/search?q=Britney&type=artist`, function(data, status){
    getArtists(data.artists.items);
      })
    }

  function getArtists(results){
    console.log(results);
    results.forEach(function(result){
      var artists = result.name;
      $('#textBin').append('<p>' + artists + '</p>');
      })
    }


});
