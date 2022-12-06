const MENU = document.getElementById("menu");
const MENU_OPCIONES = document.getElementById("menu__opciones");

function abrirMenu(){
    console.log("hey")
    MENU.classList.toggle("mostrar");
}

function cerrarMenu() {
    console.log("no")
    MENU.classList.toggle("mostrar");
}
