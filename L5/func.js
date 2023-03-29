/* reverseString Example */

// Set one parameter to hold the value of the input string
function reverseString(reverseMe) {
    // Declare a variable with an empty string to store the reversed string
    let reversed = "";
    // Loop through the `reverseMe` string from back to front
    for (let i = reverseMe.length - 1; i >= 0; i--) {
        // Add each character to the end of `reversed`
        reversed += reverseMe[i];
    }
    // Return the completed string when the loop is complete
    return reversed;
}

console.log(reverseString("Julia"));

/* Declaration and Return Example */

// declares the sayHello function
function sayHello() {
    const message = "Hello!"
    return message; // returns value instead of printing it
  }
  
  // function returns "Hello!" and console.log prints the return value
  console.log(sayHello());

  /* Quiz Example */
  function findAverage(x, y) {
    const answer = (x + y) / 2;
    return answer;
  }
  
  const avg = findAverage(5, 9);
  console.log(avg);

  /* Add Example */

  // x and y are parameters in this function declaration
function add(x, y) {
    // function body
    // Here, `sum` variable has a scope within the function. 
    // Such variables defined within a function are called Local variables
    // You can try giving it another name
    const sum = x + y;
    return sum; // return statement
  }
  
  // 1 and 2 are passed into the function as arguments, 
  // and the result returned by the function is stored in a new variable `sum`
  // Here, `sum` is another variable, different from the one used inside the function
  const sum = add(1, 2);
  console.log(sum);