let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    console.log(ev.code);
    // TODO:
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    
    
    // up
    if(ev.code === 'ArrowUp'){
        y = y - 10;
    }
    // left
    else if(ev.code === 'ArrowLeft'){
        x = x - 10;
    }
    // right
    else if(ev.code === 'ArrowRight'){
        x = x + 10;
    }
    // down
    else if(ev.code === 'ArrowDown'){
        y = y + 10;
    }


    // redraw circle:
    clear();
    noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);

    
}


// Add event listener on keydown
document.addEventListener('keyleft', moveController);
document.addEventListener('keyright', moveController);
document.addEventListener('keyup', moveController);
document.addEventListener('keydown', moveController);

