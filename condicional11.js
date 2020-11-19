//Diseñar un programa que muestre el producto de los 10 primeros números impares.

const lista = document.getElementById('lista-dinamica');
const cuerpo = document.getElementById('productodiv');
const template = document.querySelector('#template-li').content;
const fragment = document.createDocumentFragment();
const arrayItem=[];
let producto = 0;

function suma(){
    for(i=0; arrayItem.length < 10; i++){
        if(i%2>0){
            arrayItem.push(i);
            producto += i;
        }
    }
    return arrayItem, producto;
}

suma();

arrayItem.forEach((item) => {
    template.querySelector('.list span').textContent = item;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
});

lista.appendChild(fragment);

const h3 = document.createElement('h3');
h3.textContent = `El producto de los 10 primeros impares es: ${producto}`;
productodiv.appendChild(h3);
