// Este archivo se encarga de controlar el funcionamiento del menu de navegacion
// de la web

// Se encarga de recoger el elemento que hay que clicar cuando necesitamos
// abrir o cerrar el menú
const MENU_OPCIONES = document.getElementById("menu__opciones");

// Función llamada por el icono del menu para mostrar el menu
function abrirMenu(){
    MENU_OPCIONES.classList.toggle("mostrar");
}

// Funcion llamada por el icono de la cruz dentro del menu para cerrar el menu
function cerrarMenu() {
    MENU_OPCIONES.classList.toggle("mostrar");
}