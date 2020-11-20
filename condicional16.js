//Pide un número (que debe estar entre 0 y 10) y mostrar la tabla de multiplicar de dicho número.

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
    if (isNaN(n1=parseInt(valor))) {
        alert('El valor que ingresaste NO es un número');
        return false;
    }
    if (n1 < 0 || n1 > 10) {
        alert('Ingrese un número entre 0 y 10');
        return false;
    }
    for( x of valor ){
        if ( x === '.'){
           puntos++;
        }
        if (puntos === 1){
            alert('El valor que ingresaste NO es un número ENTERO');
            return false;
        }
    }
    
    return listar(valor); 
}

//Lista desde el 1 hasta el número ingresado
function listar(_num){
    for(i=1; i <= 12; i++){
        let producto = i * _num;
        let datotabla = `${i} * ${_num} = ${producto}`;
        arrayItem.push(datotabla);
    }
    return arrayItem;
}

arrayItem.forEach((item) => {
  template.querySelector('.list span').textContent = item;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);