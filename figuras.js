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
    return (lado1 + lado2 + base);
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

//Aquí interactúo con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularAreaTriangulo() {
    const inputOne = document.getElementById("inputBase");
    const inputTwo = document.getElementById("inputAltura");
    //Base triángulo
    const valueOne = inputOne.value;
    //Altura triángulo
    const valueTwo = inputTwo.value;
    const area = areaTriangulo(valueOne, valueTwo);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputOne = document.getElementById("inputLadoUno");
    const inputTwo = document.getElementById("inputLadoDos");
    const inputThree = document.getElementById("inputBase");
    //Lado Uno triángulo
    const valueOne = Number(inputOne.value);
    //Lado Dos triángulo
    const valueTwo = Number(inputTwo.value);
    //Base triángulo
    const valueThree = Number(inputThree.value);
    const perimetro = perimetroTriangulo(valueOne, valueTwo, valueThree);
    alert(perimetro);
}