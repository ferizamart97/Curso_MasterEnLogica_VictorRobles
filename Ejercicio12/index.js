/* dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8, 
en una lista con guiones donde cada numero debe empezar por n° 

EJEMPLO 

DEL 100 AL 0

n° 100
n° 92
n° 84
etc
n° 4
FIN

*/

function listaNumeros(numero){

    let lista = "";
    let i = numero;

    while(i >= 0){

        if( i >= 0){
            lista += "n°" + i + '\n'; 
        }

        i = i - 8;

       
    }

    lista += "FIN";

    return lista;

}

console.log(listaNumeros(16));

