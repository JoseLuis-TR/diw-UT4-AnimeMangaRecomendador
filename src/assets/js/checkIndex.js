const CHECK_ANIMANGA = document.getElementById('check');
const TITULO_PAG = document.getElementById('header__titulo');
const TITULO_CHOOSER = document.getElementById('chooser__titulo');

if(CHECK_ANIMANGA.checked){
  TITULO_PAG.innerHTML = "¿Que deseas leer hoy?";
  TITULO_CHOOSER.innerHTML = "Manga";
  TITULO_PAG.classList.add('muestra');
} else {
  TITULO_PAG.innerHTML = "¿Que deseas ver hoy?";
  TITULO_CHOOSER.innerHTML = "Anime";
  TITULO_PAG.classList.add('muestra');
}
CHECK_ANIMANGA.addEventListener('change',function (){
  TITULO_PAG.style.transition = "opacity 0.5s linear 0s";
  TITULO_PAG.style.opacity = 0;
  if(CHECK_ANIMANGA.checked){
    TITULO_PAG.style.transition = "opacity 0.5s linear 0s";
    TITULO_PAG.style.opacity = 1;
    TITULO_PAG.innerHTML = "¿Que deseas leer hoy?";
    TITULO_CHOOSER.innerHTML = "Manga";
  } else {
    TITULO_PAG.style.transition = "opacity 0.5s linear 0s";
    TITULO_PAG.style.opacity = 1;
    TITULO_PAG.textContent = "¿Que deseas ver hoy?";
    TITULO_CHOOSER.innerHTML = "Anime";
  }
})