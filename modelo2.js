export default [
    {nombre:"coca",precio:1050,cantidad:5,subtotal:calculoSubtotal  },
    {nombre:"fanta",precio:5660,cantidad:3,subtotal:calculoSubtotal },
    {nombre:"sprite",precio:3770,cantidad:10,subtotal:calculoSubtotal },
]
function calculoSubtotal() {
    return this.precio*this.cantidad; // a que se refiere el this? El this indica el objeto que esta llamando a la funcion
}
