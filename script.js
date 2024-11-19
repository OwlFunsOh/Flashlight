const WALL = '■';
const SPACE = ' '
const START = '○'
const board_layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const dark = document.querySelector('.dark');
const light = document.querySelector('.light');

document.addEventListener('mousemove', (e) => {
    const pageX = e.pageX
    const pageY = e.pageY

    light.style.left = (pageX - 100) + 'px';
    light.style.top = (pageY - 100) + 'px';
})


for (let i = 0; i < board_layout.length; i++) {
    for (let j = 0; j < board_layout[i].length; j++){
        const newDiv = document.createElement('div');
        newDiv.style.height = '50px';
        newDiv.style.width = '50px';
        newDiv.style.fontSize = '100px';
        newDiv.style.textAlign = 'center'

        if (board_layout[i][j] == 1) {
            newDiv.textContent = WALL;
        }else if (board_layout[i][j] == 0){
            newDiv.textContent = SPACE;
        }else{
            newDiv.textContent = START;
        }
        mazeContainer.appendChild(newDiv);
    }
}
        
