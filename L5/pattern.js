/* Cat Function Expression Example */

// function expression catSays
const catSays = function(max) {
    let catMessage = "";
    for (let i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  
  // function declaration helloCat accepting a callback
  function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
  }
  
  // pass in catSays as a callback function
  helloCat(catSays);

  /* Movie Example */
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

movies(function (movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");