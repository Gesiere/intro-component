const form = document.querySelector('.form');
const input = document.querySelectorAll('.input');
const btn = document.querySelector('.btn');
const formCard = document.querySelector('.form-card');
const errorMessage = document.querySelectorAll('.error-message');
const errorIcon = document.querySelectorAll('.error-icon');


function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


form.addEventListener('submit', (e) => {

     input.forEach((inputs, index) => {
         if (inputs.value === '' || inputs.value === null) {
            e.preventDefault()
            errorFunc(inputs,index)
         }
         
         if (!validEmail(inputs)) {
            errorFunc(inputs,index)
         }
    })
    
    
    
});




function errorFunc (inputs, index){
    input[index].classList.add('input-warning');
    formCard.classList.add('visible');
    errorMessage[index].classList.add('invalid');
}




















