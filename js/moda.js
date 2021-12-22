const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
)
//Objetc.entries crea un array donde dentro de él hay arrays hijos; o elementos arrays. Cada uno de esos arrays tiene 2 posiciones. En la primera guarda el elemento (el número en este caso), y en la segunda posición guarda la cantidad de veces que aparece ese número
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
)

const moda = lista1Array[lista1Array.length - 1];