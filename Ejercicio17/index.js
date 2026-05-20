/* 
DADO UN NUMERO, MOSTRAR LOS NUMEROS DE 1 HASTA EL NUMERO.
PERO PARA MULTIPLOS DE CINCO IMPRIMIR "LIGHTYEAR"
PARA MULTIPLOS DE TRES Y CINCO "BUZZLIGHTYEAR"
 */

function serie(numero){

    let lista = "";

    for(let i = 1; i <= numero; i++){


        if(i % 3 === 0 && i % 5 === 0){
            lista += "BUZZLIGHTYEAR" + "\n";
        }else if(i % 3 === 0){
            lista += "BUZZ" + "\n";
        }else if(i % 5 === 0){
            lista += "LIGHTYEAR" + "\n";
        }else { 
            lista += i + "\n";
        }

    }   

    return lista; 
}

console.log(serie(100));