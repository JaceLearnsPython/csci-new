function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 215, 85, '#FF69B4', '#FFB6C1');
    drawCreature(487, 210, 101, '#FF69B4', '#FFB6C1');
    drawCreature(454, 423, 141, '#FF69B4', '#FFB6C1');
    drawCreature(333, 227, 99, '#FF69B4', '#FFB6C1');
    drawCreature(207, 364, 91, '#FF69B4', '#FFB6C1');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
function drawCreature(centerX, centerY, size, color1, color2){
    
    // Nose
    let nostrilSize = size * 0.13;
    let noseCalc = 0.82 * nostrilSize;
    let nostrilY = centerY + nostrilSize

    // Eyes
    let eyeSize = size / 10;
    let eyeCalc = 1.5 * eyeSize;

    // Ears
    let earSize = size / 2.5
    let earCalc = earSize * 0.89
    
    // Face
    fill(color1)
    circle(centerX, centerY, size);

    // Nose
    fill(color2)
    circle(centerX ,centerY * 1.04, size * 0.4)

    // Nostrils
    fill(color1);
    circle(centerX + noseCalc, nostrilY, nostrilSize);  
    circle(centerX - noseCalc, nostrilY, nostrilSize); 

    // Eyes
    fill(color2)
    circle(centerX + eyeCalc, centerY - eyeCalc, eyeSize); // eye right
    circle(centerX - eyeCalc, centerY - eyeCalc, eyeSize); // eye left

    // Ears
    fill(color1)
    circle(centerX - earCalc, centerY - earCalc, earSize) // left ear
    circle(centerX + earCalc, centerY - earCalc, earSize) // right ear

}
