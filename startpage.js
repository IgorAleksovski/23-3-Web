// get reference to HTML Element for the DOM
//DOM => Dokument objekt modell
// DOM => abstraktion of HTML document


const clockElem = document.getElementById("clock");

clockElem.innerText = "Buxtehude";

function updatesClock() {
    const date = new Date();
    clockElem.innerText = date.toLocaleTimeString();
}
//C#  Thread.Sleep(1000)=> 1 Sekunde Delay
setInterval(updatesClock,1000);


// Chuck Norris Joke
const jokeElem = document.getElementById("joke");

 fetch("https://api.chucknorris.io/jokes/random?category=dev").then(response =>{return response.json();}).then(jsonData => {jokeElem.innerText = jsonData.value});

