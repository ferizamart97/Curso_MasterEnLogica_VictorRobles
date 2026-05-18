/* DADO UN TEXTO Y UNA BUSQUEDA, CENSURAR TODAS LAS COINCIDENCIAS DE LA BUSQUEDA EN EL TEXTO CON [-CENSURADO-] SI EL TEXTO O BUSQUEDA ESTAN VACIOS, MOSTRAR "NO PUEDES LEER EL TEXTO Y LA BUSQUEDA"

EJEMPLO

console(funcion("hola - hola", "hola"))
 
DEVUELVE [-CENSURADO-] O NO PUEDES LEER EL TEXTO Y LA BUSQUEDA
*/


function ocultar(frase, palabra){

    let palabraCensura = "[-CENSURADO-]";
    let textoCensurado = frase.replace(palabra, palabraCensura);

    return textoCensurado; 

}



console.log(ocultar("Hola, este mensaje es para ver las habilidades en js", "js"))