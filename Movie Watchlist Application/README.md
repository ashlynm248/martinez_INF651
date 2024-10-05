1: Function addMovie
The function "addMovie()" allows the user to add a movie to the website. 

The "const movieInput" allows "document.getElementById("moviename")" to select the moviename ID from the HTML file. The "value.trim" allows the extra white space to be removed from the string.

The "if (movieInput !==)" returns one of two things. If the value typed comes back as true (a title was entered), it would push the addMovie() function so that the movie appears. The "renderMovies()" would then update the page to show the movie that was entered. If the value is not type in, it will give a pop-up that there should be a movie entered.




2: Function removeMovie
The function "removeMovie" lets the user remove the movie. 

The (index) allows the removeMovie function to pick a movie to remove from the array. 

The "watch.splice(index, 1)" is used to actually remove the movie from the array.




3: Function renderMovies
The function "renderMovies(movieList=watch)" lets the HTML return the most current updates to the list.

The ".innerHTML ="";" allows the program to get the internal HTML codes.

The "movieList.forEach()" allows each value to be edited seperately.

The "const li" allows the program to create an array.

The "li.innerHTMl" holds the button to remove a movie from the array.

The "movieListElement.appendChild()" allows the program to add a new value to the parent. 