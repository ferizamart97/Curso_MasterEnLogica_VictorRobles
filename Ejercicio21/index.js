/* 
    Dado una cadena de testo y un numero, recortar el string mostrando los x primeros caracteres

    ejemplo: recortar('cursos desarrollo web', 6) devuelve 'Cursos'
*/


function recortar(cadena, numero){
     return cadena.split('', numero).join('');

     //return cadena.slice(0, numero); Recomendado
}

console.log(recortar("cursos desarrollo web", 8))