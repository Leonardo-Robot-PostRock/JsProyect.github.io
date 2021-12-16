function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calcularMediana() {
    //Se captura los datos del html y se guardan los valroes dentro de una variable
    const entradaMediana = document.getElementById("numeroDatos");
    const medianaValue = entradaMediana.value;

    let arrayMediana = Array.from(medianaValue.split(","), Number);
    //Ordenamos los valores de la lista desordenada mediante el método sort() de menor a mayor
    const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
    
    // -------------Otra forma de ordenar una lista---------------
    // function ordenar(listaD) {
    //     let listaO = listaD;
    //     let paso = 0;
    //     for (let i = 0; i <= listaO.length; i++) {
    //       for (let j = 0; j < listaO.length; j++) {
    //         if (listaO[j] > listaO[j + 1]) {
    //           paso = listaO[j];
    //           listaO[j] = listaO[j + 1];
    //           listaO[j + 1] = paso;
    //         }
    //       }
    //     }
    //     return listaO;
    //   }

    //Se pasa a entero porque no existe la posición 2.5, se necesita que sea un N° entero para que el cálculo devuelva una posición válida
    const mitadLista1 = parseInt(listaOrdenada.length / 2);

    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista1 - 1];
        const elemento2 = listaOrdenada[mitadLista1];

        const promedioElementoUnoYdos = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElementoUnoYdos;
    } else {
        mediana = listaOrdenada[mitadLista1];
    }

    //Enviamos los resultados obtenidos a la página html para su visualización
    const mostrarResultado = document.getElementById("resultado");
    mostrarResultado.innerText = "La mediana es de: " + mediana;
}