window.onload = function() {


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

        document.querySelector("ul#popular").innerHTML += "<li> <a href='../5.DetallePelicula/pagina5.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </li>"

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

          document.querySelector("ul#top").innerHTML += "<li> <a href='../5.DetallePelicula/pagina5.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </li>"


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
          document.querySelector("ul#upcoming").innerHTML += "<li> <a href='../5.DetallePelicula/pagina5.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </li>"

        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })

// FORMULARIO
      var formulario = document.querySelector("form.login-form");
      // console.log(formulario);
// FORMULARIO ACTIVADO
      formulario.onsubmit = function(event) {
// NOMBRE
        var inputName = document.querySelector("input[name='name']");
        // console.log(inputName);
// MAIL
        var inputMail = document.querySelector("input[name='mail']");
        // console.log(inputMail);

// VALIDAR MAIL Y NOMBRE
        if (inputName.value == "" && inputMail.value == "") {
          event.preventDefault();
          inputName.classList.add("ERROR");
          inputMail.classList.add("ERROR");
          inputName.parentElement.querySelector("b").innerText = "Obligatorio"
          inputName.parentElement.querySelector("c").innerText = "Obligatorio"
        } else {
          // event.preventDefault()
          var usuario = seteadorDeUsuario(inputName.value,inputMail.value)
          var arrayDePelisFavoritas = []

          // var elLogIn = document.querySelector("li.li-home");
          // elLogIn.innerHTML += "<h1>" + Usuario.nombre + "</h1>"

          console.log(sessionStorage.getItem("name"));
          console.log(sessionStorage.getItem("email"));

          // var nuevoWelcome = document.querySelector("#welcomeA");
          // console.log(nuevoWelcome.value);
          // nuevoWelcome.innerHTML = "Welcome" + Usuario.nombre;


        }
      }
// PARA QUE SE SETEE
      function seteadorDeUsuario(name,email) {
        window.sessionStorage.setItem("name", name)
        window.sessionStorage.setItem("email", email)
     }

// ahora tengo que hacer un boton de log out porque sino siempre voy a tener estos datos
// getitem.remove


}




// favoritos
//
// se puede hacer con un modal
//
//  function


// cambiar a local storage
