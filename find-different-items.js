function diffArray(arr1, arr2) {
  var newArr = []; 
  for(let i=0;i<arr2.length;i++){
   if(arr1.includes(arr2[i])==false){
     newArr.push(arr2[i]);
   }}
  for(let j=0;j<arr1.length;j++){
   if(arr2.includes(arr1[j])==false){
     newArr.push(arr1[j]);
   }}
   
  return newArr;
}

//other solution:
/*
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/

/*
#FCC
#Intermediate Algorithm
*/
