/* 

    Ejercicio 24

    Dada un array de enteros y un número, detectar si esa lista de números es una permutación del 1 al número aportado.

    En este caso una permutación es una secuencia de números en orden sin que falte ninguno entre ellos.

    Ejemplos:

    permutacion([1, 2, 3, 4, 5], 5)
    // Devuelve: true

    permutacion([1, 2, 3, 5], 5)
    // Devuelve: false
*/

function permutacion(arrayN, numero){

    // Generamos un arreglo desde 1 hasta el número límite
  // Ejemplo: si límite es 5, crea [1, 2, 3, 4, 5]
    const numerosEsperados = Array.from({length: numero}, (_, i) => i + 1);

    // Verificamos si todos los números esperados están en tu arreglo
    return numerosEsperados.every(num => arrayN.includes(num));

}

console.log(permutacion([1, 2, 3, 4, 5], 5));

/* 

    ¿Cómo funciona?
    
    Array.from(): 
    Construye un arreglo desde el número 1 hasta el número ingresado por el usuario de forma dinámica.

    every(): 
    Recorre este nuevo arreglo y evalúa si todos los elementos cumplen con una condición.
    
    includes(): 
    Revisa si tu arreglo original contiene cada uno de los números del ciclo.

*/
