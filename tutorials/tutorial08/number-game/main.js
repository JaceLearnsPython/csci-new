// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;


function check() {
    // your code here.
    console.log("your code here!");

    let num = document.querySelector("#guess").value;
    let counter = 0;

    counter++;

    if(num < 0){
        alert("The value of your guess is too low. Try again!");
    }
    if(num > 100){
        alert("The value is too high. Try again!")
    }
    if(num == secret){
        alert("Awesome job! You got the right number!" + 
            " It took you " + counter + " tries to get it!")


        document.querySelector('#celebrate').className = "";

    }
    
}