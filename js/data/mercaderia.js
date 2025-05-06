///Datos
class Crear_mercaderia{
    constructor(nombre="",precio=0,categoria="" ){
        this.nombre = nombre;
        this.precio=precio;
        this.categoria=categoria;

    }
}
export const Mercaderia = [
    new Crear_mercaderia("Leche Serenisima", 100, "Lacteos"),
    new Crear_mercaderia("Pan Bimbo", 50, "Almacen"),
    new Crear_mercaderia("Oreo", 500, "Almacen"),
    new Crear_mercaderia("Tomate", 200, "Verduleria"),
    new Crear_mercaderia("Manzana", 150, "Verduleria"),
    new Crear_mercaderia("Cafe Bonafide", 80, "Almacen"),
    new Crear_mercaderia("Jugo Citric", 120, "Almacen"),
    new Crear_mercaderia("Coca Cola", 130, "Almacen"),
    new Crear_mercaderia("Servilleta ", 150, "Almacen"),        
];