//- Pedir dos números y mostrarlos ordenados de mayor a menor.

//Funcion para la validacion de los datos ingresados por el DOM
function validar(formulario) {
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
    return ordenar(n1,n2);
}

// Compara dos numeros y retona un mensaje si son iguales o cual es el mayor
function ordenar(n1,n2) {
    if (parseInt(n1) > parseInt(n2)){
        //const mensaje = `El orden de Mayor a menor es ${n1} y ${n2}`
        alert(`El orden de Mayor a menor es ${n1} y ${n2}`);
    }else
    alert(`El orden de Mayor a menor es ${n2} y ${n1}`);
}