function spinalCase(str) {

  return str.split(/\s|\_|(?=[A-Z])/g).toString().replace(/,/g,"-").toLowerCase();

}

/*
Task:
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

/*
#FCC
#Intermediate Algorithm
*/
