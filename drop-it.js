function dropElements(arr, func) {  
  let copy=arr;
  let array=[];
for(let i=1;i<copy.length;i++){
     if(func(arr[0])){
       return arr;
     }else if(func(arr[i])){
       return arr.slice(i,);
     }
}
return array;
}

/*Task:Return the rest of the given array when argument is true 
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
*/

/*
#FCC
#Intermediate Algorithm
*/
