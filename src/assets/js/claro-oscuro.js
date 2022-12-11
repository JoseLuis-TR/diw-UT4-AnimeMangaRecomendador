const CHECK_MODO = document.getElementById('checkModo');

if(CHECK_MODO.checked){
    TITULO_PAG.innerHTML = "¿Qué deseas leer hoy?";
    TITULO_CHOOSER.innerHTML = "Manga";
    TITULO_PAG.classList.add('muestra');
  } else {
    TITULO_PAG.innerHTML = "¿Qué deseas ver hoy?";
    TITULO_CHOOSER.innerHTML = "Anime";
    TITULO_PAG.classList.add('muestra');
  }
  CHECK_MODO.addEventListener('change',function (){
    TITULO_PAG.style.transition = "opacity 0.5s linear 0s";
    TITULO_PAG.style.opacity = 0;
    if(CHECK_MODO.checked){
      TITULO_PAG.style.transition = "opacity 0.5s linear 0s";
      TITULO_PAG.style.opacity = 1;
      TITULO_PAG.innerHTML = "¿Qué deseas leer hoy?";
      TITULO_CHOOSER.innerHTML = "Manga";
    } else {
      TITULO_PAG.style.transition = "opacity 0.5s linear 0s";
      TITULO_PAG.style.opacity = 1;
      TITULO_PAG.textContent = "¿Qué deseas ver hoy?";
      TITULO_CHOOSER.innerHTML = "Anime";
    }
  })