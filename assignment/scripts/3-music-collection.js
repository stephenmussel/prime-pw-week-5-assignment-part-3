console.log('***** Music Collection *****')

let collection = []; // starts as empty array

/*  FUNCTION: addToCollection()
  * INPUT: object {string, string, number}
  * OUTPUT: object {string, string, number} from array
*/

function addToCollection(title, artist, yearPublished, track) {
    // let album = {title, artist, yearPublished}; // another method to create new object
    let album = {
      title: title,
      artist: artist,
      yearPublished: yearPublished,
      track: []
    };
    album.track.push(track);
    collection.push(album); // pushes album to collection
      return(album);
} // end addToCollection

// how is this different than the code block above?
// function addToCollection(title, artist, yearPublished) {
//     collection.push({title, artist, yearPublished}); // adds album to end of collection
//     return{title, artist, yearPublished}; // returns album properties
// } // end addToCollection

console.log(addToCollection('a radical recital', 'rasputina', 2005, [{name: 'saline the salt lake queen', duration: '4:44'}, {name: 'rats', duration: '3:22'}, {name: 'howard hughes', duration: '4:32'}])); // logs 1st album added to collection
console.log(addToCollection('the lost & found 2nd edition', 'rasputina', 2007, [{name: 'bad moon rising', duration: '3:29'}, {name: 'wish you were here', durtion: '4:23'}, {name: 'tourniquet', duration: '3:25'}])); // logs 2nd album added to collection
console.log(addToCollection('comment te dire adieu', 'francoise hardy', 1968)); // logs 3rd album added to collection
console.log(addToCollection('juno soundtrack', 'barry louis polisar', 2007)); // logs 4th album added to collection
console.log(addToCollection('garden party', 'ricky nelson', 1972, [{name: 'let it bring you along', duration: '4:20'}, {name: 'garden party', duration: '3:49'}, {name: 'so long mama', duration: '3:28'}])); // logs 5th album added to collection
console.log(addToCollection('tous les garcon et les filles', 'francoise hardy', 1962)); // logs 6th album added to collection
console.log(collection); // logs collection of albums

/*  FUNCTION: showCollection()
  * INPUT: array []
  * OUTPUT: number
  * OUTPUT: object {string, string, number}
*/

function showCollection(arrParameter) { // take in an array parameter
  console.log(`the number of albums in the collection is: ${collection.length}`); //logs number of items in array
  for (let i=0; i<collection.length; i++) {
    if (arrParameter === collection[i].title || arrParameter === collection[i].artist || arrParameter === collection[i].yearPublished) {
      console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}`);
      // console.log(`${collection[i]['title']} by ${collection[i]['artist']} published in ${collection[i]['yearPublished']}`); // alternative syntax
    }
  }
} // end showCollection

// console.log(showCollection()); // test with no parameters. outputs nothing
// console.log(showCollection(2005)); // test with 1 number parameter that's ===. outputs 1 album: TITLE by ARTIST published in YEAR
// console.log(showCollection('garden party')); // test with 1 string parameter that's ===. outputs 1 album: TITLE by ARTIST published in YEAR
// console.log(showCollection('rasputina')); // test with 1 string parameter that's ===. outputs 2 albums: TITLE by ARTIST published in YEAR
// console.log(showCollection('radical')); // test with 1 string parameter that's ==. outputs nothing
console.log(showCollection(1968, 'rasputina')); // test with 1 number and 1 string parameter that are both ===. outputs outputs 1 album: TITLE by ARTIST published in YEAR that === only first parameter because that's the only argument passed
// console.log(showCollection('abracadabra')); // test with 1 string parameter that's ==. outputs nothing
// used this to test formatting: console.log(`${collection[0].title} by ${collection[0].artist} published in ${collection[0].yearPublished}`);

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

function search(artist, year, trackName) {
  let searchArr = [];
  for (let i=0; i<collection.length; i++) {
    if (artist === collection[i].artist && year === collection[i].yearPublished && trackName === collection[i].track.name) {
      // searchArr.push(artist, year); // output is 0: rasputina, 1: 2005. arguments are pushed into searchArr vs object properties from collection array are pushed into searchArr like line 82.
      searchArr.push({artist, year}); // output is 0: artist: rasputina, year: 2005. this means the object with these properties are in the 0 index of searchArr
    } else if (artist == null && year == null && trackName == null) {
      return collection;
    } return searchArr;
  }
}

console.log(search('rasputina', 2005, 'rats')); // tests for both object properties found in collection. outputs array of all items in collection matching all search criteria. // !WORK
console.log(search('rasputina', 2006, 'rats')); // tests for one object properties found in collection. only one search criteria matched. outputs empty array. // tests for 1 mismatch. output is empty array
console.log(search()); // tests for no object properties found in collection and/or no one search criteria entered. outputs entire collection. // tests for no search criteria. outputs entire collection
