/* Cat Hoist Example */
function cat() {
    console.log(purr());
    const meow = function (max) {
        let catMessage = '';
        for (let i = 0; i < max; i++) {
            catMessage = 'meow ';
        }
        return catMessage;
    };
    function purr() {
        return 'purrrr!';
    }
}

cat();

/* Quiz */
function getClothing(isCold) {
    if (isCold) {
      var freezing = 'Grab a jacket!';
    } else {
      var hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }
  
  getClothing(false)
