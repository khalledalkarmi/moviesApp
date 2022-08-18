# moviesApp
moviesApp is a website to get movie details Using: 
- JavaScript.
- Bootstrap 5
- HTML/CSS
- [API website](http://www.omdbapi.com/)

## Installation 

To run it on your computer FORK the repository and clone it.

Get your API key from [Here](http://www.omdbapi.com/apikey.aspx), after reseving the key in the app.js file replace key with your own key as a STRING, making sure to double-quote "Your Key". 
```javascript
 let key = config.SECRET_API_KEY
```

### The response is json format:
```json
{
  "Title": "The Lord of the Rings: The Fellowship of the Ring",
  "Year": "2001",
  "Rated": "PG-13",
  "Released": "19 Dec 2001",
  "Runtime": "178 min",
  "Genre": "Action, Adventure, Drama",
  "Director": "Peter Jackson",
  "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
  "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
  "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
  "Language": "English, Sindarin",
  "Country": "New Zealand, United States",
  "Awards": "Won 4 Oscars. 121 wins & 126 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.8/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "91%"
    },
    {
      "Source": "Metacritic",
      "Value": "92/100"
    }
  ],
  "Metascore": "92",
  "imdbRating": "8.8",
  "imdbVotes": "1,816,473",
  "imdbID": "tt0120737",
  "Type": "movie",
  "DVD": "06 Aug 2002",
  "BoxOffice": "$316,115,420",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
```


