import { OmdbResponse } from "./models/OmdbResponse";

const startText = document.createElement("p");
const searchContainer = document.createElement("div");
const searchInput = document.createElement("input")
const searchBtn = document.createElement("button");
const searchResult = document.createElement("p");
let movieSearch = [];

searchInput.type = "text";
searchBtn.type = "submit";

startText.classList.add("start_text")
searchContainer.classList.add("search");
searchInput.classList.add("search__input");
searchBtn.classList.add("search__btn");
searchResult.classList.add("search__result");

startText.innerHTML = `Welcome to this database of movies, that we encountered on our mission to Earth 6782. 
On our journey through the multiverse we found a version of earth where they no longer watch movies on VHS, but use something called "streaming". 
We managed to get access to all the different movies they've produced on this earth and turned them into VHS's for you to buy or rent. 
We ship to every planet and version of earth in all explored universes.`
searchBtn.innerHTML = "Search";

window.addEventListener("load", () => {
    // movieSearch = JSON.parse(localStorage.getItem("movieSearch"));
    
    document.body.appendChild(startText);
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchBtn);
    searchContainer.appendChild(searchResult);

    document.body.appendChild(searchContainer);
    
    
    
});

searchBtn.addEventListener("click", () => {
    fetch("http://www.omdbapi.com/?apikey=62a4b431&s=" + searchInput.value.split(" ").join("%20") + "").then((response) => response.json()).then((data) => {
    
        let result = new OmdbResponse(data.totalResults, data.Search);
        
        movieSearch.push(result.movies);
        
        // localStorage.setItem("movieSearch", JSON.stringify(result.movies));
        
        searchInput.value = "";

        console.log(result.amount); 

        handleData(result.movies, result.amount);
    });

    
    
    
    console.log("http://www.omdbapi.com/?apikey=62a4b431&s=" + searchInput.value.split(" ").join("%20") + ""); 
});



function handleData(movies, amount) {

    for (let i = 0; i < movies.length; i++) {

        const movieContainer = document.createElement("section");
        const img = document.createElement("img");
        const title = document.createElement("h3");
        const year = document.createElement("p");
        const type = document.createElement("p");

        movieContainer.classList.add("movie");
        title.classList.add("movie__title");
        year.classList.add("movie__year");
        img.classList.add(("movie__img"));
        type.classList.add("movie__type");
        startText.classList.remove("start_text");

        title.innerHTML = movies[i].title;
        year.innerHTML = movies[i].year;
        type.innerHTML = movies[i].type;
        img.src = movies[i].imageUrl;
        img.alt = movies[i].title;
        searchResult.innerHTML = "Your search returned " + amount + " results";
        startText.innerHTML = ""

        movieContainer.appendChild(img);
        movieContainer.appendChild(title);
        movieContainer.appendChild(year);
        movieContainer.appendChild(type);
        
        document.body.appendChild(movieContainer); 
    }
}
console.log(movieSearch);