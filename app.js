const url = "http://www.omdbapi.com/?i=tt3896198&apikey=";

const search = "http://www.omdbapi.com/?t=" // replace whitespace with + 

// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=").then((response) => response.json())
// .then((data) => console.log(data));
let key = config.SECRET_API_KEY
const searchButton = document.getElementById("searchButton")
const searchFelid = document.getElementById("searchFelid")

searchButton.onclick = (event) => {
    event.preventDefault()
    const moveName = searchFelid.value

    getData(moveName);
}

function getData(moveName) {
    moveName = moveName.replace(' ', '+');

    fetch("http://www.omdbapi.com/?t=" + moveName + `&apikey=${key}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            display(data)
        });
}
const main = document.getElementById("main");
let cardDiv = document.getElementById("cardDiv");

function display(data) {
 

        let divCol = document.createElement("div");
        divCol.className = "col-sm-3";
        cardDiv.append(divCol);

        let card = document.createElement("div");
        card.className = "card"
        divCol.append(card);

        let imgCard = document.createElement("img");
        imgCard.className = "card-img-top w-100";
        imgCard.style.width = "100px"
        imgCard.src = data.Poster
        card.append(imgCard)

        let cardBody = document.createElement("div");
        cardBody.className = "card-body"
        card.append(cardBody);

        let cardTitle = document.createElement("h5");
        cardTitle.className = "card-title"
        cardTitle.textContent = data.Title
        cardBody.append(cardTitle);

        let cardText = document.createElement("p");
        cardText.className = "card-text"
        cardText.setAttribute('style', 'white-space: pre;');
        cardText.textContent = "- Year: " + data.Year + " \n\r- Rated: " + data.Rated + "\n\r- Runtime: " + data.Runtime + "\n\r- Genre: " + data.Genre
        cardBody.append(cardText);

    }




