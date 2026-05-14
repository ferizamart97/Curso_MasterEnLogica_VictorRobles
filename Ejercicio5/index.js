/* Cuanto es el X por ciento de X numero */

function operacionP(porcentaje, numero){

    let conversion = porcentaje / 100;
    let porciento = numero * conversion;

    return porciento;
}

console.log(operacionP(20, 80));