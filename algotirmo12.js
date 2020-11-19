//- Pedir un número entre 0 y 9.999, decir si es capicúa.

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
    return cupicua(valor); 
}

//Dece si hay un capicúa
function cupicua(num){
    let ordenado = "";
    let alreves = "";
    for( i=0; i<=num.length ; i++){
        let cifra = num.charAt(i);
        if(cifra === '.'){
            continue;
        } 
        ordenado = ordenado.concat(cifra)
    }
    
    for ( i=1; i<=num.length ; i++){
        cifra = num.charAt(num.length-i);
        if(cifra === '.') continue;
        alreves = alreves.concat(cifra);
    }
    if (ordenado === alreves){
        alert(`El número ingresado es un CAPICÚA` );
    }else{
        alert(`El número ingresado NO es capicúa` );
    }
}

    