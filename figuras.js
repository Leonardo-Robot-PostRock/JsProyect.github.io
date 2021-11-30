/**
 * Código del cuadrado
 */
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

perimetroCuadrado();

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

/**
 * Código del triángulo
 */
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

/**
 * Círculos
 */
console.group("Círculos");

//  Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//  PI
const PI = Math.PI;
console.log("PI es: " + PI);


//  Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//  Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();
