//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// solution
function lookUpProfile(name, prop){
for(var i =0;i<contacts.length;i++){
    if(name==contacts[i].firstName){
        if(prop=="likes"){
            return contacts[i].likes;
        }else if(prop=="number"){
            return contacts[i].number;
         }else if(prop=="lastName"){
           return contacts[i].lastName;
         }else{
             return "No such property";
         }
    }}
    return "No such contact";
         
// End of the solution
}

// Tasks
lookUpProfile("Kristian", "lastName");
