function sumAll(arr) {
//in csae the former is larger than the later
if(arr[0]>arr[1]){
  [arr[0],arr[1]]=[arr[1],arr[0]];
}
//list all the numbers between the given range
let nums=[];
do{
  nums.push(arr[1]);
  arr[1]--;
}while(arr[1]>=arr[0])

return nums.reduce((sum,cur)=>{return sum+cur;})
}

/*
Tasks:
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.

#FCC
#Intermediate Algorithm
*/

//A wiser solution:
/*
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
*/
