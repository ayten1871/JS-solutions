function rot13(str) {
//list the corresponding alphabet for the former 13 ones after Z so we can +13 to do the ROT13 cipher directly
let whole=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' ];
let arr=str.split("");
let encode=[];
for(let i=0;i<arr.length;i++){
//indexOf() return the index for the first found 
  let index=whole.indexOf(arr[i]);
  console.log(index);
  if(index>-1){
    let rot13=whole[index+13];
    encode.push(rot13);
    
  //if it's not a letter (can't be found and will return -1)
  //just push it into endode array
  }else if(index=-1){
    encode.push(arr[i]);
  }  
}
//get rid of comma and turn the array back into string
  return encode.join("").toString();
}

rot13("SERR PBQR PNZC");

/*Tasks
rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
rot13("SERR CVMMN!") should decode to FREE PIZZA!
rot13("SERR YBIR?") should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
