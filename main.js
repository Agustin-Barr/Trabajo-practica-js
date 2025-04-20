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
                        <button class="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-xl shadow hover:scale-105 transition-transform">
                            🛒 Agregar al carrito
                        </button>
                    </li>
                `).join("")}
            </ul>
        </div>
    `;
}
    
    

// funcion que  me deja elegir uno de los productos  y retorna el valor elegido para ser agregados al carrito
function eleccion_producto(Mercaderia="") {
    let eleccion = prompt(`${mostrar_productos(Mercaderia)}Ingrese el numero de producto que desee agregar al carrito ( ingrese -1 para finalizar)`);

    while(true){
        if (eleccion === "-1"){
            return null;
        }
    let posicion_valida = false;
    for (let i = 0;i<Mercaderia.length;i++){
        if (eleccion === String(i+1)){//le agrego +1 por la posicion de la lista que empieza en 0
            posicion_valida = true;
            return {nombre:Mercaderia[i].nombre,precio : Mercaderia[i].precio}
        }
    }
    alert("ERROR! Numero invalido. Por favor vuelva a intentar")
    eleccion = prompt(`${mostrar_productos(Mercaderia)}Ingrese el numero de producto que desee agregar al carrito ( ingrese -1 para finalizar)`);  
    }
}

// Funcion que me llena el carrito de la compra y me retorna el total de mercaderia cargada
function llenar_carrito(Mercaderia = ""){
    let producto = eleccion_producto(Mercaderia);
    let carrito = [];
    while (producto !== null){
        carrito.push(producto);
        alert(`${producto.nombre} fue agregado al carrito correctamente`);
        producto = eleccion_producto(Mercaderia);
    }
    return carrito
}
    
//funcion que me muestra los productos del carrito con su valor total a pagar
function mostrar_carrito(carrito=""){
    if (carrito ==null|| carrito.length=== 0 ){//En caso de que este vacio el carrito devuelvo este texto
        return "No realizo ninguna compra"}
        
    
    
    let mensaje = `Compras realizadas \n`
    let total = 0;
    carrito.forEach(producto=>{
        mensaje += `${producto.nombre}- $${producto.precio}\n`;
        total += producto.precio;
    })
    
    
    let mensaje_final = `${mensaje} *El total de su compra es ${total}`;
    return mensaje_final
    
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
