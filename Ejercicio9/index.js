/* DADO 2 ARRAYS, DEVOLVER ARRAY CON SOLO LOS ELEMENTOS COMUNES DE AMBOS */

function comunes(array1, array2){

    let arrayComunes = [];
    let var1 = 0;
    let var2 = 0;

    for(let i = 0; i < array1.length; i++){

        var1 = array1[i];

        for(let j = 0; j < array2.length; j++){

            var2 = array2[j];

            if(var1 === var2){
                console.log(arrayComunes[j])
                if(arrayComunes.includes(var2)){
                    console.log("Ya exite dato");
                }else{
                    arrayComunes.push(var2);
                }
            }

        }

    }

    return arrayComunes;

}

console.log(comunes([1,2,3,4,5,6,7], [5,6,7,8,9,10,7]));