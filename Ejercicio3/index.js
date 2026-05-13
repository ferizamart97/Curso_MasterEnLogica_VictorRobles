/* ENCONTRAR PALABRA EN UNA FRASE Y VER CUANTAS VECES SE REPITE */

/* MI SOLUCION */
function palabras(frase, palabra){

    let arrayPalabras = frase.split(" ");
    let contador = 0;

    for(let i = 0; i < arrayPalabras.length; i++){
        
        if(arrayPalabras[i].toLowerCase().replace(/[,.-]/,'')  === palabra.toLowerCase()){
            contador++;
        }
    }

    return contador;

}


console.log(palabras("Hola, esta es la frase para ver que se repite en la frase", "hola"));

/* SOLUCION DEL CURSO */
// function coincidencias(frase, busqueda){
//     let texto_limpio = frase.toLowerCase().replace(/[,.-]/,'');
//     let resultado = 0;

//     if(texto_limpio.includes(busqueda)){    
//         let palabras = texto_limpio.split(" ");
//         let mapa = {};

//         for(let palabra of palabras){

//             if(mapa.palabra){
//                 mapa[palabra]++;
//             }else{
//                 mapa[palabra] = 1;
//             }

//         }

//         resultado = mapa[busqueda];
        
//     }else{
//         resultado = 0;
//     }

//     return resultado;
// }

// console.log(coincidencias("Hola, esta es la frase para ver que se repite en la frase", "hola"));