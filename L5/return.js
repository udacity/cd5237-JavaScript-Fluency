
/* Integer Example */
function isPrime(integer) {
    for (let x = 2; x < integer; x++ ) {
        if(integer % x === 0) {
            console.log(integer + " is divisible by " + x);
            return false
        }
    }

    return true
}

console.log("The returned value when given 9: "+isPrime(9));
console.log("The returned value when given 7: "+isPrime(7));

/* Return Example */
function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
  }
  
  console.log(isThisWorking(3));

  /* Undefined Example */
function isThisWorking2(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  }
  
  console.log(isThisWorking2(3));

  /* Quiz 1 */
  function sleep() {
    console.log("I'm sleepy!");
    return "zzz";
    return "snore";
  }
  
  console.log(sleep());

  /* Quiz 2 */
  function test() {
    return 1;
    return 2;
  }
  
  console.log(test());
