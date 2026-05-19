/* DADO UN STRING Y UN NUMERO, REPETIR EL STRING TANTAS VECES COMO EL NUMERO INDIQUE

EJEMPLOS
repiteme("fer", 3);

Devuelve
ferferfer

*/

//Funcion inicial
function repetir(palabra, veces){

    let i = 0;
    let textoFinal = "";

    while( i < veces){
        i++;
        textoFinal += palabra;
    }

    return textoFinal;
}


//CODIFO REFACTORIZADO
// function repetir(palabra, veces) {
//   return palabra.repeat(veces);
// }

console.log(repetir("Fer", 5));