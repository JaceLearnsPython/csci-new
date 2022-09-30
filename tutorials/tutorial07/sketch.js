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
    drawFace(100, 400, 200);
    drawFace(400, 100, 100);
    drawFace(200, 200, 100);
    



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

    let eyeSize = size * 0.15;
    let eyeCalc = 1.3 * eyeSize;
    let mouthY = centerY + centerY * 0.07;
    let mouthLeftX = centerX - size / 4;
    let mouthRightX = centerX + size / 4;
    



    fill('yellow');
    circle(centerX, centerY, size); // face
    fill('blue');
    circle(centerX + eyeCalc, centerY - eyeSize, eyeSize); // eye right
    circle(centerX - eyeCalc, centerY - eyeSize, eyeSize); // eye left
   
    // Line for mouth
    strokeWeight(size / 20);
    // line(mouthLeftX, mouthY, mouthRightX, mouthY);
    strokeWeight(1)

    noFill();
    curve(
        mouthLeftX, mouthY - size,       // control point
        mouthLeftX, mouthY,             // first point
        mouthRightX, mouthY,           // second point
        mouthRightX, mouthY - size    // control point
    );
    
}
