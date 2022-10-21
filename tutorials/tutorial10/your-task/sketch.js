const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

    
// spaceShip
let ship = {
    x: 300,
    y: canvasHeight - 100,
    d: 50
}
let pig = {
    x: 100,
    y: 200,
    speed: 2
}
let ball = {
    x: 100,
    y: 200,
    size: 50,
    speed: 2
}

const missiles = [];


function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
}
function draw(){
    clear()

    drawGrid(canvasWidth, canvasHeight);

    // ship
    drawCreature(ship.x, ship.y, ship.d, 'gray', 'red');

    // pig
    drawPig(pig.x, pig.y, 100, 'red', 'blue')
    circle(ball.x, ball.y, ball.size)

    // move pig
    pig.x += pig.speed;

    // pig bounce back and forth effect
    if(pig.x > 300){
        pig.speed = -2;
    }
    else if(pig.x < 100){
        pig.speed = + 2
    }

    // pig carries the ball if they collide
    if(ball.x == pig.x && ball.y == pig.y){
        
            ball.x += ball.speed;
    }



    for (const missile of missiles) {
        fill('gray')
        rect(missile.x - 35, missile.y, 5, 20);

        rect(missile.x + 30, missile.y, 5, 20);
        missile.y -= missile.speed;
    }

  

}

function drawCreature(x, y, size, primaryColor, secondaryColor){

    // right missile
    fill(primaryColor)
    rect(x + 30, y - 5, 5, 50)   
    
    // left missile
    rect(x - 35, y - 5, 5, 50)


    // make the wings
    fill(secondaryColor)
    triangle(x , y,
             x - 50, y + 45,
             x + 50, y + 45)

    // main body
     fill(primaryColor)
     ellipse(x, y, size * 0.66, size * 1.8)

     // cockpit
     fill('black')
     circle(x, y - 25, size / 3)
   

}

function drawMissile(x, y){
 
    fill('gray')
    rect(x + 30, y - 5, 5, 50) 
}
const moveController = ev => {

    console.log(ev.code);

    if(ev.code === 'ArrowUp'){
        ship.y = ship.y - 20;
    }
    else if(ev.code === 'ArrowDown'){
        ship.y = ship.y + 20
    }
    else if(ev.code === 'ArrowLeft'){
        ship.x = ship.x - 20
    }
    else if(ev.code === 'ArrowRight'){
        ship.x = ship.x + 20
    }
    else if(ev.code === 'Space'){
        shoot();
    }
}
function shoot(){

    const missile = {
        x: ship.x,
        y: ship.y,
        d: 10,
        speed: 10
    }
    missiles.push(missile);
}
function drawPig(centerX, centerY, size, color1, color2){
    
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

    // Eyes
    fill(color2)
    circle(centerX + eyeCalc, centerY - eyeCalc, eyeSize); // eye right
    circle(centerX - eyeCalc, centerY - eyeCalc, eyeSize); // eye left

    // Ears
    fill(color1)
    circle(centerX - earCalc, centerY - earCalc, earSize) // left ear
    circle(centerX + earCalc, centerY - earCalc, earSize) // right ear

}
document.addEventListener('keyup', moveController);

