function inicio() {
    alert("Bienvenido al SuperVirtual");
    mostrar_productos(mercaderia)
}

function mostrar_productos(mercaderia) {
    let mensaje = "Productos:\n";
    mercaderia.forEach((mercaderia) => {
        mensaje += ` ${mercaderia.producto} - $${mercaderia.precio}\n`;
        
    });
    alert(mensaje)
    
    ;
}

const boton = document.getElementById("ver_lista");
const mercaderia = [
    {producto: "Manzana", precio: 12},
    {producto: "Banana", precio: 25},
    {producto: "Pera", precio: 7},
    {producto: "Ananá", precio: 43},
    {producto: "Ciruela", precio: 9}
];


inicio();
