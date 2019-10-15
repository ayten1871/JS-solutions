// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// solution:
function updateRecords(id, prop, value) {
  if(value!==""&&prop=="tracks"){
    if(collection[id][prop]){
      collection[id][prop].push(value);
    }else{
      collection[id][prop]=[value]
    }}else if(value!==""){
      collection[id][prop]=value;
    }else{
      delete collection[id][prop];
    }
 
  return collection;
}

// Tasks:
After updateRecords(5439, "artist", "ABBA"), artistshould be "ABBA"
After updateRecords(5439, "tracks", "Take a Chance on Me"), tracksshould have "Take a Chance on Me"as the last element.
After updateRecords(2548, "artist", ""), artistshould not be set
After updateRecords(1245, "tracks", "Addicted to Love"), tracksshould have "Addicted to Love"as the last element.
After updateRecords(2468, "tracks", "Free"), tracksshould have "1999"as the first element.
After updateRecords(2548, "tracks", ""), tracksshould not be set
After updateRecords(1245, "album", "Riptide"), albumshould be "Riptide"
