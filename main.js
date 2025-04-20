function inicio() {

   mostrar_productos(Mercaderia);
   
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
                ${Mercaderia.map(producto => `
                    <li class="w-72 bg-gradient-to-tr from-blue-100 to-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                        <h2 class="text-xl font-bold text-gray-800 mb-2 truncate">${producto.nombre}</h2>
                        <p class="text-lg text-gray-600 mb-4">💵 <span class="font-semibold text-green-600">$${producto.precio.toFixed(2)}</span></p>
                        <button class="agregar_al_carrito bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform">
                            🛒 Agregar al carrito
                        </button>
                    </li>
                `).join("")}
            </ul>
        </div>
    `;
    //agregar evento del boton agregar al carrito
    const boton_agregar = document.querySelectorAll(".agregar_al_carrito");
    boton_agregar.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            const producto = Mercaderia[index];//obtengo el producto correspondiente al boton que se presiono
            //Ahora llamo a la funcion  para agregar el producto al carrito
            agregar_al_carrito(producto);
            
        });
    });

}

// Funcion que me llena el carrito de la compra y me retorna el total de mercaderia cargada
function agregar_al_carrito(producto) {
    let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];//si no existe el carrito lo inicializo como un array vacio
    carrito.push(producto);//agrego el producto al carrito
    sessionStorage.setItem("carrito", JSON.stringify(carrito));//guardo el carrito en el session storage
    alert(`${producto.nombre} ha sido agregado al carrito`);//muestro  al cliente que su producto se agrego correctamente
    mostrar_carrito();//llamo a la funcion que me muestra el carrito de compras
    
    
    
}
    
//funcion que me muestra los productos del carrito con su valor total a pagar
function mostrar_carrito() {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];//si no existe el carrito lo inicializo como un array vacio
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
        </div>
    `;
    
}
    

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

//falta funcion con un match case para la eleccion de los productos y la carga de los mismos.
//los mismos van a irse agregando a una nueva array 
inicio()
