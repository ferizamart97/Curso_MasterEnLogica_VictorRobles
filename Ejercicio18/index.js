/* DADO UN NUMERO, MOSTRAR TODOS SUS NUMEROS DIVISORES HASTA ESE NUMERO

EJEMPLO
mostrarDivisores(5):

DEVUELVE
1
5
*/

function divisores(numero){
    let lista = "";
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            lista += i + '\n';
        }
    }
    return lista;
}

console.log(divisores(10));