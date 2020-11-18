//- Pedir dos números y decir cual es el mayor o si son iguales.

//Funcion para la validacion de los datos ingresados por el DOM
function Valida(formulario) {
    if ((formulario.campo1.value.length == 0) || (formulario.campo2.value.length ==0)) {
        alert('Ingresa los datos numéricos');
        return false
    }   
    if (isNaN(n1=parseInt(formulario.campo1.value))) {
        alert('El valor que ingresaste en el Campo 1 NO es un número');
        return false;
    }
    if (isNaN(n2=parseInt(formulario.campo2.value))) {
        alert('El valor que ingresaste en el Campo 2 NO es un número');
        return false;
    }
    return Comparar(n1,n2);
}

// Compara dos numeros y retona un mensaje si son iguales o cual es el mayor
function Comparar(n1,n2) {
    if (parseInt(n1) == parseInt(n2)){
        alert("Estos numeros son iguales");
    }
    if (n1 > n2 ){
        alert("El Número 1 es mayor");
    }else
        alert("El Número 2 es mayor");
}