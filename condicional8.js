//Pedir un número N, y mostrar todos los números del 1 al N.
const lista = document.getElementById('lista-dinamica');
const template = document.querySelector('#template-li').content;
const fragment = document.createDocumentFragment();
let arrayItem=[];

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
    for( x of valor ){
        if ( x === '.'){
           puntos++;
        }
        if (puntos === 2){
            alert('El valor que ingresaste NO es un número');
            return false;
        }
    }
    return listar(valor); 
}

//Lista los numeros desde el 1 hasta el número ingresado
function listar(num){
    for(i=1; i <= num; i++){
        arrayItem.push(i);
    }
    //alert(arrayItem);
    arrayItem.forEach((item) => {
        template.querySelector('.list span').textContent = item;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
      });
      
      lista.appendChild(fragment);
}


