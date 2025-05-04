import { alerta_agregado,alerta_eliminado } from "./helper/utils.js";
//Limpiar carrito de compras  al refrescar la pagina 
document.addEventListener("DOMContentLoaded", () => {
   localStorage.removeItem("carrito");//limpio el carrito de compras al cargar la pagina
});
const btnLacteos = document.getElementById("btnLacteos");//boton de lacteos
const btnAlmacen = document.getElementById("btnAlmacen");//boton de almacen         
const btnVerduleria = document.getElementById("btnVerduleria");//boton de verduleria
const btnTodos = document.getElementById("btnTodos");//boton de todos los productos
const btnCarrito = document.getElementById("btnCarrito");//boton de carrito
btnLacteos.addEventListener("click", () => {
    separar_por_categoria("Lacteos");//llamo a la funcion que me muestra los productos de la categoria Lacteos
});
btnAlmacen.addEventListener("click", () => {
    separar_por_categoria("Almacen");//llamo a la funcion que me muestra los productos de la categoria Almacen
});
btnVerduleria.addEventListener("click", () => {
    separar_por_categoria("Verduleria");//llamo a la funcion que me muestra los productos de la categoria Verduleria
});
btnTodos.addEventListener("click", () => {
    mostrar_productos(Mercaderia);//llamo a la funcion que me muestra todos los productos 
});  
btnCarrito.addEventListener("click", () => {

    mostrar_carrito();//llamo a la funcion que me muestra los productos del carrito de compras
});
//Funcion para separar los productos por categoria 
function filtrado_categoria(categoria = ""){
    return Mercaderia.filter(producto => producto.categoria === categoria);//filtro los productos por categoria
}
function separar_por_categoria(categoria = ""){
    let productos_filtrados;
    switch (categoria) {
        case "Lacteos":
            productos_filtrados = filtrado_categoria("Lacteos");//filtro los productos por categoria Lacteos
            break;
            case "Almacen":
                productos_filtrados = filtrado_categoria("Almacen");//filtro los productos por categoria Almacen
                break;
                case "Verduleria":
                    productos_filtrados = filtrado_categoria("Verduleria");//filtro los productos por categoria Verduleria
                    break;
                    default:
                        productos_filtrados = Mercaderia;
                    }
                    mostrar_productos(productos_filtrados);//llamo a la funcion que me muestra los productos de la categoria seleccionada
                }   
