const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    // draws 4 stars: 
    strokeWeight(0);
    fill('white');
    circle(50, 80, 2.5);
    circle(50, 400, 1.5);
    circle(600, 287, 3);
    circle(400, 143, 1.5);
    
    // Counter 
    let i = 0;

    // do - while loop to make stars
    do{
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;

        circle(x, y, width)

         i++;

    }
    while(i < 1000)

   // constenllation  Big Dipper

    fill('red')
    circle(55, 310, 3.5)
    circle(100, 340, 3.5)
    circle(120, 380, 3.5)
    circle(140, 430, 3.5)
    circle(200, 500, 3.5)
    circle(125, 480, 3.5)
    circle(160, 520, 3.5)





}

// examples?
function drawStars() {
    strokeWeight(0);
    fill('white');
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
    }
}

function drawBubbles() {
    strokeWeight(1);
    stroke('white');
    noFill()
    for (let i = 0; i < 500; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 40 + 5;
        circle(x, y, width);
    }
}
