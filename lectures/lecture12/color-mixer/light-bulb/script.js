const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";

const elem = document.querySelector("#my_image");

const turnOn = (ev) => {

    if(elem.src === imgOff){
        elem.src = imgOn;
    }
    else{
        elem.src = imgOff;
    }
};


// attach function to image's click event:
document.querySelector("#my_image").onclick = turnOn;

// Greeting Function

function greet(name, time){

    console.log('Hi, ' + name + '.')

    if(time >= 3 && time <= 11){
        console.log(
            "Goodmorning " + name + "!"
        )
    }
    else if(time >= 12 && time <= 19){
        console.log(
            "Good Evening " + name 
        )
    }
    else(time >= 20 && time < 3)
        console.log(
            "Goodnight " + name
        )
    

}

greet('Joel', 9)
greet('Bill', 3)
greet('James', 20)
greet('Brenda', 11)