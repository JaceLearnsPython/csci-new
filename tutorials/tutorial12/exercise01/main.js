function makeRed() {
    // your code here...
    console.log('Change the box\'s background color to red');

    document.getElementById("box").style.backgroundColor = 'red';
}

function makeBlue() {
    // your code here...
    console.log('Change the box\'s background color to blue');

    document.getElementById("box").style.backgroundColor = 'blue';
}

function makePink() {
    // your code here...
    console.log('Change the box\'s background color to pink');

    document.getElementById("box").style.backgroundColor = 'pink';
}

function makeOrange() {
    // your code here...
    console.log('Change the box\'s background color to orange');

    document.getElementById("box").style.backgroundColor = 'orange';
}

btn1.addEventListener("click", makeRed);
btn2.addEventListener("click", makeBlue);
btn3.addEventListener("click", makePink);
btn4.addEventListener("click", makeOrange);

