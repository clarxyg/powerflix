/*var movie1 = "Kingsman"
var movie2 = "Ilha do medo"
var movie3 = "Sociedade dos poetas mortos"

var movies = ["Kingsman", "Ilha do medo", "Sociedade dos poetas mortos"]

for (var i = 2; i >= movies.length ; i++){

}
console.log(movies) 

var moviesList = ["https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BYTM3ZTllNzItNTNmOS00NzJiLTg1MWMtMjMxNDc0NmJhODU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i = 0; i < moviesList.length; i++) {
    document.write("<img src=" + moviesList[i] + ">")}
    var elementoFilme = "<img src=" + filme + ">" 
    
    */

    function adicionarFilmeFavorito() 
    {
        var campoFilmeFavorito = document.querySelector('#filme')
        var filmeFavorito = campoFilmeFavorito.value
        console.log(filmeFavorito)
       if(filmeFavorito.endsWith('.jpg'))
        {
        listarFilmesNaTela(filmeFavorito)}
        else {
            alert('Formato inválido')
        } 
        campoFilmeFavorito.value = "" 
    }


    function listarFilmesNaTela(filme) {
        var listaFilmes = document.querySelector('#listaFilmes')
        var elementoFilme = "<img src=" + filme + ">" 
        listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
    }


 
