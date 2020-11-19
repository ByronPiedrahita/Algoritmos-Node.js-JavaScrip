//Escribir todos los números del 100 al 0 de 7 en 7.

const lista = document.getElementById('lista-dinamica');
const template = document.querySelector('#template-li').content;
const fragment = document.createDocumentFragment();
const arrayItem=[];

function serie(){
  for(i=100; i >=0; i-=7){
    arrayItem.push(i);
  }
  return arrayItem;
}

serie();

arrayItem.forEach((item) => {
  template.querySelector('.list span').textContent = item;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);