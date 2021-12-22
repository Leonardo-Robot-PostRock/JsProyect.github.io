const notes = [{
    course: "Educación Física",
    note: 10,
    credit: 2,
},
{
    course: "Programación",
    note: 8,
    credit: 5,

},
{
    course: "Finanzas Personales",
    note: 7,
    credit: 5,
},
];

const noteWhitCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

//Sumar todos los elementos del arreglo de elementos multiplicados por su peso (crédito) 
const sumofNotesWhitCredit = noteWhitCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

//Sumar todos los pesos (créditos)

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
}
);

const sumOfCredits = credits.reduce(function (sum = 0, newVal){
    return sum + newVal;
});

//Hacer la división entre ambas “sumas”
const promedioPonderadoNotasConCreditos = sumofNotesWhitCredit / sumOfCredits;