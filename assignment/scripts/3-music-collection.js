
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
 