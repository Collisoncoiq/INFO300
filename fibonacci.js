var readLineSync = require("readline-sync");
var num
var fib= [];
var num = readLineSync.question("Enter how many Fibbbonaccii numbers: ")

for (var i = 0; i < num; i++){
    if (i==0) {
        fib.push(0)
    } else if(i == 1) {
        fib.push(1);
    } else{
        fib.push(fib[i-1]+ fib[i-2]);
    }
}
console.log("Full sequence: " + fib);

var odd= [];
for ( var i=0; i< fib.length; i++){
    if(fib[i] % 2!==0 ){
        odd.push(fib[i]);
    }
}
console.log("Odd Fibbonacci number: "+ odd);