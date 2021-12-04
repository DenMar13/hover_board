const board = document.querySelector('#board');
const colors = ['#da1813', '#ffbd88', '#ffc822', '#cafc13', '#3afa13', '#0ee972', '#58ebeb', '#5052bd'];
let col = +prompt('Введите число элементов: ', 1);
const SQUARES_NUMBER = col;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);
    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 4px ${color}, 0 0 4px ${color}`;
}
function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 0px #000';
}
function getRandomColor() {
    // const index = Math.floor(Math.random() * colors.length);
    return colors[Math.floor(Math.random() * colors.length)];
}
