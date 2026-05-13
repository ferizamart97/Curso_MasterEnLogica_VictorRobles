/* PALINDROMO */

/* MI SOLUCION */
function palindromo(palabra){

    let letras = palabra.split("");
    let resultado = "";
    let palindromo = Boolean;

    for(let i = letras.length - 1; i >= 0; i--){

        resultado += letras[i];

        if(resultado === palabra){
            palindromo = true;
        }else{
            palindromo = false;
        }

    }

    return palindromo;
}

console.log(palindromo("oferta"));

/* SOLUCION DEL CURSO */
/*
    function palindromo(texto){
        let invertido = texto
                            .split("")
                            .reverse()
                            .join("");

        ireturn (invertido === texto);
    }

    console.log(palindromo("oferta"));
*/