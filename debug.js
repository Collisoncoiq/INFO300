const readLineSync= require('readline-sync');
let start= readLineSync.question("Enter start number: ");
let end= readLineSync.question("Enter end number: ");
let count=0;

for (let i= start; i<= end; i++){
    if(i%2==0){
        count+=1;
    }
}
console.log("Even numbers between " + start + " and " + end + ": " + count);