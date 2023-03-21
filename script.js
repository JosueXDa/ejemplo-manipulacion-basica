
const h1 = document.querySelector('h1');
const input = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

// form.addEventListener('submit',btnOnClick); // no pasar las funciones con parentesis con el addEventListener

// function btnOnClick(event){
//     event.preventDefault();
//     const sumaInputs = parseInt(input.value) + parseInt(input2.value);
//     pResult.innerText = "resultado: " + sumaInputs;
// }
btn.addEventListener('click',btnOnClick); // no pasar las funciones con parentesis con el addEventListener

function btnOnClick(){
    const sumaInputs = parseInt(input.value) + parseInt(input2.value);
    pResult.innerText = "resultado: " + sumaInputs;
}