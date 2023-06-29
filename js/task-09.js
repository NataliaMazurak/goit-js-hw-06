const color = document.querySelector('.color');
console.log(color);

const changeColor = document.querySelector('.change-color');
console.log(changeColor);

function getRandomHexColor() {
 
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


changeColor.addEventListener('click', onClickBtn);

function onClickBtn(){
  const randomColor = getRandomHexColor();
document.body.style.backgroundColor = randomColor;
color.textContent = randomColor;
}





