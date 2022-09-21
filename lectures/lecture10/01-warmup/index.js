const toggleFall = () => {
   
        document.querySelector('body').className = 'fall';
        document.querySelector('h1').innerHTML = "It's fall time!";
}

const toggleWinter = () => {
    /*
        Your task: target the body element and change it's class to "winter"
    */
   document.querySelector('body').className = 'winter';
   document.querySelector('h1').innerHTML = 'Winter Time';

}

const toggleSpring = () => {
    /*
        Your task: target the body element and change it's class to "spring"
    */
        document.querySelector('body').className = 'spring';
        document.querySelector('h1').innerHTML = 'Spring Time';


}