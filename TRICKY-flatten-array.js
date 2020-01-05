function steamrollArray(arr) {
  let flat = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
    //condiction (typeof arr[i]==object) will filter {} cuz it's object in JS
      var subArray = steamrollArray(arr[i]);
      //if arr[i] doesn't pass it then take it to run again till it's not an array
      flat=flat.concat(subArray);
      //.push() will keep the brackets but we don't want them
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}
steamrollArray([1, {}, [3, [[4]]]])

//With .flat()
/*
function steamrollArray(arr) {
let j=1;
for(let i=0;i<arr.length;i++){
  arr=arr.flat(j);
  if(Array.isArray(arr[i])){
    j+=1;
  }
}
return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);*/

/*Tasks:
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

