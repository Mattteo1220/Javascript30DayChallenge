const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];
const suggestions = document.querySelector("#suggestions");

function fetchData(){
    fetch(endpoint).then(blob => blob.json()).then(data => {cities.push(...data)});
    return cities;
}

function getPlaces(wordToMatch){
    let places = fetchData();
    return places.filter(place => {
        const pattern = new RegExp(wordToMatch, "gi");
        return place.city.match(pattern) || place.state.match(pattern);
    });
}

function formatHtml(){
    let places = getPlaces(this.value);
    console.table(places);
    if(places.length == 0){
        return suggestions.innerHTML;
    }
    let html = places.map(place => {
        return`
        <li>
            <span class="name">${place.city}, ${place.state}</span>
            <span class="name">${place.population}</span>
        </li>`;
    }).join('');
    suggestions.innerHTML = html;
}


let searchInput = document.querySelector("#search-input");
console.log(searchInput);
searchInput.addEventListener("change", formatHtml); 
searchInput.addEventListener("keyup", formatHtml);