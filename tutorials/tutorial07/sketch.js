function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 50, 'yellow');
    drawCircle(300, 100, 50, 'yellow');
    drawCircle(250, 100, 20, 'yellow');
    drawCircle(150, 100, 20, 'yellow');



    // Exercise 2: 
    drawOval(200, 100, 30, 100, 'red');
    drawOval(200, 400, 30, 100, 'red');
    drawOval(400, 300, 30, 100, 'red');


    // Exercise 3:
    drawBullseye(600, 400, 100);
    drawBullseye(750, 400, 100);
    drawBullseye(400, 400, 100);


    // Exercise 4:
    drawFace(1100, 400, 100);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);


}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size) {
    fill('teal');
    circle(centerX, centerY, size);
    fill('navy');
    circle(centerX, centerY, size - 25);
    fill('teal');
    circle(centerX, centerY, size - 50);
    fill('navy');
    circle(centerX, centerY, size - 75);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size) {
    const eyeSize = size * 0.05;
    fill('white');
    circle(centerX, centerY, size);
    fill('black');
    circle(centerX + 3 * eyeSize, centerY - eyeSize, eyeSize);
    circle(centerX - 3 * eyeSize, centerY - eyeSize, eyeSize);
    noFill()
    curve(
        600, 850,       // control point
        700, 450, 
        900, 450,
        1000, 850        // control point
    );

}
