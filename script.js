const board = document.querySelector('.board')
const blockHeight = 30
const blockWidth = 30


const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const blocks = []
const snake = [
    {
        x:1, y:4
    },{
        x:1, y:5
    },{
        x:1, y:6
    }
]

let direction = 'right'


for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        const block = document.createElement('div')
        block.classList.add('block')
        board.appendChild(block);
        blocks[`${r}-${c}`] = block;
    } 
}
function drawSnake(){
    snake.forEach(segment => {
        const block = blocks[`${segment.x}-${segment.y}`]
        block.classList.add('fill')
    })  
}

setInterval(() =>{
    drawSnake();
}, 300);