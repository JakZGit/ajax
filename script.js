$(document).ready(function() {

   $("#search").on("submit", function(e) {
       e.preventDefault();

       $.getJSON("http://www.omdbapi.com/?", {
               t: $('input[name=t]').val(),
           },
          function(response) {
               $("#movie-title").html(response.Title);
               $("#poster").attr("src", response.Poster);
               console.log(response);
           });
   });
});


function onKeyUp() {
  
     $.getJSON("http://www.omdbapi.com/?", {
               t: $('input[name=t]').val(),
           },
          function(response) {
               $("#movie-title").html(response.Title);
               $("#poster").attr("src", response.Poster);
               $("#actors").html("Actors: " + response.Actors);
  		       $("#directors").html("Directors: " + response.Director);
               console.log(response);
               console.log(response.Actors)
           });;
}