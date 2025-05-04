const btnAbrirLogin = document.getElementById("btnRegistro");
btnAbrirLogin.addEventListener("click", () => {
    
    console.log("Botón de abrir login clickeado");
    
});

document.getElementById("btncerrarmodalregistro").addEventListener("click", () => {
    console.log("CLAAANk");
    document.getElementById("modalregistro").classList.remove("flex");
    document.getElementById("modalregistro").classList.add("hidden");
});
