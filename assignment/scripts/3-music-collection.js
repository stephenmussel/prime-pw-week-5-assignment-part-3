console.log('***** Music Collection *****')

let collection = []; // starts as empty array

function addToCollection(title, artist, yearPublished) {
    let album = {title, artist, yearPublished};
    collection.push(album);
      return(album);
} // end addToCollection

// how is this different than the code block above?
// function addToCollection(title, artist, yearPublished) {
//     collection.push({title, artist, yearPublished}); // adds album to end of collection
//     return{title, artist, yearPublished}; // returns album properties
// } // end addToCollection

console.log(addToCollection('a radical recital', 'rasputina', 2005)); // logs 1st album added to collection
console.log(addToCollection('the lost & found 2nd edition', 'rasputina', 2007)); // logs 2nd album added to collection
console.log(addToCollection('comment te dire adieu', 'francoise hardy', 1968)); // logs 3rd album added to collection
console.log(addToCollection('juno soundtrack', 'barry louis polisar', 2007)); // logs 4th album added to collection
console.log(addToCollection('garden party', 'ricky nelson', 1972)); // logs 5th album added to collection
console.log(addToCollection('tous les garcon et les filles', 'francoise hardy', 1962)); // logs 6th album added to collection
console.log(collection); // logs collection of albums

// function showCollection() { // takes in any parameters
//   console.log(`the number of albums in this collection is: ${collection.length}`); //logs number of items in array
//   for (let i=0; i<collection.length; i++) {
//     console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}`);
//   }
// } // end showCollection

// used this to test formatting: console.log(`${collection[0].title} by ${collection[0].artist} published in ${collection[0].yearPublished}`);
// console.log(showCollection());
//
// function findByArtist(a string) {
//   let artistArr = [];
//   for (let i =0; i<collection.length; i++) {
//     if () { // if a string === collection[i].artist
//       // push a string to artistArr
//       // return artistArr
//     }
//     else {
//       // empty artistArr
//     }
//   }
// } // end findByArtist
