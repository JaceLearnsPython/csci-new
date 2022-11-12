const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawElmo(100, 100, 150, '#0bc9cd', true);   
    drawElmo(300, 200, 75, '#0bc9cd', false);   
    drawElmo(100, 325, 100, '#8093f1', false);  
    drawElmo(250, 375, 125, '#7fb285', true);   
    drawElmo(550, 200, 250, '#102e4a', true);   


    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:
function drawElmo(x,y,size,color, hasNose){
    
    let eyeSize = size / 5
    let eyeCalc = 0.5 * eyeSize
    let noseLength = size / 3
    let noseWidth = size / 4

    let pupilSize = size / 20


    fill(color)
    circle(x,y,size)

    fill('white')
    //left eye
    circle(x - eyeCalc , y - eyeCalc, eyeSize);
    // left pupil
    fill('black');
    circle(x - eyeCalc , y - eyeCalc, pupilSize);

    // right eye
    fill('white');
    circle(x + eyeCalc, y - eyeCalc, eyeSize);
    // right pupil
    fill('black');
    circle(x + eyeCalc, y - eyeCalc, pupilSize);

    // draw nose if true
    if(hasNose){

        fill('#db5461');
        ellipse(x, y + eyeCalc, noseWidth, noseLength);


    }


}
