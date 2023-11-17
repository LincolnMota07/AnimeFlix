var listaAnimesFavoritos = [];
var listaTrailersAnimesFavoritos = [];

function adicionarAnime(){
    var animeFavorito = document.getElementById('anime').value;
    var trailerAnimeFavorito = document.getElementById('trailer').value;

    listaAnimesFavoritos.push(animeFavorito);
    listaTrailersAnimesFavoritos.push(trailerAnimeFavorito);


    limpaCampos();
    recarregarFilmes();

}

function recarregarFilmes(){
    var elementoListaAnimes = document.getElementById('listaAnimes');
    elementoListaAnimes.innerHTML = '';
    for(i=0; i < listaAnimesFavoritos.length; i++){
        elementoListaAnimes.innerHTML += `<a href=" ${listaTrailersAnimesFavoritos[i]}"target="_blank"> <img src=" ${listaAnimesFavoritos[i]}>"</a>`;
        
    }
}

function limpaCampos() {
    document.getElementById('anime').value = '';
    document.getElementById('trailer').value = '';

}

function resetaLista(){
    listaAnimesFavoritos = [];
    listaTrailersAnimesFavoritos = [];
    recarregarFilmes();
}