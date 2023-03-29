const option = 3;

/* else if example */

if (option === 1) {
    console.log("You selected option 1.");
  } else if (option === 2) {
    console.log("You selected option 2.");
  } else if (option === 3) {
    console.log("You selected option 3.");
  } else if (option === 4) {
    console.log("You selected option 4.");
  } else if (option === 5) {
    console.log("You selected option 5.");
  } else if (option === 6) {
    console.log("You selected option 6.");
  }

  /* switch case example */

  switch (option) {
    case 1:
      console.log("You selected option 1.");
    case 2:
      console.log("You selected option 2.");
    case 3:
      console.log("You selected option 3.");
    case 4:
      console.log("You selected option 4.");
    case 5:
      console.log("You selected option 5.");
    case 6:
      console.log("You selected option 6.");
  }

  /* switch with break example */


switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}

/* Quiz 1 */
const favoriteFood = "soup";
let restaurant = undefined;

switch(favoriteFood) {
  case "pizza":
    restaurant ="pizzeria";
    break;
  default:
     restaurant ="diner";
    break;   
  case "tacos":
    restaurant ="taqueria";
    break;
  case "sushi": 
    restaurant ="sushi bar";
    break;
  case "pancakes": 
    restaurant ="pancake house";
    break;
}

console.log("Go to the " + restaurant);

/* Quiz 2 */
let month = 7;
let days;

switch(month) {
  case 1:
  case 2:
    days = 28;
    break;
  case 3:
  case 4:
    days = 30;
    break;
  case 5:
  case 6:
    days = 30;
    break;
  case 7:
  case 8:
  case 9:
    days = 30;
    break;
  case 10:
  case 11:
    days = 30;
    break;
  case 12:
  default:
    days = 31;
}

console.log("There are " + days + " days in this month.");

/* Quiz 3 */
month = 5;
days;

switch (month) {
  case 1:
    days = 31;
    break;
  case 2:
    days = 28;
    break;
  case 3:
    days = 31;
    break;
  case 4:
    days = 30;
    break;
  case 5:
    days = 31;
    break;
  case 6:
    days = 30;
    break;
  case 7:
    days = 31;
    break;
  case 8:
    days = 31;
    break;
  case 9:
    days = 30;
    break;
  case 10:
    days = 31;
    break;
  case 11:
    days = 30;
    break;
  case 12:
    days = 31;
}

console.log('There are ' + days + ' days in this month.');

/* Quiz 4 */
month = 2;

switch(month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}

console.log("There are " + days + " days in this month.");