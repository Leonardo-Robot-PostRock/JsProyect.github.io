function calcularRangoMedio() {
    const entradaRangoMedio = document.getElementById("numeroDatos");
    const rangoMedioValue = entradaRangoMedio.value;

    let arrayAnumber = Array.from(rangoMedioValue.split(","), Number);

    const listaOrdenada = arrayAnumber.sort((numMenor, numMayor) => numMenor - numMayor);

    const minValue = listaOrdenada[0];
    const maxValue = listaOrdenada[listaOrdenada.length - 1];
    
    const promedioRangoMedio = (minValue + maxValue) / 2;
    resultado = document.getElementById("resultado");
    resultado.innerText = "El rango medio es de: " + promedioRangoMedio;
}

