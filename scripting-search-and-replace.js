function myReplace(str, before, after) {
  //start with upper case
  var regExp=/^[^A-Z]/;
  //if it starts with lowercase then replace directly
  if(regExp.test(before)){
  return str.replace(before,after);
  }else{
   //capitalize the first letter
    return str.replace(before,after[0].toUpperCase().concat(after.slice(1)));
  }

}

/*
Task:
myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".

myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".

myReplace("His name is Tom", "Tom", "john") should return "His name is John".

myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/

/*
#FCC
#Intermediate Algorithm
*/
