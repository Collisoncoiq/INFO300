const readLineSync = require('readline-sync');
var text = readLineSync.question("Enter a string: ");
text=text.toLowerCase();

var counts={};
var firstRepeat= "";

for( var i=0; i< text.length; i++){
    var ch= text[i];
    if (ch>= 'a' && ch <= 'z'){
        
        if (counts[ch]){
            counts[ch] = counts[ch] + 1;
           
            if (counts[ch] == 2 && firstRepeat==""){
                firstRepeat = ch;
            }
        }else {
                counts[ch] = 1;
            }
        
    }
}
console.log("Letter Frequency:");
for(var n in counts){
    console.log(n +":"+ counts[n]);
}

console.log("First repeated Letter: "+ firstRepeat);