/* DADO UN ARRAY, DIVIDIRLO EN TANTOS SUB-ARRAYS COMO SEA NECESARIO, BASANDONOS EN UN NUMERO QUE INDIQUE SU TAMAÑO, DIVIRILO EN ARRAYS DE X ELEMENTOS 

EJEMPLO

[1,2,3,4,5,6,7,8] DIVIDIRLO EN ARRAYS DE 4 ELEMENTOS

DEVUELVE 

[[1,2,3,4], [5,6,7,8]]

CREAR ARRAY CON ELEMENTOS FALTANTES

EJEMPLO

[1,2,3,4,5,6,7,8,9,10] DIVIDIRLO EN ARRAYS DE 4 ELEMENTOS

DEVUELVE 

[[1,2,3,4], [5,6,7,8], [9,10]]

*/

//CODIGO INICIAL
function dividirArray(array, nElementos){

    let conArray = [];
    let arrayDiv = [];
    let vueltas = array.length / nElementos;
    let i = 0;


    while(i < vueltas){
        
        
        arrayDiv = array.splice(0, nElementos);

        i++;
        
        conArray.push(arrayDiv); 
    }
    
    return conArray; 

}

//CODIGO REFACTORIAZDO
// function dividirArray(array, nElementos) {
//   const resultado = [];
//   for (let i = 0; i < array.length; i += nElementos) {
//     resultado.push(array.slice(i, i + nElementos));
//   }
//   return resultado;
// }

console.log(dividirArray([1,2,3,4,5,6,7,8,9,10], 3))