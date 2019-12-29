function sumFibs(num) {
  var fib=[1,1];
  var add=2;
  for(let i=2;i<num;i++){
    fib[i]=fib[i-2]+fib[i-1];
    if(fib[i]%2!==0&&fib[i]<=num){
      add+=fib[i];
    }
  }
  return add;
}
/*Task
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.*/

/*
#FCC
#Intermediate Algorithm
*/
