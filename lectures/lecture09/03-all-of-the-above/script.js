const changeColor = () => {
    document.querySelector('.panel').style.background = 'hotpink';
};

const changeTitle = () => {
    //what do we want to change?
    document.querySelector('h1').innerText = "NEW TEXT";
    
};

const addImage = () => {
    // adds the following image to each panel:
    // 1. what element do you want to select?
    document.querySelector('#panel1').innerHTML += '<img src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg"/>';    
};

const clearDiv = () => {
    // clears all of the panels of content
    document.querySelector('#panel1').innerHTML = '';
};