//funcion que vacia el carrito de compras con mercaderia 
async function vaciar_carrito() {
    const espera_confirmacion= await alerta_eliminado();//llamo a la funcion que me muestra el mensaje de confirmacion
    if (espera_confirmacion) {//si el usuario confirma que desea eliminar el carrito de compras
        localStorage.removeItem("carrito");//elimino el carrito de compras del local storage 
        }   
    mostrar_carrito();
    document.head.scrollIntoView({ behavior: "smooth", block: "start" });
       
    
}
//funcion que me imprime la lista de productos disponibles 
function mostrar_productos(Mercaderia=[]) {
    const contenedor = document.getElementById("contenedor");
    if (!Mercaderia || Mercaderia.length === 0) {
        contenedor.innerHTML = "<h1>No hay productos disponibles en el catálogo.</h1>";
        return;
    }
    contenedor.innerHTML = `
    <div class="max-w-7xl mx-auto p-10 mt-10 bg-white shadow-2xl rounded-3xl">
    <h1 class="text-4xl font-extrabold text-center text-gray-900 mb-12">🛍️ Catálogo de productos</h1>
    <ul class="flex flex-wrap justify-center gap-6">
    ${Mercaderia.map((producto,index) => `
        <li class="w-72 bg-gradient-to-tr from-blue-100 to-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1">
        <h2 class="text-xl font-bold text-gray-800 mb-2 truncate">${producto.nombre}</h2>
        <p class="text-lg text-gray-600 mb-4">💵 <span class="font-semibold text-green-600">$${producto.precio.toFixed(2)}</span></p>
        <button class="agregar_al_carrito bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform"data-index="${index}">
        🛒 Agregar al carrito
        </button>
        </li>
        `).join("")}
        </ul> 
        </div>
        `;
        //agregar evento del boton agregar al carrito
        const boton_agregar = document.querySelectorAll(".agregar_al_carrito");
        boton_agregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const index= parseInt(boton.dataset.index);//obtengo el index del boton que se presiono
                const producto = Mercaderia[index];//obtengo el producto correspondiente al boton que se presiono
                //Antes de agregar al carrito verifico que el producto no sea undefined o null
                if (producto && producto.nombre) {
                    agregar_al_carrito(producto);//agrego el producto al carrito
                }
            else {
                alert("No se ha seleccionado un producto válido.");//si no hay producto valido muestro un mensaje de error
            }            
        });
    });
    
}
// Funcion que me llena el carrito de la compra y me retorna el total de mercaderia cargada
function agregar_al_carrito(producto ) {
    if (!producto ||!producto.nombre){
        alert("No se ha seleccionado un producto válido.");//si no hay producto valido muestro un mensaje de error
        return;     
    }
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];//si no existe el carrito lo inicializo como un array vacio
    carrito.push(producto);//agrego el producto al carrito
   localStorage.setItem("carrito", JSON.stringify(carrito));//guardo el carrito en el local storage
    alerta_agregado();//muestra un mensaje de exito al agregar el producto al carrito   
}
//funcion que me muestra los productos del carrito con su valor total a pagar
function mostrar_carrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];//si no existe el carrito lo inicializo como un array vacio
    const contenedor = document.getElementById("contenedor_carrito");
    if (!carrito || carrito.length === 0) {
        contenedor.innerHTML = "<h1>No hay productos en el carrito.</h1>";
        return;
    }
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    contenedor.innerHTML = `
    <div class="max-w-7xl mx-auto p-10 mt-10 bg-white shadow-2xl rounded-3xl">
    <h1 class="text-4xl font-extrabold text-center text-gray-900 mb-12">🛒 Carrito de compras</h1>
    <ul class="flex flex-wrap justify-center gap-6">
    ${carrito.map(producto => `
        <li class="w-72 bg-gradient-to-tr from-blue-100 to-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1">
        <h2 class="text-xl font-bold text-gray-800 mb-2 truncate">${producto.nombre}</h2>
        <p class="text-lg text-gray-600 mb-4">💵 <span class="font-semibold text-green-600">$${producto.precio.toFixed(2)}</span></p>
        </li>
        `).join("")}
        </ul>
        <h2 class="text-xl font-bold text-gray-800 mt-8">Total: 💰 $${total.toFixed(2)}</h2>
        <button id =vaciar_carrito class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform">
        🗑️ Vaciar Carrito
        </button>
        </div>
        </div>
        `
        contenedor_carrito.scrollIntoView({ behavior: "smooth", block: "end" });//hago scroll al contenedor del carrito de compras
        //agregar evento del boton vaciar carrito
        const btnVaciarCarrito = document.getElementById("vaciar_carrito");//boton de vaciar carrito
        
        btnVaciarCarrito.addEventListener("click", () => {
            vaciar_carrito();//llamo a la funcion que me vacia el carrito de compras
        });};
        
class crear_mercaderia{
        constructor(nombre="",precio=0,categoria="" ){
            this.nombre = nombre;
            this.precio=precio;
            this.categoria=categoria;
    
        }
    } 
///Datos
const Mercaderia = [
        new crear_mercaderia("Leche Serenisima", 100, "Lacteos"),
        new crear_mercaderia("Pan Bimbo", 50, "Almacen"),
        new crear_mercaderia("Oreo", 500, "Almacen"),
        new crear_mercaderia("Tomate", 200, "Verduleria"),
        new crear_mercaderia("Manzana", 150, "Verduleria"),
        new crear_mercaderia("Cafe Bonafide", 80, "Almacen"),
        new crear_mercaderia("Jugo Citric", 120, "Almacen"),
        new crear_mercaderia("Coca Cola", 130, "Almacen"),
        new crear_mercaderia("Servilleta ", 150, "Almacen"),        
    ];
    localStorage.setItem("productos", JSON.stringify(Mercaderia));
    //cosas  que agregar al proyecto
    // sistema de login y registro antes de iniciar la compra
    // eliminar productos del carrito de compras de a uno
    // contabilizar los productos  repetidos dentro del carrito de compras
    //contabilizador dinamico del carrito de compras en el ehader
    