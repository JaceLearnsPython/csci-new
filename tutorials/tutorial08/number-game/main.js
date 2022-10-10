// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let counter = 0;


function check() {
    // your code here.
    console.log("your code here!");

    let num = document.querySelector("#guess").value;
    num = Number(num);

    counter++;
    document.querySelector('#num-guesses').innerHTML =
     'You have guessed: ' + counter + ' time(s).'

    if(num < secret){
        // alert("The value of your guess is too low. Try again!");

        document.querySelector('#message').innerHTML = 'Your guess was too low!'
    }
    else if(num > secret){
        // alert("The value is too high. Try again!")
        document.querySelector('#message').innerHTML = 'Your guess was too High!'

    }
    else{
        // alert("Awesome job! You got the right number!" + 
            // " It took you " + counter + " tries to get it!")

        document.querySelector('#message').innerHTML = 'You got it!'
        document.querySelector('#celebrate').className = "";
    }

    if(counter == 6){
        alert(
            "You have used all your attempts. The page will reload and choose a different Number. Good luck!"
        )

		window.location.reload();
    }
    
}