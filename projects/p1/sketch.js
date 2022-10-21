const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 



// Asteriods
let ball1 = {
    x: 200,
    y: 200,
    size: 70,
    speed: 1.5
};
let ball2 = {
    x: 140,
    y: 600,
    size: 50,
    speed: 2
}
let ball3 = {
    x: 400,
    y: 500,
    size: 40,
    speed: 3
};
let ball4 = {
    x: 600,
    y: 300,
    size: 60,
    speed: 4
}


// spaceShip
let ship = {
    x: 300,
    y: canvasHeight - 100,
    size: 50
}
let pig = {
    x: 500,
    y: 300,
    size: 70,
    speed: 3
}
// pigs
let pig1 = {
    x: 500,
    y: 300,
    size: 50,
    speed: 3
}
let pig2 = {
    x: 500,
    y: 300,
    size: 40,
    speed: 1.5
}

// array for the missiles
const missiles = [];


async function setup() {

    createCanvas(canvasWidth, canvasHeight);


}
// for math sin
let counter = 0;

function draw(){
    clear()
    document.body.style.backgroundImage = "url('10791349.jpg')";

    
    drawSun(90, 80, 80)

    drawPlanet(500, 150, 60, 'blue')
    drawPlanet(300, 100, 50, 'red')

    // Asteriods
    drawLandscapeObject(ball1.x, ball1.y, ball1.size)
    drawLandscapeObject(ball2.x, ball2.y, ball2.size)
    drawLandscapeObject(ball3.x, ball3.y, ball3.size)
    drawLandscapeObject(ball4.x, ball4.y, ball4.size)

    ball1.y += 5 * Math.sin(counter / 50)
    
    // draw the pig army!
    drawPig(pig.x, pig.y ,pig.size, 'red', 'pink')
    drawPig(pig1.x - 100, pig1.y - 100, pig1.size, 'blue', 'green')
    drawPig(pig2.x - 100, pig2.y - 50, pig2.size, 'yellow', 'gray')

    
    // space ship!
    drawCreature(ship.x, ship.y, ship.size, 'gray', 'red')

 
    pig.x += pig.speed;
    pig1.x -= pig1.speed
    pig2.x += pig2.speed


    if(pig.x > canvasWidth + 100){
        pig.x = - 100;
    }
    if(pig1.x < - 100){
        pig1.x = canvasWidth + 100;
    }
    if(pig2.x > canvasWidth + 50){
        pig2.x = - 100;
    }

    ball1.x += ball1.speed
    ball2.x += ball2.speed
    ball3.x -= ball3.speed
    ball4.x -= ball4.speed
    ball4.y -= ball4.speed

    if(ball1.x > canvasWidth + 100){
        ball1.x = - 100;
    }
    if(ball2.x > canvasWidth + 100){
        ball2.x = - 100;
    }
    if(ball3.x < - 100){
        ball3.x = canvasWidth + 100;
    }
    if(ball4.x < - 100){
        ball4.x = canvasWidth + 100;
    }
    else if(ball4.y < - canvasHeight){
        ball4.y = canvasHeight;
    }

    for (const missile of missiles) {
        fill('gray')
        rect(missile.x - 35, missile.y, 5, 20);

        rect(missile.x + 30, missile.y, 5, 20);
        missile.y -= missile.speed;
    }

    counter++;
  
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
function drawLandscapeObject(x, y, size){
    
    fill('#495057')
    circle(x, y, size)

    fill('#343A40')
    circle(x + 10, y, size / 4)

    circle(x - 10, y - 5, size / 5)

    circle(x, y + 10, size / 6)
}

function drawSun(x, y, size){

    strokeWeight(0)
    fill('orange')
    circle(x, y, size)
}
function drawPlanet(x, y, size, primaryColor){

    strokeWeight(0)
    fill(primaryColor)
    circle(x, y, size)
   
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
function drawMissile(x, y){
 
    fill('gray')
    rect(x + 30, y - 5, 5, 50) 
}
// space ship movement and controlls
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
// referred to Tutorial 10 ideas and inspected code
function shoot(){

    const missile = {
        x: ship.x,
        y: ship.y,
        size: 10,
        speed: 10
    }
    missiles.push(missile);
}


// listener
document.addEventListener('keyup', moveController);

