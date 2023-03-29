const doughnuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
doughnuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
console.log(doughnuts);

/* Quiz */
const donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-2, 0, "chocolate frosted", "glazed");
console.log(donuts);