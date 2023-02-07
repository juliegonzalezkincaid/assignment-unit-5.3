
console.log('***** Music Collection *****');

//Create a variable `collection` that starts as an empty array.
let collection = [];

 function addToCollection(title, artist, yearPublished) { //Add a function named addToCollection
    let musicInfo = {  //Create a new object having the above properties
        title,
        artist,
        yearPublished,
        };
    collection.push(musicInfo); //Add the new object to the end of the collection array
    console.log(collection)
    return musicInfo;
    //Return the newly created object

 }

 //Test the addToCollection function:
//Add 6 albums to your collection
//After all are added, console.log the collection array.
 console.log(addToCollection('The Jimi Hendrix Experience', 'Jimi Hendrix', 1967));
 console.log(addToCollection('MTV Unpluggged in New York', 'Nirvana', 1994));
 console.log(addToCollection('The Dark Side of the Moon', 'Pink Floyd', 1973));
 console.log(addToCollection('Standing on a Beach', 'The Cure' , 1986));
 console.log(addToCollection('Ok Computer', 'Radiohead', 1995));
 console.log(addToCollection('Songs in the Key of Life', 'Stevie Wonder', 1976));

            console.table(collection);
            console.log(collection)










//Add a function named showCollection. This function should:
    //Take in an array parameter. //(This allows it to be reused to show any collection, like the results from the find or search.)
    function showCollection(array) {
    
   console.log(array.length);//Console.log the number of items in the array.

for (let i = 0; i <=array.length; i++) //Loop over the array and console.log each album's information formatted
{
  
  console.log(` ${collection[i].title} by ${collection[i].artist} published in  ${collection[i].yearPublished}`);

}

 };
showCollection(collection);//TITLE by ARTIST, published in YEAR.









let artist =[];
function findByArtist( artist, collection){}
 