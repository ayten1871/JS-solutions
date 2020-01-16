function checkCashRegister(price, cash, cid) {
  let change=(cash-price);
  let currency=[0.01,0.05,0.1,0.25,1,5,10,20,100];
  let order=[0.01,0.05,0.1,0.25,1,5,10,20,100];
    order.push(change);
    order.sort((a,b)=>{return a-b});
  let index=order.indexOf(change);
  let list=[];
  let rest=0;
    for(let i=0;i<index;i++){
    list.push(cid[i][1].toFixed(2)); 
    rest+=cid[i][1];
    rest.toFixed(2);
  } 
  console.log(order,list,rest);
  let result={status:null,change:[]};
  if(rest==change.toFixed(2)){
    result.status="CLOSED";
    result.change=cid;
  }else if(rest<change.toFixed(2)){
    result.status="INSUFFICIENT_FUNDS";
  }else{
   result.status="OPEN"; 
   for(let n=cid.length-1;n>-1;n--){
     let value=0;
     while(cid[n][1]>0&&change.toFixed(2)>=currency[n]){
       (change-=currency[n]).toFixed(2);
       (cid[n][1]-=currency[n]).toFixed(2);
       value+=currency[n];
     }if(value){
       result.change.push([cid[n][0],value]);
     }
   }
  }
console.log(result);
  return result;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

/*Tasks
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.*/
