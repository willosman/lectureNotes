const baseURL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

let trumpButton = document.getElementById('grabEm');

trumpButton.addEventListener("click", magaHat);

function magaHat(){
    fetch(baseURL)
    .then((res) => res.json())
    .then((json) => displayQuote(json.message));
}

function displayQuote(quote){
    let trumpText = document.getElementById("orangeFacedTreasonWeasel");
    trumpText.innerHTML = quote;
}