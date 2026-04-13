
const readline = require("readline-sync");

var employees = [];
var numEmployees = 3;

for (var i = 0; i < numEmployees; i++) {
    console.log("Employee " + (i + 1));

    var name = readline.question("Enter name: ");

    var wage = -1;
    while (wage <= 0) {
        wage = parseFloat(readline.question("Enter hourly wage: "));
        if (wage <= 0 || isNaN(wage)) {
            console.log("Invalid wage. Try again.");
        }
    }

    var hours = -1;
    while (hours < 0 || hours > 80) {
        hours = parseFloat(readline.question("Enter hours worked: "));
        if (hours < 0 || hours > 80 || isNaN(hours)) {
            console.log("Invalid hours. Must be 0–80.");
        }
    }

    var regularPay = 0;
    var overtimePay = 0;

    if (hours <= 40) {
        regularPay = hours * wage;
    } else {
        regularPay = 40 * wage;
        overtimePay = (hours - 40) * wage * 1.5;
    }

    var totalPay = regularPay + overtimePay;

    employees.push({
        name: name,
        hours: hours,
        regularPay: regularPay,
        overtimePay: overtimePay,
        totalPay: totalPay
    });
}

// find highest paid
var highestIndex = 0;
for (var i = 1; i < employees.length; i++) {
    if (employees[i].totalPay > employees[highestIndex].totalPay) {
        highestIndex = i;
    }
}

// print report
console.log("\nPayroll Report");

for (var i = 0; i < employees.length; i++) {
    var emp = employees[i];

    console.log("Name: " + emp.name);
    console.log("Hours: " + emp.hours);
    console.log("Regular Pay: $" + emp.regularPay.toFixed(2));
    console.log("Overtime Pay: $" + emp.overtimePay.toFixed(2));
    console.log("Total Pay: $" + emp.totalPay.toFixed(2));

    if (i === highestIndex) {
        console.log("Highest Paid Employee");
    }
}