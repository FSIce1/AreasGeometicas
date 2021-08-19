
//! CUADRADO

console.group("CUADRADO")

const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: "+ladoCuadrado +" cm");


function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado*4;
} 
console.log("El perímetro del cuadrado es: "+perimetroCuadrado(ladoCuadrado)+" cm");


function areaCuadrado(ladoCuadrado){
    return ladoCuadrado*ladoCuadrado;
}
console.log("El área del cuadrado es: "+areaCuadrado(ladoCuadrado)+" cm^2");


console.groupEnd();



//! TRIÁNGULO

console.group("TRIÁNGULO")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


const alturaTriangulo = 5.5;
console.log("Los lados del triángulo son: "+ladoTriangulo1+" cm, "+ladoTriangulo2+" cm, "+baseTriangulo+" cm")

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return parseInt(ladoTriangulo1) + parseInt(ladoTriangulo2) + parseInt(baseTriangulo);
}

console.log("El perímetro del triángulo es: "+perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo));

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (parseInt(baseTriangulo)*parseInt(alturaTriangulo))/2;
}

console.log("El área del triángulo es: "+areaTriangulo(baseTriangulo, alturaTriangulo));


console.groupEnd();



//! CIRCULO

console.group("CIRCULO")

//Radio
const radioCirculo = 5;
console.log("El radio del circulo es " + radioCirculo + " cms.");

//Diametro

function diametroCirculo(radioCirculo){
    return parseInt(radioCirculo) * 2;
}

console.log("El diametro del circulo es " + diametroCirculo(radioCirculo) + " cms.");

// PI
function PI(){
    return Math.PI;
}

console.log("PI es " + PI(PI) + ".");

// Perimetro
function perimetroCirculo(perimetroCirculo){
    return parseInt(perimetroCirculo) * PI();
}

console.log("El perimetro del circulo es " + perimetroCirculo(perimetroCirculo) + " cms.");

//Area
function areaCirculo(radioCirculo){
    return PI() * (parseInt(radioCirculo)**2);
}

console.log("El area del circulo es " + areaCirculo(radioCirculo) + " cms.");

console.groupEnd();


//* Calcular

//! PARA EL CUADRADO
function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado");

    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    

    //!? Resultado
    document.getElementById("resultadosCuadrado").innerHTML = 'El perímetro es ' + perimetro; 

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");

    const value = input.value;
    
    const area = areaCuadrado(value);
    

    //!? Resultado
    document.getElementById("resultadosCuadrado").innerHTML = 'El área es ' + area; 
    
}


//! PARA EL TRIÁNGULO

function calcularPerimetroTriangulo(){
    
    const input1 = document.getElementById("inputLado1").value;
    const input2 = document.getElementById("inputLado2").value;
    const input3 = document.getElementById("inputLado3").value;
    
    const perimetro = perimetroTriangulo(input1, input2, input3);
    
    //!? Resultado
    document.getElementById("resultadosTriangulo").innerHTML = 'El perímetro es ' + perimetro; 

}

function calcularAreaTriangulo(){
    
    const input1 = document.getElementById("inputAltura").value;
    const input2 = document.getElementById("inputBase").value;
    
    const area = areaTriangulo(input1, input2);
    
    //!? Resultado
    document.getElementById("resultadosTriangulo").innerHTML = 'El área es ' + area; 

}

//* Triángulo isósceles

function calcularAlturaTrianguloIsosceles(){
    const lado1 = document.getElementById("inputLado1").value;
    const lado2 = document.getElementById("inputLado2").value;
    const base = document.getElementById("inputLado3").value;
    
    if(lado1 === lado2 && lado1 != base){

        const altura = Math.sqrt(lado1**2 - base**2 / 4);
        
        //!? Resultado
        document.getElementById("resultadosTriangulo").innerHTML = 'La altura es ' + altura; 

    } else {
        //!? Resultado
        document.getElementById("resultadosTriangulo").innerHTML = 'No lo sé'; 
    }
}


//! PARA EL CÍRCULO

function calcularDiametroCirculo(){
    
    const input1 = document.getElementById("inputCirculo").value;
    
    const diametro = diametroCirculo(input1);
    
    //!? Resultado
    document.getElementById("resultadosCirculo").innerHTML = 'El diámetro es ' + diametro; 

}

function calcularPerimetroCirculo(){

    const input1 = document.getElementById("inputCirculo").value;
    
    const perimetro = perimetroCirculo(input1);
    
    //!? Resultado
    document.getElementById("resultadosCirculo").innerHTML = 'El perímetro es ' + perimetro; 

}

function calcularAreaCirculo(){
    
    const input1 = document.getElementById("inputCirculo").value;
    
    const area = areaCirculo(input1);
    
    //!? Resultado
    document.getElementById("resultadosCirculo").innerHTML = 'El área es ' + area; 

}