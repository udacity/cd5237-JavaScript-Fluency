const donuts = ["jelly donut", "chocolate donut", "glazed donut"];

/*
//For Loop Example - commented out
for (let i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts);
*/

//forEach Loop Example
donuts.forEach(function(donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    console.log(donut);
  });

  console.log(donuts);

//forEach Syntax function
const myArray = ["A", "B", "C", "D"];

function myAwesomeFunction(element, index, array) {
  console.log("Element: ", element);
  console.log("Index: ", index);
  console.log("Array: ", array);
}

myArray.forEach(myAwesomeFunction);

//forEach Cat in the Hat Example
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

//map loops example
const newArray = myArray.map(function (elem) {
    elem = elem + 100;
    return elem;
  });
  
  console.log(newArray); //[101, 102, 103, 104, 105]

//map donut example
const improvedDonuts = donuts.map(function(donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    return donut;
  });

console.log(improvedDonuts);