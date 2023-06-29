
const nameInput = document.querySelector('#validation-input');
console.log(nameInput);

const inputLength = parseInt(nameInput.dataset.length);
console.log(inputLength)

nameInput.addEventListener('blur', numberOfCharacters );


function numberOfCharacters (){

const inputValue = nameInput.value.trim();
console.log(inputValue)

if(inputValue.length === inputLength){
    nameInput.classList.remove('invalid');
    nameInput.classList.add('valid');
} 
else{
    nameInput.classList.remove('valid');
    nameInput.classList.add('invalid');
}
};



