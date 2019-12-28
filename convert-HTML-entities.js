function convertHTML(str) {
  let change=["&","<",">","'",'"'];
  let pair=["&amp;","&lt;","&gt;","&apos;","&quot;"]
let arr=str.split("");
console.log(arr);
for(let i=0;i<arr.length;i++){
  let index=change.indexOf(arr[i]);
  if(index>-1){
    console.log(pair[index]);
    arr[i]=pair[index];
  }
}
return arr.join("").toString();
}
convertHTML("<>");

/*Task
convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") should return Schindler&apos;s List.
convertHTML("<>") should return &lt;&gt;.
convertHTML("abc") should return abc.
*/

/*
#FCC
#Intermediate Algorithm
*/
