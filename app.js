$(document).ready(function(){
  $.get("https://api.spotify.com/v1/artists/26dSoYclwsYLMAKD3tpOr4/albums", function(data, status){
    var albums = data.items;
    console.log(data.items);
    var imageArray = [];
        for (var i = 0; i < albums.length; i++) {
            imageArray.push(albums[i].images[1].url);
            }
      for (var i = 0; i < 3; i++) {
          $('.left').append('<img class="albumImg" src=' + imageArray[Math.floor(Math.random() * imageArray.length)] + '>');
            var idCount = 1;
            $('img').each(function() {
              $(this).attr('id', 'img' + idCount);
              idCount++;
              })
            }
            //********playlist Page********//
        albums.forEach(function(item){
      $('#albums').append('<img class="albumBin" id=' + item.id + ' src=' + item.images[1].url + '>');
      $('.albumBin').on("click",function(){
        if(item.id === this.id) {
        $('#textBin').append('<p>' + item.name + '</p>');
          }
      })
      $('#clear').on('click',function(){
        $('#textBin').empty()
          })
        });
      })
    });
