function calcularModa() {

    const lista = document.getElementById("numeroDatos");
    const listaValue = lista.value;

    let arrayLista = Array.from(listaValue.split(","), Number);

    const listCount = {};

    arrayLista.map(
        function (elemento) {
            if (listCount[elemento]) {
                listCount[elemento] += 1;
            } else {
                listCount[elemento] = 1;
            }
        }
    )
    //Objetc.entries crea un array donde dentro de él hay arrays hijos; o elementos arrays. Cada uno de esos arrays tiene 2 posiciones. En la primera guarda el elemento (el número en este caso), y en la segunda posición guarda la cantidad de veces que aparece ese número
    const arrayDeArrays = Object.entries(listCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )

    const moda = arrayDeArrays[arrayDeArrays.length - 1];

    const resultado = document.getElementById("resultado");
    resultado.innerText = "la moda es de: " + moda;
}