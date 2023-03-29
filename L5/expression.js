/* Cat Says Example */

const catSays = function(max) {
    let catMessage = "";
    for (let i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };

console.log(catSays(3))