function translatePigLatin(str) {
  var vowel=/[aeiou]/g;
  if(str.search(vowel)==-1){
    return str.concat("ay");
  }else if(str.search(vowel)==0){
    return str.concat("way")
  }else{
    let index=str.search(vowel);
    return str.slice(index).concat(str.slice(0,index)+"ay")
  }
}

/*
Task:
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
*/

/*
#FCC
#Intermediate Algorithm
*/
