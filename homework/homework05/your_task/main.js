const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }


}

async function getTracks (term) {

    document.querySelector('#tracks').innerHTML = `<section id="tracks">`;

        let trackURL = baseURL + "?q=" + term + "&type=track";

        const artistData = await fetch(trackURL).then(response => response.json());
    
        if(artistData.length == 0){
            document.querySelector('#track-section').innerHTML += "Sorry, there were no results for your search"
        }

        for(let i = 0; i < 5; i++){
    
        let trackTemplate = `<section class="track-item preview" onclick="playTrack('${artistData[i].id}')">
        <img src="${artistData[i].album.image_url}" alt="song cover image of ${artistData[i].name}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h2>${artistData[i].name}</h2>
            <p>
                ${artistData[i].artist.name}
            </p>
        </div>
    </section>`

    document.querySelector('#tracks').innerHTML += trackTemplate;
        }
        console.log(artistData);
}

async function getAlbums (term) {
   
    document.querySelector('#albums').innerHTML = ` <section id="albums"></section>`;


        let albumURL = baseURL + "?q=" + term + "&type=album";

        const artistData = await fetch(albumURL).then(response => response.json());

        if(artistData.length == 0){
            document.querySelector('#albums').innerHTML += "Sorry, there were no results for your search"
        }


        for(let i = 0; i < 5; i++){

        let albumTemplate =  `<section class="album-card" id="${artistData[i].id}">
        <div>
            <img src="${artistData[i].image_url}" alt="album cover image of ${artistData[i].name}">
            <h2>${artistData[i].name}</h2>
            <div class="footer">
                <a href="${artistData[i].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`

    document.querySelector('#albums').innerHTML += albumTemplate;

        }
}

async function getArtist (term) {

    let artistURL = baseURL + "?q=" + term + "&type=artist";

    const artistData = await fetch(artistURL).then(response => response.json());

    if(artistData.length == 0){
        document.querySelector('#artist').innerHTML += "Sorry, there were no results for your search"
    }
       

        artistCard = `<section class="artist-card" id="${artistData[0].id}">
        <div>
            <img src="${artistData[0].image_url}" alt="image of ${artistData[0].name}">
            <h2>${artistData[0].name}</h2>
            <div class="footer">
                <a href="${artistData[0].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>
    `
    document.querySelector('#name').innerHTML = artistData[0].name;
    document.querySelector("#artist").innerHTML = artistCard;

    
    };


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}
async function playTrack(id){
   
    const term = document.querySelector('#search').value;
    let trackURL = baseURL + "?q=" + term + "&type=track";
    const artistData = await fetch(trackURL).then(response => response.json());

    console.log(artistData);

    let template = ` <iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
    width="100%" 
    height="152" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"></iframe>`


        document.querySelector('#artist-section h1').innerHTML = "Now Playing";

        document.querySelector('#artist').innerHTML = template;


}



