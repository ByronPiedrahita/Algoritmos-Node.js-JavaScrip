//Pedir un número entre 0 y 9.999 y mostrarlo con las cifras al revés.

//Funcion para la validacion de los datos ingresados por el DOM
function validar(formulario) {
    let valor = formulario.campo1.value;
    var puntos = 0;
    if (valor.length == 0){
        alert('Ingresa un número');
        return false;
    }   
    if (isNaN(n1=parseFloat(valor))) {
        alert('El valor que ingresaste NO es un número');
        return false;
    }
    if (n1 < 0 || n1 > 9.999) {
        alert('Ingrese un número entre 0 y 9.999');
        return false;
    }
    for( x of valor ){
        if ( x === '.'){
           puntos++;
        }
        if (puntos === 2){
            alert('El valor que ingresaste NO es un número');
            return false;
        }
    }
    return contarCifras(valor); 
}

//Cuenta las cifras del numero entre 0 - 9.999
function contarCifras(num){
    let alreves = num.charAt(num.length-1).concat('.');
    for( i=2; i<=num.length ; i++){
        cifra = num.charAt(num.length-i);
        if(cifra === '.') continue;
        alreves = alreves.concat(cifra);
    } 
    alert(`El número ingresado con sus cifras al reves es ${alreves}` );
}