/* Index in Array Examples */
const donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array
console.log(donuts[3]); // the fourth element in  the `donuts` array does not exist!

/* Changing Array Value */
console.log(donuts[1]); // "powdered"
// change the value of donuts[1]
donuts[1] = "glazed cruller";
console.log(donuts[1]); // "glazed cruller"

/* Quiz 2 */
const doughnuts = ["glazed", "chocolate frosted", "boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];

doughnuts[2] = "cinnamon twist";
doughnuts[4] = "salted caramel";
doughnuts[5] = "shortcake eclair";
console.log(doughnuts);