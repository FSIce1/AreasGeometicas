
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPrecioDescuento(){
    
    const cupones = ["MICUPON10"];

    const inputPrecioA = document.getElementById("inputPrecio");
    const precioValue = inputPrecioA.value;

    const inputDescuentoB = document.getElementById("inputDescuento");
    const descuentoValue = inputDescuentoB.value;

    const elementoById = document.getElementById("resultadoP"); 

    cupones.forEach(function(valor){
        if(valor == descuentoValue){

            const precioConDescuento = calcularPrecioConDescuento(precioValue, 10);
            elementoById.classList.remove("red");

            elementoById.innerText = "El precio con descuento es: "+precioConDescuento;

        } else {
            elementoById.classList.add("red");
            elementoById.innerText = "El cupón no es válido ";
        }
    })

}

calcularPrecioConDescuento(300, 20);

