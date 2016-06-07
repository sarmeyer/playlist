$(document).ready(function(){
  $.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
    $('.left').append('<div>').addClass('randomAlbum');
    for (var i = 0; i < 3; i++) {
        var images = ['21.jpg', 'ghost_in_the_machine.jpg', 'red.jpg', 'the_division_bell.jpg', 'thriller.jpg'];
            $('<img class="albumImg" src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.randomAlbum');
            var idCount = 1;
            $('img').each(function() {
        $(this).attr('id', 'img' + idCount);
        idCount++;
        });
      }
      for (var i = 0; i < data.results.length; i++) {
        $('#albums').append(`<img class="albumBin" id=${data.results[i].id} src=images/${data.results[i].cover_art}>`);
        }
        $('.albumBin').on("click",function(){
          for (var j = 0; j < data.results.length; j++) {
          if (data.results[j].id == this.id) {
              $('#textBin').append(`<p>${data.results[j].artist}: ${ data.results[j].title}</p>`);
          }
        }
      })
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
