//creates an empty array
let watch = [];



//allows the user to add a new movie to the array
function addMovie(){
const movieInput = document.getElementById("moviename").value.trim();

if (movieInput !== ""){
   watch.push({moviename: movieInput});
   document.getElementById("moviename").value ="";
   renderMovies();
} else{
   alert("Please enter a movie title")
 }
}



//allows the user to remove a movie from the array
function removeMovie (index) {
   watch.splice(index, 1);
   renderMovies();
}



//allows the array to update (add/delete movies)
function renderMovies(movieList = watch){
   const movieListElement = document.getElementById("movielist");
   movieListElement.innerHTML ="";
   movieList.forEach((watchh, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${watchh.moviename}<button onclick=removeMovie()>Remove</button>`;
      movieListElement.appendChild(li);
   });
}
