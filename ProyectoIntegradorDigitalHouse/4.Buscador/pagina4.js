window.addEventListener("load", function(){

 var urlSearchParams = new URLSearchParams(window.location.search)
 var buscador = urlSearchParams.get('buscador')
 console.log(buscador);


 fetch("https://api.themoviedb.org/3/search/movie?api_key=d6ff71a6bd2a94eaac5b986a9112d505&query="+ buscador +"&page=1&include_adult=false")
   .then(function(response){
     return response.json();
   })
   .then(function(objetoLiteral) {
     console.log(objetoLiteral);

     //GUARDO EL ARRAY DE PELICULAS
     var arrayDePeliculas = objetoLiteral.results
     // CAPTURO EL UL
     var ul = document.querySelector('section ul')

     var li = ""

     // PARTE FIJA DE LA URL DE LA IMAGEN
     var urlImg = "https://image.tmdb.org/t/p/original"
     // RECORRO EL ARRAY DE PELICULAS

     //en caso de que no se encuentre ningun resultado:
     if(arrayDePeliculas.length == 0){
     document.querySelector('section ul').innerHTML="<h2 class='resultadoError'> There are no results available. Please try again.</h2>"
   }
     for (var i = 0; i < arrayDePeliculas.length; i++) {


         li = "<li>"
         li +="<a href='../5.DetallePelicula/pagina5.html?idPelicula="+arrayDePeliculas[i].id+"'>"
         li +=   "<img id='posters' src='"+urlImg + arrayDePeliculas[i].poster_path+"' style='width:300px;'>"
         li +="</a>"
         li += "</li>"

         ul.innerHTML += li

     }
   })

   .catch(function(error) {
     console.log("the error was: " + error);
   })

})
