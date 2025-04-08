function inicio() {
    alert("Bienvenido al SuperVirtual");
    alert(mostrar_productos(mercaderia))
   let carrito_de_compras = llenar_carrito(mercaderia)
   alert (carrito_de_compras)
}

function mostrar_productos(mercaderia) {
    let mensaje = "Productos:\n";
    mercaderia.forEach((mercaderia) => {
        mensaje += ` ${mercaderia.nombre} - $${mercaderia.precio}\n`;
        
    });
   return mensaje
    
    
}
function eleccion_producto(mercaderia){
    let eleccion = prompt("Ingrese el producto que desea comprar,ingrese -1 para finalizar ");
    if (eleccion === "-1"){
        return null;
    }
    while (mercaderia.some(producto =>producto.nombre === eleccion ) == false)  {
        alert("ERROR!. Ingrese un producto valido ")
        eleccion = prompt("Ingrese el  producto ")
        if (eleccion === "-1"){
            return null;
        }

    }
    return eleccion
}
function llenar_carrito(mercaderia){
    let compra = eleccion_producto(mercaderia);
    let carrito = []
    while (compra !== null){
        carrito.push(compra);
        compra = eleccion_producto(mercaderia);
    }
    
    return carrito


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
