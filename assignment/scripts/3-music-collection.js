
console.log('***** Music Collection *****')

//Create a variable `collection` that starts as an empty array.
let collection = [];

 function addToCollection() { //Add a function named addToCollection
    let musicInfo = {  //Create a new object having the above properties

        title: '',
        artist: '',
        yearPublished: 0,


    };
    collection.push(musicInfo); //Add the new object to the end of the collection array
    return musicInfo; //Return the newly created object

 };

 //Test the addToCollection function:

//Add 6 albums to your collection
 console.log('The Jimi Hendrix Experience', 'Jimi Hendrix', 1967);
 console.log('MTV Unpluggged in New York', 'Nirvana', 1994);
 console.log('The Dark Side of the Moon', 'Pink Floyd', 1973);
    console.log('Standing on a Beach', 'The Cure' , 1986);
        console.log('Ok Computer', 'Radiohead', 1995);
            console.log('Songs in the Key of Life', 'Stevie Wonder', 1976);