window.onload= function (){

  if (sessionStorage.getItem("name")) {
    var elNombre = sessionStorage.getItem("name")
    var welcomeLoggedIn =  document.querySelector("#welcome");
    welcomeLoggedIn.innerHTML = "Welcome " + elNombre + "!";
  }

var arrayDePelisFavoritas = []
var imgPath = "https://image.tmdb.org/t/p/original"
var idPelicula = new URLSearchParams (window.location.search).get("idPelicula")


//tengo que poner una variable que tenga todas las pelis porque sino me va a aparecer siempre la misma peli
  fetch(" https://api.themoviedb.org/3/movie/" + idPelicula + "?api_key=d6ff71a6bd2a94eaac5b986a9112d505&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      // console.log(informacion);

      var detallesPeliculas = informacion
      // console.log(detallesPeliculas);


        var id = detallesPeliculas.id
        var titulo = detallesPeliculas.original_title

        var arrayDeGeneros = detallesPeliculas.genres
        var genero = " -";
        for (var i = 0; i < arrayDeGeneros.length; i++) {
          genero += arrayDeGeneros[i].name + " "
        }

        var idioma = detallesPeliculas.original_language
        var sinopsis = detallesPeliculas.overview
        var estreno = detallesPeliculas.release_date
        var poster = "https://image.tmdb.org/t/p/w500" + detallesPeliculas.poster_path



                document.querySelector(".detalle").innerHTML+= "<p class='titulo'>"+ titulo + "</p>" + "<p class='genero'>"+ genero + "</p>" + "<p class='idioma'>"+ "-Language: " +idioma + "</p>" + "<p class='estreno'>"+"-"+ estreno + "</p>" + "<p class='sinopsis'>"+ sinopsis + "</p>"  + "<img class=uk-align-center src=" + poster + " 'uk-cover'>"


    })
    .catch(function(error) {
      console.log("Error: " + error);
    })



//nuevo fetch a la url que trae trailers, primero hago una etiqueta <iframe> en el html
  fetch("https://api.themoviedb.org/3/movie/" + idPelicula + "/videos?api_key=d6ff71a6bd2a94eaac5b986a9112d505&language=en-US")
      .then (function(response) {
        return response.json();
      })
      .then (function(information){
        // console.log(information);
        // console.log(information.results);
        var arrayDePeliculas = information.results
        var key = arrayDePeliculas[0].key
        // console.log(key);
        document.querySelector("div.trailer iframe").src += key
    })
    .catch(function(error){
      console.log("There was an error: " + error);
    })

//nuevo fetch para las recomendaciones
     fetch("https://api.themoviedb.org/3/movie/" + idPelicula + "/recommendations?api_key=d6ff71a6bd2a94eaac5b986a9112d505&page=1")
        .then (function(response) {
          return response.json();
        })
        .then (function(information){
          // console.log(information);
          // console.log(information.results);
          var arrayDePeliculas = information.results

         for (var i = 0; i < arrayDePeliculas.length; i++) {
            var id = arrayDePeliculas[i].id
            var poster = arrayDePeliculas[i].poster_path
            document.querySelector("ul#popular").innerHTML += "<p><a href='pagina5.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </a></p>"
      }
    })


      .catch(function(error){
        console.log("There was an error: " + error);
      })

      // function agregarAFavoritos(id) {
      //
      //   alert("me click")
      //
      //   if (arrayDePelisFavoritas.indexOf(id) === -1) {
      //     arrayDePelisFavoritas.push(id)
      //     window.localStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
      //   } else {
      //     arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(id),1,id)
      //     window.localStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
      //   }
      // }

// RECOMENDACIONES
    var btn = document.querySelector(".botonRecomendaciones");
    btn.onclick= function(){
       document.querySelector("ul#popular.uk-slideshow-items").style.display= "block";
    }

    console.log(idPelicula);


    var btnStar = document.querySelector(".estrella");
    console.log(btnStar);
    btnStar.onclick = function() {
      alert("You just added this movie to your favorite list!")
      if (arrayDePelisFavoritas.indexOf(idPelicula) === -1) {
        arrayDePelisFavoritas.push(idPelicula)
        localStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
      } else {
        arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(idPelicula),1,idPelicula)
        localStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
      }
    }

    console.log(window.localStorage.getItem("favorita"));


    // if (inputName.value == "" && inputMail.value == "") {
    //   event.preventDefault();
    //   inputName.classList.add("ERROR");
    //   inputMail.classList.add("ERROR");
    //   inputName.parentElement.querySelector("b").innerText = "Obligatorio"
    //   inputName.parentElement.querySelector("c").innerText = "Obligatorio"
    // } else {
    //   // event.preventDefault()
    //   var usuario = seteadorDeUsuario(inputName.value,inputMail.value)
    //   var arrayDePelisFavoritas = []
    //
    //   // var elLogIn = document.querySelector("li.li-home");
    //   // elLogIn.innerHTML += "<h1>" + Usuario.nombre + "</h1>"
    //
    //   console.log(sessionStorage.getItem("name"));
    //   console.log(sessionStorage.getItem("email"));
    //
    //   // var nuevoWelcome = document.querySelector("#welcomeA");
    //   // console.log(nuevoWelcome.value);
    //   // nuevoWelcome.innerHTML = "Welcome" + Usuario.nombre;
    //
    //
    // }

   //  function agregarAFavoritos(id) {
   //    alert("me click")
   //    // if (arrayDePelisFavoritas.indexOf(id) === -1) {
   //    //   arrayDePelisFavoritas.push(id)
   //    //   window.localStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
   //    // } else {
   //    //   arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(id),1,id)
   //    //   window.localStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
   //    // }
   // }

}
