/* INVERTIR NUMERO ENTERO Y DEVOLVERLO EL NUMERO */

function invertir(numero){

    let numeroArray = numero.toString().split("").reverse().join("");

    return Number(numeroArray);
}

console.log(invertir(15));