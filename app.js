const url = "http://www.omdbapi.com/?i=tt3896198&apikey=";

const search = "http://www.omdbapi.com/?t=" // replace whitespace with + 


// Secret key Every api server has a way to authenticate the request by passing a secret key. Put your secret key down here
// replace your secret key with config.SECRET_API_KEY.
let key = config.SECRET_API_KEY

// get search button from DOM 
const searchButton = document.getElementById("searchButton")
// get search input from DOM 
const searchFelid = document.getElementById("searchFelid")


// fire event on click 
searchButton.onclick = (event) => {
    // cancel default behavior (refresh page)
    event.preventDefault()

    // get search value 
    const moveName = searchFelid.value

    // call getData function and pass move name as parameter 
    getData(moveName);
}

// function to handle get data from server 
function getData(moveName) {
    // one of stander URL role is the url doesn't accept whitespace here we are replace whitespace whit '+' (this info from api documentation)
    // handle whitespace 
    moveName = moveName.replace(' ', '+');

    // fetch function take api URL as as parameter 
    // the url must have api key and move name   
    fetch("http://www.omdbapi.com/?t=" + moveName + `&apikey=${key}`)
        // convert response to object by json() method  
        .then((response) => response.json())
        // after we handle the response 
        .then((data) => {
            if (data.Response == 'False') {
                alert(`${moveName} is not found`)
            } else {
                // log the response as object
                console.log(data)

                // call function display and take data as parameter to represent the data by DOM Manipulation
                display(data)
            }
        });
}

// get div container to append child to it 
let cardDiv = document.getElementById("cardDiv");

function display(data) {

    // create div container and set class name 
    let divCol = document.createElement("div");
    divCol.className = "col-sm-3";
    cardDiv.append(divCol);

    // create div container to carry card-title, card-image, card-body, and card-text 
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






