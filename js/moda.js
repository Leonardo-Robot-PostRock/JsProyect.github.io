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
    1
]

const lista1Count = {};

lista1.map{
    function(elemento) {
        //El problema que esta declaración va a decir que el elemento encontrado siempre va a ser igual a 1 y no va a sumar la cantidad de veces que aparece el mismo número
        lista1Count[elemento] = 1;
    }
}