$(document).ready(function(){
  $.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
    $('.left').append('<div>').addClass('randomAlbum');
    for (var i = 0; i < 3; i++) {
      $('.randomAlbum').append(`<img class="albumImg" src='images/${data.results[i].cover_art}' />`);
      var idCount = 1;
      $('img').each(function() {
        $(this).attr('id', 'img' + idCount);
        idCount++;
        });
      }
    });
  });
    // for (var i = 0; i < data.results.length; i++) {
    //   $('#albums').append(`<img class="albumBin" src=images/${ data.results[i].cover_art}>`);
    //   var idCount2 = 1;
    //   $('img').each(function() {
    //     $(this).attr('id', 'alb' + idCount2);
    //     idCount2++;
    //           })
    //         }
    //       });
    //       $('.albumBin').on("click",function(index){
    //         console.log(data.results[index].title);
    //         $('#textBin').append('<p>' + data.results[index].title + '</p>');
    //       });
