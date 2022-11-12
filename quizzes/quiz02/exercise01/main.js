function showFox() {
    // your code here...
    console.log('Change image and paragraph to fox...');
   
    document.querySelector("img").src = "images/fox.jpg"
    document.querySelector('#description').innerHTML = "Beautiful Fox";
    
}

function showLion() {
    // your code here...
    console.log('Change image and paragraph to lion...');

    document.querySelector("img").src = "images/lion.jpg"
    document.querySelector('#description').innerHTML = "Lion!!!";
    
}

function showTiger() {
    // your code here...
    console.log('Change image and paragraph to tiger...');

    document.querySelector("img").src = "images/tiger.png"
    document.querySelector('#description').innerHTML = "Tiger, look at the stripes!";
    
}

function showZebra() {
    // your code here...
    console.log('Change image and paragraph to zebra...');

    document.querySelector("img").src = "images/zebra.jpg"
    document.querySelector('#description').innerHTML = "Zebra!";
    
}

    fox.addEventListener('click', showFox);
    lion.addEventListener('click', showLion);
    tiger.addEventListener('click', showTiger);
    zebra.addEventListener('click', showZebra);
