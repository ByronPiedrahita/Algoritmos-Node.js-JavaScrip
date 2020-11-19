//Pedir un número y calcular su factorial

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
    return factorial(valor); 
}

//Calcula el factorial de un número
function factorial(num){
    let factorialnum = 1;
    for( i=1 ; i <= num ; i++){
        factorialnum *= i;
    }
    alert(`Este número factorial de ${num} es ${factorialnum}` );
}