// const arrayRmedio = [22, 1, 10, 12, 5, 44, 33, 55, 17];

// function ordenarLista(list) {
//     return list.sort(function (a, b) {
//         return a - b;
//     });
// }

function calcularRangoMedio() {
    const entradaRangoMedio = document.getElementById("numeroDatos");
    const rangoMedioValue = entradaRangoMedio.value;

    //conversión a número, dado que el input es de tipo texto (HTML)
    let arrayAnumber = Array.from(rangoMedioValue.split(","), Number);

    // ordenarLista(arrayAnumber);
    const listaOrdenada = arrayAnumber.sort((numMenor, numMayor) => numMenor - numMayor);

    const minValue = listaOrdenada[0];
    const maxValue = listaOrdenada[listaOrdenada.length - 1];
    // ordenarLista(arrayRmedio);
    // minValue = arrayRmedio[0];
    // maxValue = arrayRmedio[arrayRmedio.length - 1];

    // const rangoMedio = document.getElementById("numeroDatos");
    // const rangoMedioValue = rangoMedio.value;

    // let arrayRmedio = Array.from(rangoMedioValue.split(",", Number));
    // //Ordenamos los valores de la lista desordenada mediante el método sort() de menor a mayor

    // minValue = listaOrdenada[0];
    // maxValue = listaOrdenada.length;
    const promedioRangoMedio = (minValue + maxValue) / 2;
    resultado = document.getElementById("resultado");
    resultado.innerText = "El rango medio es de: " + promedioRangoMedio;
}

