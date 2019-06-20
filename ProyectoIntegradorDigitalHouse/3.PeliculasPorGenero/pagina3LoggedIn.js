window.onload =function(){

  if (sessionStorage.getItem("name")) {
    var elNombre = sessionStorage.getItem("name")
    var welcomeLoggedIn =  document.querySelector("#welcome");
    welcomeLoggedIn.innerHTML = "Welcome " + elNombre + "!";
  }

  var parametrosDeBusqueda = new URLSearchParams(window.location.search)
  var idDeGenero = parametrosDeBusqueda.get("idDeGenero")
  console.log(idDeGenero);
  var nombreDeGenero = parametrosDeBusqueda.get("nombreDeGenero")
  console.log(nombreDeGenero);
 document.querySelector("p.nombreG").innerHTML += "<p> " + nombreDeGenero + " </p>"

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=d6ff71a6bd2a94eaac5b986a9112d505&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres="+idDeGenero)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);

      var arrayPeliculasPorGenero= informacion.results
      console.log(arrayPeliculasPorGenero);

      for (var i = 0; i < arrayPeliculasPorGenero.length; i++) {

        var id = arrayPeliculasPorGenero[i].id
        var title = arrayPeliculasPorGenero[i].title
        var poster = arrayPeliculasPorGenero[i].poster_path
        document.querySelector("ul#genero").innerHTML += "<li> <a href='../5.DetallePelicula/pagina5LoggedIn.html?idPelicula="+ id+ "'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </a> </li>"




    }
    })
     .catch(function(error) {
       console.log("Error: " + error);
     })



}
