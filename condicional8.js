//Pedir un número N, y mostrar todos los números del 1 al N.
const lista = document.getElementById('lista-dinamica');
const template = document.querySelector('#template-li').content;
const fragment = document.createDocumentFragment();
const arrayItem=[];

const num = prompt('Ingrese un número', '');

validar(num);

//Funcion para la validacion de los datos ingresados por el DOM
function validar(valor) {
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

//Lista desde el 1 hasta el número ingresado
function listar(_num){
    for(i=1; i <=_num; i++){
        arrayItem.push(i);
    }
    return arrayItem;
}

arrayItem.forEach((item) => {
  template.querySelector('.list span').textContent = item;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);