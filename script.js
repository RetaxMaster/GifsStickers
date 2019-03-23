$(document).ready(function () {

  function searchGifsAndStickers(q, limit, path){
    var urlBase = "http://api.giphy.com";

    var data = {
      api_key : "oQzrxLTHOYVfFFTwIiHE5XHI9VTSaYei",
      q : q,
      limit : limit
    }

    var url = urlBase + path;

    $.getJSON(url, data, function (res) {
      $("#gifs-container .gifs").remove();
      $(res.data).each(function () {
        var urlGif = this.images.original.url;
        var gif = $('<div class="gifs col-lg-3 col-md-3 col-sm-4 col-xs-12"><img src="' + urlGif + '" alt="Gif"></div>');
        $("#gifs-container").append(gif);
      });
      $("#Search").val("");
    });
  }

  $("#form-search").on("submit", function (e) {
    e.preventDefault();
  });

  $("#searchGifs").on("click", function () {
    var q = $("#Search").val();
    if (q == "")
      alert("¡Escribe algo!");
    else
      searchGifsAndStickers(q, 5, "/v1/gifs/search");
  });

  $("#searchStickers").on("click", function () {
    var q = $("#Search").val();
    if (q == "")
      alert("¡Escribe algo!");
    else
      searchGifsAndStickers(q, 5, "/v1/stickers/search");
  });

  searchGifsAndStickers(null, 5, "/v1/gifs/trending");

});
