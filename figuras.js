/**
 * Código del cuadrado
 */
console.group("Cuadrados");
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: "
    + ladoCuadrado
    + "cm"
);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "
    + perimetroCuadrado
    +
    "cm"
);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: "
    + areaCuadrado
    + "cm^2"
);
console.groupEnd();

/**
 * Código del triángulo
 */
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: "
    + ladoTriangulo1
    + "cm, "
    +
    ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
);
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: "
    + alturaTriangulo
    + "cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del Triángulo es: "
    + perimetroTriangulo
    +
    "cm"
);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: "
    + areaTriangulo
    + "cm^2"
);
console.groupEnd();

/**
 * Círculos
 */


