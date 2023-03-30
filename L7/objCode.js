/* typeOf() function examples */

console.log(typeof "hello"); // returns "string"  
console.log(typeof true); // returns "boolean"  
console.log(typeof [1, 2, 3]); // returns "object" (Arrays are a type of object)  
console.log(typeof function hello() { }); // returns "function"  

/* Umbrella Object */
const umbrella = {
    color: "pink",
    isOpen: false,
    open: function() {
      if(umbrella.isOpen === true) {
        return "The umbrella is already opened!";
      } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
      }
    }
  }

  /* Using the Umbrella Object */
console.log(umbrella.isOpen); // returns false
console.log(umbrella.open()); // returns 'Julia opens the umbrella!'
console.log(umbrella.isOpen); // returns true

