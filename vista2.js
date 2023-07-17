export default function vista2(productos) {
    console.log("\n\n");
    console.log("--------------------------------");
    console.log("nombre\t\tprecio"); // \t es una tabulacion \n es un salto de linea.
    console.log("--------------------------------");
    productos.forEach(producto => {
        console.log(producto.nombre+"\t\t$"+producto.precio);
        console.log(`${producto.nombre}\t\t$${producto.precio}`); // ` esta al lado derecho de la tecla "ñ"
    });
}