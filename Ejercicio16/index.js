/* DADA UNA CADENA DE TEXTO, DEVLVER CUANTAS VOCALES TIENE

EJEMPLO
vocales("Fernando") 

DEVUELVE
3

*/

function vocales(palabra){

    let arrayVocales = ["a", "e", "i", "o", "u"];
    let contador = 0;

    for(let i = 0; i < palabra.length; i++){

        let letra = palabra[i].toLowerCase();

        for(let j = 0; j < arrayVocales.length; j++){
            
            if(letra === arrayVocales[j]){
                contador++;
            }

        }

    }

    return contador;

}


console.log(vocales("AeoU"))