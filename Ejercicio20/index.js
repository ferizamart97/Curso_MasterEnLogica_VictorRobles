/* DADO DOS CADENAS DE TEXTO, CREAR UN ALGORITMO QUE COMPRUEBE SI SON ANAGRAMAS ENTRE SI

UNA CADENA ES UN ANAGRAMA DE OTRA SI USA LOS MISMOS CARACTERES EN LA MISMA CANTIDAD

NO TENER EN CUENTA ESPACIOS, SIMBOLOS RAROS, PUNTOS, ETC.

EJEMPLO
anagramas("Riesgo", "Sergio") DEVUELVE TRUE
anagramas("Fer", "Izazaga") DEVUELVE FALSE

*/

// function anagramas( palabra1, palabra2 ){

//     let palabra1C = palabra1.toUpperCase().split('').sort().join(''); 

//     let palabra2C = palabra2.toUpperCase().split('').sort().join('');

//     if(palabra1C === palabra2C){
//         return "Anagrama";
//     }else{
//         return "No es anagrama"
//     }
    
// }

function anagramas( palabra1, palabra2 ){

    let palabra1C = palabra1.toUpperCase(); 

    let palabra2C = palabra2.toUpperCase();

    if(palabra1C.length === palabra2C.length){
        let contador = {};

        for (let i = 0; i < palabra1C.length; i++) { 
            let letra = palabra1C[i]; 
            
            if (contador[letra] === undefined) { 
                contador[letra] = 0; 
            } 
            
            contador[letra]++; 
        }

        for (let i = 0; i < palabra2C.length; i++) { 
            let letra = palabra2C[i]; 
            
            if (contador[letra] === undefined) { 
                contador[letra] = 0; 
            } 
            
            contador[letra]--; 
        }

        for (let letra in contador) { 
            if (contador[letra] !== 0) { 
                return "No son anagramas"; 
            } 
        }

         return "Son anagramas";

    }else{
        return "No son Anagramas"
    }

}

console.log(anagramas("Riesgo", "Sergio"));