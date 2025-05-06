import { alerta_general,alerta_sesion,alerta_efimera } from "../helper/utils.js";
document.addEventListener("DOMContentLoaded", () => {
    const btnAbrirInicioSesion = document.getElementById("btnInicioSesion");
    if (usuarioLogueado()) {
        const nombreUsuario = localStorage.getItem("usuario");
        document.getElementById("btnInicioSesion").innerHTML = `Hola! ${nombreUsuario}`;
        document.getElementById("btnInicioSesion").classList.remove("bg-blue-500");
        document.getElementById("btnInicioSesion").classList.add("bg-green-500");
        document.getElementById("btnInicioSesion").disabled = true;
        document.getElementById("btnRegistro").disabled = true;
    }else {
        alerta_efimera("No hay usuario logueado", "info");
        document.getElementById("btnInicioSesion").innerHTML = "Iniciar Sesion";
        document.getElementById("btnInicioSesion").classList.remove("bg-green-500");
        document.getElementById("btnInicioSesion").classList.add("bg-blue-500");
        document.getElementById("btnInicioSesion").disabled = false;
        document.getElementById("btnRegistro").disabled = false;    
    }
    btnAbrirInicioSesion.addEventListener("click", () => {
        document.getElementById("ModalInicioSesion").classList.remove("hidden");    
        document.getElementById("ModalInicioSesion").classList.add("flex");});
        document.getElementById("btnCerrarModal").addEventListener("click", () => {
            document.getElementById("ModalInicioSesion").classList.remove("flex");
            document.getElementById("ModalInicioSesion").classList.add("hidden");
        });
        //inicio de sesion de usuario
        document.getElementById("formLogin").addEventListener("submit", (e) => {
            e.preventDefault();
            const NombreUsuario = document.getElementById("UsuarioInicioSesion").value;
            const Password = document.getElementById("ContreseñaInicioSesion").value;
            const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];//obtengo los usuarios del local storage
            //busco el usuario en el local storage
            const usuario = usuarios.find((user) => user.NombreUsuario === NombreUsuario && user.Password === Password);
            if (!usuario) {
                alerta_general("Error", "Usuario o contraseña incorrectos", "error");
                return;
            }
            //si el usuario existe guardo el nombre de usuario en el local storage
            localStorage.setItem("usuario", usuario.NombreUsuario);
            alerta_sesion("Sesion iniciada", "success");
            document.getElementById("ModalInicioSesion").classList.remove("flex");
            document.getElementById("ModalInicioSesion").classList.add("hidden");
            document.getElementById("formLogin").reset();//reseteo el formulario de inicio de sesion
        });
        //cerrar sesion
        document.getElementById("btnCerrarSesion").addEventListener("click", () => {
            if (!usuarioLogueado()) {
                alerta_efimera("No hay usuario logueado", "info");
                return;
            }
            localStorage.removeItem("usuario");
            document.getElementById("btnInicioSesion").innerHTML = "Iniciar Sesion";
            document.getElementById("btnInicioSesion").classList.remove("bg-green-500");
            document.getElementById("btnInicioSesion").classList.add("bg-blue-500");
            document.getElementById("btnInicioSesion").disabled = false;
            document.getElementById("btnRegistro").disabled = false;
            alerta_sesion("Sesion cerrada", "success");
        });
    });
    export function usuarioLogueado() {
        return localStorage.getItem("usuario") !== null;
      }