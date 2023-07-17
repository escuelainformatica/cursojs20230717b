export default function vista2(productos) {
    console.log("\n\n");
    console.log("----------------------------------------------------------");
    console.log("nombre\t\tprecio\t\tcantidad\tsubtotal"); // \t es una tabulacion \n es un salto de linea.
    console.log("----------------------------------------------------------");
    productos.forEach(producto => {
        //console.log(producto.nombre+"\t\t$"+producto.precio);
        let subtotal=producto.precio*producto.cantidad;
        console.log(`${producto.nombre}\t\t$${producto.precio}\t\t${producto.cantidad}\t\t${producto.subtotal()}`); // ` esta al lado derecho de la tecla "ñ"
        console.log(`${producto.nombre}\t\t$${producto.precio}\t\t${producto.cantidad}\t\t${subtotal}`);
        console.log(`${producto.nombre}\t\t$${producto.precio}\t\t${producto.cantidad}\t\t${producto.precio*producto.cantidad}`);
    });
}