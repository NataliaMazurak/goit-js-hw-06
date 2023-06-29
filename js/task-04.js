const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);
const counterValue = document.querySelector('#value');
console.log(counterValue);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn)

let count = 0;
decrementBtn.addEventListener('click', minusBtnClick);
function minusBtnClick () {
    count -= 1;
    counterValue.textContent = count;
}

incrementBtn.addEventListener('click', plusBtnClick);
function plusBtnClick(){
    count += 1;
    counterValue.textContent = count;
}