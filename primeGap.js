var readLineSync= require("readline-sync");
var num
var array= [];
var num = readLineSync.question("Enter a positive number less thant or equal to 1000: ")

for(var i=2; i <=num; i++){
    var isPrime=true;

    for(var j=2; j < i; j++){
        if (i % j === 0) {
        isPrime = false;
        break;
    }
}
 if (isPrime) {
    array.push(i)
 }
}
 console.log("Primes up to " + num + " "+ array);