function inicio() {
    alert("Bienvenido al SuperVirtual");
    mostrar_productos(mercaderia)
   
}

function mostrar_productos(mercaderia) {
    let mensaje = "Productos:\n";
    mercaderia.forEach((mercaderia) => {
        mensaje += ` ${mercaderia.producto} - $${mercaderia.precio}\n`;
        
    });
    prompt(mensaje)
    ;
}
function iniciar_compra(){
    let eleccion = prompt("Ingrese el numero del producto ");
    
    while (eleccion < 0 || eleccion > len(mercaderia) ){
        alert("ERROR!. Ingrese un numero valido ")
        let eleccion = prompt("Ingrese el numero del producto ")



    }

}
const boton = document.getElementById("ver_lista");
const mercaderia = [
    {producto: "Manzana", precio: 12},
    {producto: "Banana", precio: 25},
    {producto: "Pera", precio: 7},
    {producto: "Ananá", precio: 43},
    {producto: "Ciruela", precio: 9}
];
//falta funcion con un match case para la eleccion de los productos y la carga de los mismos.
//los mismos van a irse agregando a una nueva array 
inicio();
