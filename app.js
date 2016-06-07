$(document).ready(function(){
  $.get("https://api.spotify.com/v1/artists/26dSoYclwsYLMAKD3tpOr4/albums", function(data, status){
    var albums = data.items;
    console.log(data.items);
      albums.forEach(function(item){
          $('.left').append('<img class="albumImg" src=' + item.images[1].url + '>');
            var idCount = 1;
            $('img').each(function() {
              $(this).attr('id', 'img' + idCount);
              idCount++;
              })
            })

            //********playlist Page********//
        albums.forEach(function(item){
      $('#albums').append('<img class="albumBin" src=' + item.images[1].url + '>');
    })
      //   $('.albumBin').on("click",function(){
      //   //   for (var j = 0; j < data.results.length; j++) {
      //   //   if (data.results[j].id == this.id) {
      //   //       $('#textBin').append(`<p>${data.results[j].artist}: ${ data.results[j].title}</p>`);
      //   //   }
      //   // }
      // })
      $('#clear').on('click',function(){
        $('#textBin').empty()
      })
      $('#submit').on('click',function(){
        $.post("https://lit-fortress-6467.herokuapp.com/post", function(data, status){
        console.log(data);
          });
        });
      })
    });
