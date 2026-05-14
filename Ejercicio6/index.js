/* DIBUJAR CUADRADO CON ASTERISCOS Y QUE ESTE HUECO */

function cuadrado(numero){
    let cuadro = "";

    for(let i = 0; i < numero; i++){
        let fila = "";
        for(let j = 0; j < numero; j++){
            if(i === 0 || i === numero - 1 || j === 0 || j === numero - 1){
                fila += "*";
            }else{
                fila += " ";
            }
        }
        cuadro += fila + '\n'; 
    }

    return cuadro;

}

console.log(cuadrado(3));