console.log('***** Music Collection *****')

let collection = [];

let album = {
  title: 'a radical recital',
  artist: 'rasputina',
  yearPublished: 2005
}

function addToCollection(title, artist, yearPublished) {
  collection.push({title, artist, yearPublished}); // add album to end of collection array
  return {title, artist, yearPublished}; // returns values of album object
} // end addToCollection

console.log(addToCollection('radical recital', 'rasputina', 2005)); // logs one album
console.log(addToCollection('the lost & found 2nd edition', 'rasputina', 2007)); // logs two album
console.log(addToCollection('comment te dire adieu', 'francoise hardy', 1968)); // logs three album
console.log(addToCollection('juno soundtrack', 'barry louis polisar', 2007)); // logs four album
console.log(addToCollection('garden party', 'ricky nelson', 1972)); // logs five album
console.log(addToCollection('tous les garcon et les filles', 'francoise hardy', 1962)); // logs six album
console.log(collection); // logs collection of albums

function showCollection() { // take in an array parameter
  // console.log(`the number of albums in this collection is: ${collection.length}`); // log number of items (albums) in array (collection)

  for (let albumInfo in album) {
    console.log(`${albumInfo}: ${album[albumInfo]}`);
  }
} // end showCollection

showCollection();
