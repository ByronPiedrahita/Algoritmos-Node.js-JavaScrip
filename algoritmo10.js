//Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene.

//Funcion para la validacion de los datos ingresados por el DOM
function validar(formulario) {
    const valor = formulario.campo1.value;
    let puntos = 0;
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
    let x;
    let cifras = [];
    for( x of num){
        if ( x !== "."){
            cifras.push(x);
        }
    }
    if (cifras.length === 1){
        alert("Este número tiene 1 cifra");
        return false;
    }else{
        alert(`Este número tiene ${cifras.length} cifras` );
    }
}