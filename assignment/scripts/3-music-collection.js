
console.log('***** Music Collection *****');


let collection = [];//Create a variable `collection` that starts as an empty array.

 function addToCollection(title, artist, yearPublished) { //Add a function named addToCollection
    let musicInfo = {  //Create a new object having the above properties
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        };
        
    collection.push(musicInfo); //Add the new object to the end of the collection array
   // console.log(collection)
    return musicInfo;//Return the newly created object
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



             
    //Take in an array parameter. //(This allows it to be reused to show any collection, like the results from the find or search.)
    function showCollection(array) {  //Add a function named showCollection.
    
   console.log(array.length);//Console.log the number of items in the array.
console.table(array);
for (let i = 0; i <array.length; i++) //Loop over the array and console.log each album's information formatted
{
    console.log(i)
  console.log(`${collection[i].title} by ${collection[i].artist} published in  ${collection[i].yearPublished}`);
}
  };
showCollection(collection); //TITLE by ARTIST, published in YEAR.
console.log('end of file')



//TODO
 //                 Take in artist (a string) parameter
function findByArtist(artist){  //Add a function named findByArtist.
    let results = [];//Create an array to hold any results, empty to start
    for (let i = 0; i <array.length; i++){//Loop through the collection
           if (artist === collection[i].artist){//add any objects with a matching artist to the array.
              results.push(collection[i]);
           };
    }; return results;
};

//console.log(findByArtist('Bob Marley'));
console.log(findByArtist('Jimi Hendrix'));
