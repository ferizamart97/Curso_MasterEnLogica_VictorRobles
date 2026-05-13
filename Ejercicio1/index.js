/*
    DADO UN NUMERO, DEVOLVER SU TABLA DE MULTIPLICAR COMPLETA
*/

/* MI SOLUCION */
function numeroTabla( numero ){
    let numeroMult = numero;
    let operacion = 0;
    let datos = "Tabla numero " + numeroMult + '\n';

    for(let i = 1; i <= 10; i++){

        operacion = i * numeroMult;



        datos += i + " X " + numeroMult + " = " + operacion + '\n';

    }

    return(datos);
}

console.log(numeroTabla(1));

/* SOLUCION DEL CURSO */



// function tablaMultiplicar(numero){
//     let resultado = `# TABLA ${numero} # \n`; 

//     for(let i = 1; i <= 10; i++){

//         let multiplicacion = (i * numero);

//          resultado += ` ${i} x ${numero} = ${multiplicacion} \n`;
        
//     }
     
//      return resultado;
// }

// console.log(tablaMultiplicar(5));

