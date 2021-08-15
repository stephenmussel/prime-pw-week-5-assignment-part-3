console.log('***** Music Collection *****')

let collection = []; // starts as empty array

/*  FUNCTION: addToCollection()
  * INPUT: object {string, string, number}
  * OUTPUT: object {string, string, number} from array
*/

function addToCollection(title, artist, yearPublished) {
    // let album = {title, artist, yearPublished}; // another method to create new object
    let album = {
      title: title,
      artist: artist,
      yearPublished: yearPublished
    }
    collection.push(album); // pushes album to collection
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

/*  FUNCTION: showCollection()
  * INPUT: array []
  * OUTPUT: number
  * OUTPUT: object {string, string, number}
*/

function showCollection(arrParameter) { // takes in array parameters
  console.log(`the number of albums in the collection is: ${collection.length}`); //logs number of items in array
  for (let i=0; i<collection.length; i++) {
      console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}`);
      // console.log(`${collection[i]['title']} by ${collection[i]['artist']} published in ${collection[i]['yearPublished']}`); // alternative syntax
    }
} // end showCollection

console.log(showCollection()); // test to log each album: TITLE by ARTIST published in YEAR

// used this to test formatting: console.log(`${collection[0].title} by ${collection[0].artist} published in ${collection[0].yearPublished}`);
// console.log(showCollection()); // outputs: a radical recital by rasputina published in 2005

/*  FUNCTION: findByArtist()
  * INPUT: string
  * OUTPUT: string or empty array
*/

function findByArtist(artist) {
  let artistArr = [];
  for (let i =0; i<collection.length; i++) {
    if (artist === collection[i].artist) { // if a string === collection[i].artist
      artistArr.push({artist}); // pushes passed argument to artistArr. does it matter if it's artistArr.push(collection[i].artist)?
    }
  } return artistArr;
} // end findByArtist

console.log(findByArtist('test')); // outputs empty array
console.log(findByArtist('rasputina')); // outputs 2 object properties into array
console.log(findByArtist('ricky nelson')); // outputs 1 object property into array

/*  FUNCTION: search()
  * INPUT: object {string, number}
  * OUTPUT:
*/

function search(artist, year) {
  let searchArr = [];
  for (let i=0; i<collection.length; i++) {
    if (artist === collection[i].artist && year === collection[i].yearPublished) {
      // searchArr.push(artist, year); // output is 0: rasputina, 1: 2005. arguments are pushed into searchArr vs object properties from collection array are pushed into searchArr like line 82.
      searchArr.push({artist, year}); // output is 0: artist: rasputina, year: 2005. this means the object with these properties are in the 0 index of searchArr
    } else if (artist == null && year == null) {
      return collection;
    } return searchArr;
  }
}

console.log(search('rasputina', 2005)); // tests for both object properties found in collection. outputs array of all items in collection matching all search criteria.
console.log(search('rasputina', 2006)); // tests for one object properties found in collection. only one search criteria matched. utputs empty array.
console.log(search()); // tests for no object properties found in collection and/or no one search criteria entered. outputs entire collection. !WORK
