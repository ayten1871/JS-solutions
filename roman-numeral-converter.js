function convertToRoman(num) {
let arr=num.toString().split("");
let len=arr.length;
//<10
switch(arr[arr.length-1]){
     case "0":
     arr[arr.length-1]="";
     break;
     case "1":
     arr[arr.length-1]="I";
     break;
     case "2":
     arr[arr.length-1]="II";
     break;
     case "3":
     arr[arr.length-1]="III";    
     break;
     case "4":
     arr[arr.length-1]="IV";
     break;
     case "5":
     arr[arr.length-1]="V";
     break;
     case "6":
     arr[arr.length-1]="VI";
     break;
     case "7":
     arr[arr.length-1]="VII";
     break;
     case "8":
     arr[arr.length-1]="VIII";
     break;
     case "9":
     arr[arr.length-1]="IX";
     break;
    }
    //<10

    //<100
switch(arr[arr.length-2]){
     case "0":
     arr[arr.length-2]="";
     break;
     case "1":
     arr[arr.length-2]="X";
     break;
     case "2":
     arr[arr.length-2]="XX";
     break;
     case "3":
     arr[arr.length-2]="XXX";
     break;
     case "4":
     arr[arr.length-2]="XL";
     break;
     case "5":
     arr[arr.length-2]="L";
     break;
     case "6":
     arr[arr.length-2]="LX";
     break;
     case "7":
     arr[arr.length-2]="LXX";
     break;
     case "8":
     arr[arr.length-2]="LXXX";
     break;
     case "9":
     arr[arr.length-2]="XC";
     break;
    }
    //<100

    //<1000
    switch(arr[arr.length-3]){
     case "0":
     arr[arr.length-3]="";
     break;
     case "1":
     arr[arr.length-3]="C";
     break;
     case "2":
     arr[arr.length-3]="CC";
     break;
     case "3":
     arr[arr.length-3]="CCC";
     break;
     case "4":
     arr[arr.length-3]="CD";
     break;
     case "5":
     arr[arr.length-3]="D";
     break;
     case "6":
     arr[arr.length-3]="DC";
     break;
     case "7":
     arr[arr.length-3]="DCC";
     break;
     case "8":
     arr[arr.length-3]="DCCC";
     break;
     case "9":
     arr[arr.length-3]="CM";
     break;
    }
switch(arr[arr.length-4]){
     case "1":
     arr[arr.length-4]="M";
     break;
     case "2":
     arr[arr.length-4]="MM";
     break;
     case "3":
     arr[arr.length-4]="MMM";
     break;
    }
    //<1000

let str=arr.join("").toString();
console.log(arr,str);
return str;
}

convertToRoman(649);

/*Tasks:
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/
