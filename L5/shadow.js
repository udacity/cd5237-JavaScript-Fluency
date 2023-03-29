/* Shadow Example */

let bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
    bookTitle = 'The Little Prince';
    console.log(bookTitle);
}

displayBookEnglish()
console.log(bookTitle);

/* No Shadowing Example - commented out */

/*
let bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
    let bookTitle = 'The Little Prince';
    console.log(bookTitle);
}

displayBookEnglish()
console.log(bookTitle); 
*/
