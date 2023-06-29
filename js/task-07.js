const fontSizeControl = document.querySelector('#font-size-control');
console.log(fontSizeControl);
const text = document.querySelector('#text');
console.log(text);

fontSizeControl.addEventListener('input', changeSizeText);


function changeSizeText(){
    text.style.fontSize = `${fontSizeControl.value}px`;
};