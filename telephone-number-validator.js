function telephoneCheck(str) {
  let num=str.replace(/\W/g,"");
  let len=num.length;
  let space=str.replace(/\s/g,"");
  let legal=space.replace(/[()-]/g,"");
  let illegal=/\W/g;
  //Check special characters
  if(illegal.test(legal)){
    return false;
  }
  //With country code 
  if(len==11&&str[0]!=="1"){
    return false;
  }
  if(len==11){
    //Check format
    if(space[1]=="("&&space[5]!==")"||space[1]!=="("&&space[4]==")"){
     return false;
    }   
  }
  //Check the length
  if(len>11||len<10){
  console.log("too short");
  return false;
  }
 //Without country code
 if(len==10){
   //Check format
   if(str[0]=="("&&str[4]!==")"||str[0]!=="("&&str[3]==")"){
     console.log("Wrong format");
     return false;
   }
 }

  return true;
}

telephoneCheck("(555)5(55?)-5555");

/*Tasks
telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.
*/
