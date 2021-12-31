function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    }
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return parseInt(valorAcumulado + nuevoElemento);
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

var salarios = [];

function agregarPersona() {
    const nombre = document.getElementById("nombre");
    const salario = document.getElementById("salario");
    const nombreValue = nombre.value;
    const salarioValue = parseInt(salario.value);

    salarios.push({
        nombre: nombreValue,
        salario: salarioValue,
    });

    const resultadoPersonas = document.getElementById("resultadoPersonas");
    resultado.innerText = salarios.length;
}

//Mediana general


function calcularMedianaTop10() {
    const soloSalarios = salarios.map(
        function (persona) {
            return persona.salario;
        }
    );

    const soloSalariosSorted = soloSalarios.sort(function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
    );


    const spliceStart = parseInt((soloSalariosSorted.length * 90) / 100);
    const spliceCount = parseInt(soloSalariosSorted.length - spliceStart);

    const salariosArgTop10 = soloSalariosSorted.splice(spliceStart, spliceCount,);

    const medianaTop10 = medianaSalarios(salariosArgTop10);

    const resultado = document.getElementById("resultado");
    resultado.innerText = `La mediana del top 10 de salarios es de $${medianaTop10}`;
}

function calcularMedianaGeneral() {
    const soloSalarios = salarios.map(
        function (persona) {
            return persona.salario;
        }
    );

    const soloSalariosSorted = soloSalarios.sort(function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
    );
    const medianaGeneralArg = medianaSalarios(soloSalariosSorted);

    const resultadoMediana = document.getElementById("resultadoMedianaG");
    resultadoMediana.innerText = `La mediana general es de $${medianaGeneralArg}`
}