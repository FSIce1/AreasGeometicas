const lista1 = [
    100,
    200,
    300,
    400,
    500,
];


function calcularMediaArimetica(lista) {
    /*
    let sumaLista = 0;
    
    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    */

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, elemento){
            return valorAcumulado + elemento;
        }
    ); // suma todos los elementos

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}