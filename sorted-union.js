function uniteUnique(...arr) {
let len=arr.length;//3
let first=arr[0];//[1, 3, 2]
let rest=arr.slice(1);
var lack=[];
for(let i=0;i<rest.length;i++){
 // console.log(rest[i]);
  for(let j=0;j<rest[i].length;j++){
//    console.log(rest[i][j]);
    if(!first.includes(rest[i][j])){
      lack.push(rest[i][j]);
    }
  } 
}
return first.concat(lack);
}

/*Task
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

/*
#FCC
#Intermediate Algorithm*/
