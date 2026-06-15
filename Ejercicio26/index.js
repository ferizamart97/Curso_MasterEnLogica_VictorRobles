/* 

Ejercicio 26

Dado un número, mostrar su serie de Fibonacci.

La serie de Fibonacci es un orden de números donde cada número es la suma de los dos anteriores.

Ejemplos:

fib(10)[10]
fib(10)[1]

Serie completa:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Resultado de la serie Fibonacci:

55

*/

function fibo(limite){

    const inicio = [0, 1];
    let serie = inicio;
    let numeroFinal = 0;

    if (limite <= 0) {
        return [];
    }

    if (limite === 1) {
        return [0];
    }
    
    for(let i =  2; i <= limite; i++){

        let n = serie.length;

        let suma = serie[n - 2] + serie[n - 1];

        serie.push(suma);

    }

    numeroFinal = serie[limite];

    return numeroFinal;

}

console.log(fibo(10))