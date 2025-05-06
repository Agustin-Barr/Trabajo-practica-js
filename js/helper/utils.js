export function alerta_efimera(title =" ", icon =" success") {//funcion para avisar que se agrego el producto al carrito
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: icon,
        title: title
    });
}
export async function alerta_eliminado() {//funcion para avisar que se elimino el producto del carrito
    const result = await Swal.fire({
        title: "Desea vaciar el carrito de compras?",
        text: "Recuerde que no podra recuperar los productos eliminados",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, deseo vaciar mi carrito!"
      });
        if (result.isConfirmed) {        
        await Swal.fire({
            
            title: "Vacio!",
            text: "Su carrito de compras ha sido vaciado correctamente.",
            icon: "success"
          });
          return true;
        }else {
        await Swal.fire({               
                title: "Cancelado",
                text: "Su carrito de compras no ha sido eliminado.",
                icon: "error",
            });
        }
        return false;
      };
export function alerta_general(title = "",text = "", icon = "error") {//funcion general de alerta 
    Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
}
export function alerta_sesion(title = " ", icon = "success") {//funcion para avisar que se inicio sesion
    Swal.fire({
        title: title,
        icon: icon,
        draggable: true
      });
}
    