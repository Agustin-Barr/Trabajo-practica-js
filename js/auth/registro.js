import { alerta_efimera, alerta_general } from "../helper/utils.js";
document.addEventListener("DOMContentLoaded", () => {
    const btnAbrirRegistro = document.getElementById("btnRegistro");
    btnAbrirRegistro.addEventListener("click", () => {
        document.getElementById("ModalRegistro").classList.remove("hidden");    
        document.getElementById("ModalRegistro").classList.add("flex");});
    document.getElementById("btnCerrarModalRegistro").addEventListener("click", () => {
        document.getElementById("ModalRegistro").classList.remove("flex");
        document.getElementById("ModalRegistro").classList.add("hidden");
    }
    );
    //registro de usuario
    document.getElementById("formRegistro").addEventListener("submit", (e) => {
        e.preventDefault();
        const NombreUsuario = document.getElementById("RegistroUsuario").value;
        const Email = document.getElementById("correo").value;
        const Password = document.getElementById("ContraseñaRegistro").value;
        const PasswordConfirm = document.getElementById("ConfirmarContraseñaRegistro").value;
        if (Password !== PasswordConfirm) {
            alerta_general("Error", "Las contraseñas no coinciden", "error");
            return;
        }
        const usuario = {
            NombreUsuario: NombreUsuario,
            Email: Email,
            Password: Password,
        };
        //creo el usuario y lo guardo en el local storage
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        //valido que el usuario no exista
        const usuarioExistente = usuarios.find((user) => user.NombreUsuario === NombreUsuario || user.Email === Email);
        if (usuarioExistente) {
            alerta_general("Error", "El usuario o el correo ya existe", "error");
            return;
        }
        //validamos que la contraseña y su confirmacion sean iguales
        if (Password!== PasswordConfirm) {
            alerta_general("Error", "Las contraseñas no coinciden", "error");
            return;
        }
        //validamos que contraseña que tenga al menos 8 caracteres
        if (Password.length < 8) {
            alerta_general("Error", "La contraseña debe tener al menos 8 caracteres", "error");
            return;
        }
        //guardamos el usuario en el local storage
        usuarios.push(usuario); 
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alerta_efimera("Usuario registrado correctamente", "success"); 
        document.getElementById("ModalRegistro").classList.remove("flex");
        document.getElementById("ModalRegistro").classList.add("hidden");
        document.getElementById("formRegistro").reset();//reseteo el formulario de registro
    });
});
