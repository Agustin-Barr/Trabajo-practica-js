function inicio() {
    alert("Bienvenido al SuperVirtual");
   let carrito_de_compras = llenar_carrito(mercaderia);
   alert (mostrar_carrito(carrito_de_compras))
}
//funcion que me imprime la lista de productos disponibles 
function mostrar_productos(mercaderia) {
    let mensaje = "Productos:\n";
    mercaderia.forEach((producto, index) => {
        mensaje += ` ${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
        
    });
   return mensaje
    
    
}
// funcion que  me deja elegir uno de los productos  y retorna el valor elegido para ser agregados al carrito
function eleccion_producto(mercaderia) {
    let eleccion = prompt(`${mostrar_productos(mercaderia)}Ingrese el numero de producto que desee agregar al carrito ( ingrese -1 para finalizar)`);

    while(true){
        if (eleccion === "-1"){
            return null;
        }
    let posicion_valida = false;
    for (let i = 0;i<mercaderia.length;i++){
        if (eleccion === String(i+1)){//le agrego +1 por la posicion de la lista que empieza en 0
            posicion_valida = true;
            return {nombre:mercaderia[i].nombre,precio : mercaderia[i].precio}
        }
    }
    alert("ERROR! Numero invalido. Por favor vuelva a intentar")
    eleccion =   prompt("Ingrese el numero de producto que desee agregar al carrito ( ingrese -1 para finalizar)");  
    }
}

// Funcion que me llena el carrito de la compra y me retorna el total de mercaderia cargada
function llenar_carrito(mercaderia){
    let producto = eleccion_producto(mercaderia);
    let carrito = [];
    while (producto !== null){
        carrito.push(producto);
        alert(`${producto.nombre} fue agregado al carrito correctamente`);
        producto = eleccion_producto(mercaderia);
    }
    return carrito
}
    
//funcion que me muestra los productos del carrito con su valor total a pagar
function mostrar_carrito(carrito){
    let total = 0;
    carrito.forEach(producto=>{
        alert(`${producto.nombre}- $${producto.precio}`);
        total += producto.precio;
    })
    return total
}

///Datos
const mercaderia = [
    {
        nombre: "Manzana",
        precio: 12
    },
    {
        nombre: "Banana",
        precio: 25
    },
    {
        nombre: "Pera",
        precio: 7
    },
    {
        nombre: "Ananá",
        precio: 43
    },
    {
        nombre: "Ciruela",
        precio: 9
    }
];
//falta funcion con un match case para la eleccion de los productos y la carga de los mismos.
//los mismos van a irse agregando a una nueva array 
inicio()
