/* 
    Ejercicio 23

    Dada una cadena de texto, poner en mayúscula la primera letra de cada palabra en la cadena y luego devolver la cadena.

    Ejemplo:

    enMayuscula('hola soy victor')
    // Devuelve: 'Hola Soy Victor'
*/

function mayusculas(cadena){
    let textoCadena = cadena.split(" ");
    let textoMayusculas = "";

    for(let i = 0; i < textoCadena.length; i++){
        textoMayusculas += textoCadena[i].charAt(0).toUpperCase() + textoCadena[i].slice(1) + " ";
    }

    return textoMayusculas.trim();
}

console.log(mayusculas("hola soy fer"))