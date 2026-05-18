/* DADO UN NUMERO, MOSTRAR UNA ESCALERA CON ESCALONES DE [-], USANDO EL NUMERO PARA LOS NIVELES DE LA ESCALERA 

EJEMPLO

[-]
[-][-]
[-][-][-]
[-][-][-][-]

*/

function escalones(nivel){

    let numeroEscalones = nivel;
    let fila = 0;
    let priamide = "";
    let escalones = "[-]";
    
    for(let i = 0; i < numeroEscalones; i++){

        priamide = priamide + '\n';
        fila++;

        for(let j = 0; j < fila; j++){
            priamide += escalones; 
        }

    }

    return priamide;

}


console.log(escalones(10))
