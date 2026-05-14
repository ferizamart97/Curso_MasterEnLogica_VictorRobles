/* NUMEROS IMPARES ENTR 2 NUMEROS DADOS */

function impares(n1, n2){
    
    let contImpares = 0;

    for(let i = n1; i < n2; i++){

        if(i % 2 != 0){
            contImpares++;
        }

    }

    return contImpares;
}

console.log(impares(1, 10));