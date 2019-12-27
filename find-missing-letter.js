function fearNotLetter(str) {
let standard="abcdefghijklmnopqrstuvwxyz";
let len=str.length;
let start=standard.indexOf(str[0]);
let slice=standard.slice(start,start+len);
for(let i=0;i<len;i++){
    if(slice[i]!==str[i]){
      return(slice[i]);
      }
    }
}

fearNotLetter("stvwx");

/*Task
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.*/

/*
#FCC
#Intermediate Algorithm
*/
