window.onload = function() {

if (sessionStorage.getItem("name")) {
  var elNombre = sessionStorage.getItem("name")
  var welcomeLoggedIn =  document.querySelector("#welcome");
  welcomeLoggedIn.innerHTML = "Welcome " + elNombre + "!";


}

// FETCH DE PELÍCULAS POPULARES
fetch("https://api.themoviedb.org/3/movie/popular?api_key=d6ff71a6bd2a94eaac5b986a9112d505&page=1")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
//       console.log(informacion);
// console.log("popular");
    var arrayPeliculas = informacion.results
    // console.log(arrayPeliculas);

    for (var i = 0; i < arrayPeliculas.length; i++) {
      var id = arrayPeliculas[i].id
      var title = arrayPeliculas[i].title
      var poster = arrayPeliculas[i].poster_path

      document.querySelector("ul#popular").innerHTML += "<li> <a href='../5.DetallePelicula/pagina5LoggedIn.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </li>"

    }

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

// FETCH DE PELÍCULAS CON MAYOR PUNTAJE

  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d6ff71a6bd2a94eaac5b986a9112d505&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
//         console.log(informacion);
// console.log("ranking");
      var arrayPeliculas = informacion.results
      // console.log(arrayPeliculas);

      for (var i = 0; i < arrayPeliculas.length; i++) {
        var id = arrayPeliculas[i].id
        var title = arrayPeliculas[i].title
        var poster = arrayPeliculas[i].poster_path

        document.querySelector("ul#top").innerHTML += "<li> <a href='../5.DetallePelicula/pagina5LoggedIn.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </li>"


      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })

// FETCH DE PELÍCULAS A ESTRENAR

  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=d6ff71a6bd2a94eaac5b986a9112d505&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
//         console.log(informacion);
// console.log("estrenos");
      var arrayPeliculas = informacion.results
      // console.log(arrayPeliculas);

      for (var i = 0; i < arrayPeliculas.length; i++) {
        var id = arrayPeliculas[i].id
        var title = arrayPeliculas[i].title
        var poster = arrayPeliculas[i].poster_path
// console.log("https://image.tmdb.org/t/p/w500" + poster);
        document.querySelector("ul#upcoming").innerHTML += "<li> <a href='../5.DetallePelicula/pagina5LoggedIn.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </li>"

      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })


}
