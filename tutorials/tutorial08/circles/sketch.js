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
    let count2 = 0;
    let count3 = 0;

    let x = 100;
    let y = 100;
    let size = 50;
    let size2 = 50

    while(counter < 450){
    
        noFill()
        circle(x, counter, size);

        counter = counter + size;
    }
    while(count2 < 5){

        circle(300, 150, size)

        count2++;
        size = size + 50;

    }

    let fillColor = 'gray';

    while(count3 < 30){

        if(fillColor == 'gray'){

            fillColor = 'blue'
            fill(fillColor);
        }
        else if(fillColor == 'blue'){
            fillColor = 'hotpink'
            fill(fillColor)
        }
        else{
            fillColor = 'gray'
            fill(fillColor);
        }
        
        // 4th color
        strokeWeight(4);
        stroke('green')

        circle(800, y, size2)

        count3++;

        y = y + 24;
        size2 = size2 + 20;

    }




}


