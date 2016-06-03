$.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
  console.log(data.results);
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
