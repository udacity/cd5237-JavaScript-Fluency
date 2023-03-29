/* Library Example */

const bookSeeker = "James";
const book = "Great Expectations";
function library() {
  const librarian = "Julia"; 
    console.log(bookSeeker + " asked " + librarian + " for " + book);
    function classicLiterature() {
        const shelf = "Dickens"; 
        console.log( bookSeeker + " found " + book + " on the " + shelf + " shelf!");
    }
    classicLiterature();
}

console.log(bookSeeker + " is looking for " + book);
library();
//console.log(librarian);
//console.log(shelf);

/* Quiz 1 - 2 */
const a = 1;
function x() {
 const b = 2;
  function y() {
   const c = 3;
    function z() {
      const d = 4;
    }
    z();
  }
  y();
}

x();