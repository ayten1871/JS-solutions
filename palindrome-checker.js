function palindrome(str) {
  //replace all special characters and underscores 
  let ltrNum=str.replace(/[\W_]/g,"");
  let lowcase=ltrNum.toLowerCase();
  
  //make a reverse version (will turn out an array)
  let copy=lowcase;
  let reverse=[];
  for(let i=copy.length-1;i>=0;i--){
    reverse.push(copy[i]);
  }
  //Turn back to string for comparing 
  let toStr=reverse.join("").toString();
  
  //compare
  for(let j=0;j<lowcase.length;j++){
    if(lowcase[j]!==toStr[j]){
      return false;
    }
  }
  return true;
}

palindrome("almostomla");

/*Tasks
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false.*/
