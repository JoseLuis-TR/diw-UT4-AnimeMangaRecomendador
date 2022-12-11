// Archivo CSS que se encarga de manejar en la página de index el switch inferior que muestra los mensajes
// referentes a buscar anime o manga al ser usado
// Recogemos el elemento del checkbox
const CHECK_ANIMANGA = document.getElementById("check");
// Recogemos el elemento del titulo de la página
const TITULO_PAG = document.getElementById("header__titulo");
// Recogemos el elemento titulo que se encuentra encima del switch
const TITULO_CHOOSER = document.getElementById("chooser__titulo");
// Dependiendo de si el checkbox esta marcado o no, mostrará al entrar a la página unos mensajes u otros
if (CHECK_ANIMANGA.checked) {
    TITULO_PAG.innerHTML = "\xbfQu\xe9 deseas leer hoy?";
    TITULO_CHOOSER.innerHTML = "Manga";
} else {
    TITULO_PAG.innerHTML = "\xbfQu\xe9 deseas ver hoy?";
    TITULO_CHOOSER.innerHTML = "Anime";
}
// Se encarga de escuchar al checkbox y realizar distintas acciones dependiendo de si esta marcado o no.
CHECK_ANIMANGA.addEventListener("change", function() {
    if (CHECK_ANIMANGA.checked) {
        TITULO_PAG.innerHTML = "\xbfQu\xe9 deseas leer hoy?";
        TITULO_CHOOSER.innerHTML = "Manga";
    } else {
        TITULO_PAG.textContent = "\xbfQu\xe9 deseas ver hoy?";
        TITULO_CHOOSER.innerHTML = "Anime";
    }
});

//# sourceMappingURL=index.c14f442a.js.map
