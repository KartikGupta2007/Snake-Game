const board = document.querySelector('.Board-Container');
const blockHeight = 32;
const blockWidth = 32;

let cols = Math.floor(board.clientWidth / blockWidth);
let rows = Math.floor(board.clientHeight / blockHeight);

for (let i = 0; i < rows * cols; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    board.appendChild(block);
}