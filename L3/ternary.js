/* If Statement Example*/
const isGoing1 = true;
let color1;

if (isGoing1) {
  color1 = "green";
} else {
  color1 = "red";
}

console.log(color1);

/* Ternary Example*/
const isGoing = true;
let color = isGoing ? "green" : "red";
console.log(color);

/* Quiz 1 */
const x = 4;
const y = 3;
console.log((x + y) > 6 ?  2 * x : 2 * y );

/* Quiz 2 */
const adult = true;
const preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

/*Quiz 3 */
console.log("false" ? true : false)
console.log(false ? "false" : "true")
console.log("true" ? "false" : true)
console.log(false ? false : true)
console.log(false ? true : false)
console.log("false" ? false : true)