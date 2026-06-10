/*
    Dados dos numeros, indicar cual es mayor y cual es menor

    ejemplos mayormenor(8,6)

    Devuelve 
    MAYOR: 8
    MENOR: 6
*/

function numerosMayoresMenores(numero1, numero2){
    if( numero1<numero2){
        return " MAYOR: " + numero2 + "\n" + " MENOR: " + numero1
    }else{
        return " MAYOR: " + numero1 + "\n" + " MENOR: " + numero2
    }
}

console.log(numerosMayoresMenores(3,4));