function orbitalPeriod(arr) {
  //materials
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let dem=2*Math.PI
  //loop
  for(let i=0;i<arr.length;i++){ 
  //count the orbitalPeriod
  var alt=arr[i].avgAlt;
  var con=Math.sqrt(Math.pow(earthRadius+alt,3)/GM); 
  var t=Math.round(dem*con);
  //replace avgAlt with orbitalPeriod 
  delete arr[i].avgAlt;
  arr[i].orbitalPeriod=t;
  }
  return arr;

}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

/*Tasks:
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
*/
