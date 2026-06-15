/* 

Dado un string, ponerlo completo en mayúsculas o minúsculas dependiendo de si hay más mayúsculas o minúsculas por defecto en el string.

Si hay más mayúsculas, ponerlo todo en mayúsculas.
Si hay más minúsculas, ponerlo todo en minúsculas.

Ejemplos:

mayusMinus("JOAQuin")
// Devuelve: JOAQUIN

mayusMinus("Victor")
// Devuelve: victor

*/

function mayusMinus(frase){

    let contadorMin = 0;
    let contadorMay = 0;
    let salidaFrase = "";

    for( letra of frase ){

        if(letra.toUpperCase() === letra){
            contadorMay++
        }else if(letra.toLowerCase() === letra){
            contadorMin++
        }

    }

    if(contadorMay > contadorMin){
        for( let i = 0; i < frase.length; i++ ){
            salidaFrase += frase[i].toUpperCase();
        }
    }else{
        for( let i = 0; i < frase.length; i++ ){
            salidaFrase += frase[i].toLowerCase();
        }
    }

    return salidaFrase;

}

console.log(mayusMinus("JOAQUine"));

