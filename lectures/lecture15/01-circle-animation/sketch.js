// const circleData = [
//     {x: 500, y: 50, d: 100, speedX: 3, speedY: 3},
//     {x: 300, y: 150, d: 50, speedX: 2, speedY: 0},
//     {x: 400, y: 400, d: 25, speedX: 0, speedY: 1},
//     {x: 40, y: 520, d: 80, speedX: 2, speedY: 0},
//     {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5},
//     {x: 350, y: 350, d: 70, speedX: 1, speedY: 1}
// ];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


const coolers = ['blue', 'red', 'green'] 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    
}



const ball1 = {
    x: randomIntFromInterval(300, 500),
    y: 0,
    d: Math.random() * 100 + 100,
    speedX: 3,
    speedY: 2
}

function randomIntFromInterval(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function draw(){
    clear();
    frameRate(10);

    for(let i = 0; i < 1000; i++){
       
        const ball = {
            x: randomIntFromInterval(600, 900),
            y: randomIntFromInterval(0, canvasHeight),
            d: Math.random() * 10 + 50,
            speedX: 3,
            speedY: 2
        }
        
        let num = randomIntFromInterval(0, 2)


        strokeWeight(0.1)
        fill(coolers[num])
        circle(ball.x, ball.y, ball.d)
    }

}