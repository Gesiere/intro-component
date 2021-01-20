const form = document.querySelector('.form');
const inputFields = document.querySelectorAll('.input');
const formCard = document.querySelector('.form-card');
const errorMessage = document.querySelectorAll('.error-message');


form.addEventListener('submit', (e) => {
    inputFields.forEach((input, index) => {
        if (input.value.trim() === '' || input.value === null) {
            e.preventDefault();
            errorFunc(input, index)  
        }          
    })
    
});


function errorFunc (input, index){
    inputFields[index].classList.add('input-warning');
    inputFields[index].classList.add('error-icon')
    formCard.classList.add('visible');
    errorMessage[index].classList.add('invalid');
}




















