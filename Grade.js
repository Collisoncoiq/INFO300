const readline = require("readline-sync");

var currentAvg = 0;
currentAvg = parseFloat(readline.question("Enter current average: "));
var input = readline.question("Enter final exam scores separated by commas: ");

var parts = input.split(",");

console.log("Grade Forecast");

for (var i = 0; i < parts.length; i++) {
    var score = parseFloat(parts[i]);

    if (isNaN(score) || score < 0 || score > 100) {
        console.log("\nInvalid score skipped: " + parts[i]);
        continue;
    }

    var finalAvg = (currentAvg * 0.75) + (score * 0.25);

    var letter = "";

    if (finalAvg >= 90) {
        letter = "A";
    } else if (finalAvg >= 80) {
        letter = "B";
    } else if (finalAvg >= 70) {
        letter = "C";
    } else if (finalAvg >= 60) {
        letter = "D";
    } else {
        letter = "F";
    }

    var status = "";
    if (finalAvg > currentAvg) {
        status = "Improved";
    } else if (finalAvg < currentAvg) {
        status = "Declined";
    } else {
        status = "Stayed the same";
    }

    console.log("\nFinal Exam Score: " + score);
    console.log("Final Average: " + finalAvg.toFixed(2));
    console.log("Letter Grade: " + letter);
    console.log("Status: " + status);
}