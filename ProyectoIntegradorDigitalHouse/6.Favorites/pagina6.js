window.addEventListener("load",  function(){

  if (sessionStorage.getItem("name")) {
    var elNombre = sessionStorage.getItem("name")
    var welcomeLoggedIn =  document.querySelector("#welcome");
    welcomeLoggedIn.innerHTML = "Welcome " + elNombre + "!";
  }

// guardo el arrayDePelisFavoritas que esta en localStorage
console.log(window.localStorage.getItem("favorita"));
arrayDePeliculasFavoritas = JSON.parse(window.localStorage.getItem("favorita"));

// checkeo que el array tenga por lo menos una peli favorita (un item)
if (arrayDePeliculasFavoritas.length>0) {
  // como arrayDePelisFavoritas es un array, necesito recorrerlo
  for (var i = 0; i < arrayDePeliculasFavoritas.length; i++) {
    // recorro el array para obtener cada ID y hago un fetch (AJAX) para obtener la data de cada peli
    var url = "https://api.themoviedb.org/3/movie/"+arrayDePeliculasFavoritas[i]+"?api_key=d72b8119ca0d802447ebd91bded10750&language=en"
    var urlImg = "https://image.tmdb.org/t/p/original"
    fetch(url)
        .then(function(respuesta) {
         return respuesta.json()
       })
        .then(function(pelicula) {
        for (var i = 0; i < arrayDePeliculasFavoritas.length; i++) {
         document.querySelector("ul#favoritas").innerHTML += "<li> <a href='../5.DetallePelicula/pagina5LoggedIn.html?idPelicula="+ pelicula.id + "'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + pelicula.poster_path + " 'uk-cover'> </a> </li>"
       }

        })
        .catch(function(error) {
        console.log("error "+ error)
        })

  }

} else {
  var ul = document.querySelector("section ul")

         var li;
         li = "<li>"
         li +=    "<a href='../2.ListadoDeGeneros/pagina2LoggedIn.html'></a>"
         li +=    "<h2> You don´t have any favorite movies! </h2>"
         li +=    "</a>"
         li += "</li>"
         // modifico el HTML del UL
         ul.innerHTML += li
}


})
