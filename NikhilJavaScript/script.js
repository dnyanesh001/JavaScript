let message = "Hello, World!";
console.log(message);
// Output: Hello, World!
// external javasckript file
function alertMessage() {
    let name = prompt("Enter your name: ");
    console.log(name);
    alert(name);
}
let a = 10;
console.log(typeof a);
console.log(a instanceof Number);
let person = {
    name: "Nikhil",
    age: 21,
    occupation: "Student"
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.occupation);
let raju, rani, rama;
raju =15;
rani = 20;
rama = 25;
if (raju > rani && raju > rama) {
    console.log("Raju is elder");
} else if (rani > rama) {    
    console.log("Rani is elder");
} else {            
    console.log("Rama is elder");
}
//if else ladder
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else {
    if (score >= 80) {
        console.log("Grade: B");
    } else {
        if (score >= 70) {
            console.log("Grade: C");
        } else {
            if (score >= 60) {
                console.log("Grade: D");
            } else {
                console.log("Grade: F");
            }
        }
    }
}
//nested if else
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);

let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);