function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    // noFill();
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);

    let counter = 200;
    let i = 0;
    let count3 = 0;

    let x = 100;
    let y = 100;
    let size = 50;
    let size2 = 50

    while(counter < 450){
    
        noFill()
        circle(x, counter, 50);

        counter = counter + 50;
    }
    while(i < 4){

        circle(300, 150, size)

        i++;
        size = size + 50;

    }
    while(count3 < 5){

        circle(600, y, size2)

        count3++;

        y = y + 24;
        size2 = size2 + 50;

    }


}


