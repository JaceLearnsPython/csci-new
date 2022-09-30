function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
function drawCreature(centerX, centerY, size, color1, color2){

    const eyeSize = size * 0.15;
    const yCalc = centerY * 1.05

    fill(color1);
    circle(centerX, centerY, size);
    fill(color2);
    circle(centerX + 1 * eyeSize, centerY - eyeSize, eyeSize);
    circle(centerX - 1 * eyeSize, centerY - eyeSize, eyeSize);
}
