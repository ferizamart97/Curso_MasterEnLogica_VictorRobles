/* INVERTIR PALABRA SIN METODOS DEL LENGUAJE SOLO ESTRUCTURAS DE CONTROL */

function invertir(palabra){

    let palabra_invertida = "";

    for(let i = palabra.length - 1; i >= 0; i--){

        palabra_invertida += palabra[i];

       
    }

     return palabra_invertida

}

console.log(invertir("hola"));