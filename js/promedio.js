// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

let lista = [];

function datoUsuario() {
    let valorNumeroDatos = numeroDatos();
    //Los valores ingresados en html a js. Por cada elemento iterado (indices del array), se agrega el valor ingresado por el usuario.
    // Mientras que i sea menor que la cantidadTotalSueldos + 1 = cantidad que supera a nuestro numero de elementos de array

    for (let i = 1; i < (valorNumeroDatos + 1); i++) {
        // Lo que ingresa el usuario por teclado
        let id = i;
        let dato = inputDatoUsuario = document.getElementById(id);
        let valueDato = parseInt(dato.value);
        // La variable addElement va a ser = al array; en el cual
        let addElement = lista.push(valueDato);
    }
}

function calcularMediaAritmetica() {
    // let sumaLista = 0;
    // for (let i = 0; i <lista.length; i++) { 
    //     sumaLista = sumaLista + lista[i];
    // }
    lista = [];
    datoUsuario();
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    //recibe una funcion y lo que permite es sumar o cualquie operacion cada uno de los elementos del array
    const promedioLista = sumaLista / lista.length;

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El promedio es: " + promedioLista;
}

function numeroDatos() {
    //Saber cuantos input son
    const inputNumeroDatos = document.getElementById("numeroDatos");
    const value = parseInt(inputNumeroDatos.value);
    return value;
}

function addInput() {
    //eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("addInputs");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    };

    //quitar respuesta
    const resultado = document.getElementById("resultado");
    resultado.innerText = "";

    // colocar input
    let valorNumeroDatos = numeroDatos();

    for (let i = 1; i < (valorNumeroDatos + 1); i++) {

        var direccion = '<label for="' + i + '"> dato: </label> <input id="' + i + '"type="number"></input>';
        let input = document.getElementById("addInputs");
        input.insertAdjacentHTML('beforeend', direccion);
    }
    let button = document.getElementById("addInputs");
    button.insertAdjacentHTML('beforeend', '<button type="button" onclick="calcularMediaAritmetica()">Calcular</button');
}

