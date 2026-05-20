/* DADA UNA CADENA DE TEXTO, DEVOLVER EL CARACTER MAS USADO 

EJEMPLO 
masUsado("fernando")

DEVUELVE
lo que mas se repite es: n (Letra que mas se repite)

*/

function letraRepetida(palabra){
    
    let tabla = {}; 
    let palabras = palabra.split("");
    let mayor = 0;
    let claveMayor = "";

    for(let i = 0; i < palabras.length; i++ ){
        const letra = palabras[i];

        if(tabla[letra]){
            tabla[letra] = tabla[letra] + 1;
        }else{
            tabla[letra] = 1;
        }
    }

    for(const clave in tabla){
        if(tabla[clave] > mayor){
            mayor = tabla[clave];
            claveMayor =  "lo que mas se repite es:" + clave;
        }
    }

    return claveMayor;
    
}

console.log(letraRepetida("Fernando"))