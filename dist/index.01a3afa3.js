const CHECK_MODO = document.getElementById("checkboxModo");
if (CHECK_MODO.checked) {
    document.documentElement.setAttribute("tema", "dark");
    console.log("prueba-luz");
} else {
    document.documentElement.setAttribute("tema", "light");
    console.log("prueba-oscuridad");
}
CHECK_MODO.addEventListener("change", function() {
    if (CHECK_MODO.checked) {
        console.log("prueba-luz");
        document.documentElement.setAttribute("tema", "dark");
    } else {
        console.log("prueba-oscuridad");
        document.documentElement.setAttribute("tema", "light");
    }
});

//# sourceMappingURL=index.01a3afa3.js.map
