console.log("Dnyanesh  " + "Bhole");

//for loop
for (let count = 1; count <= 3; count++) {
    console.log("Dnyanesh "+ count);
}
let i = 1;

//while loop
while(i<=5){
    console.log(i);
    i++;
}
let j = 1;

//do while loop
do{
    console.log(j + " Dnyanesh");
    j++;
} while(j<=5);

//for of loop
let str = "Dnyanesh";
for (let char of str) {
    console.log(char);
}
let size = 0;
let arr = [1,2,3,4,5];
for (let val of arr) {
    console.log(val);
    size++;
}
console.log("array size " + size);

//for in loop

let student = {
    name: "Dnyanesh",
    age: 23,
    CGPA: 8.5,
    branch: "Computer",
    college: "COEP",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    pincode: 411001,
    isPassed: true,
    isEligible: true
}

for (let key in student) {
    console.log(key + " : " + student[key]);
}

//assignment
for (let i = 1; i <= 100; i++) {
    if(i % 2 == 0 ){
        console.log(i);
    }
}

//assignment 2 number guess game
let number = Math.floor(Math.random() * 5);
let guess;
let attempts = 0;
for (let i = 1; i <= 3; i++) {
    guess = parseInt(prompt("Enter your guess"));
    attempts++;
    if (guess == number) {
        console.log("You have guessed the number in " + attempts + " attempts");
        break;
    } else {
        console.log("Try again");
    }
}
console.log("The number was " + number);
let str1 = "Dnyanesh";
let str2 = 'Bhole';
console.log(str1.length);
console.log(str2.length);
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str1.charAt(3));
console.log(str2.charAt(3));
console.log(str1.indexOf('n'));
console.log(str2.indexOf('B'));
console.log(str1.lastIndexOf('n'));
console.log(str2.lastIndexOf('B'));
console.log(str1.includes('n'));
console.log(str2.includes('B'));
console.log(str1.startsWith('D'));
console.log(str2.startsWith('B'));
console.log(str1.endsWith('h'));
console.log(str2.endsWith('e'));
console.log(str1.concat(" ", str2));
console.log(str2.concat(" ", str1));
console.log(str1.slice(2, 5));
console.log(str2.slice(2, 5));
//Template literals
let obj = {
    item: "Mobile",
    price: 20000,
};
console.log(`The price of ${obj.item} is ${obj.price}`); //string interpolation

console.log(`addtion of 2 and 3 is \n ${2 + 3}`);
let str3 = "DnyaneshBhole";
str3.toUpperCase();
console.log(str3);
console.log(str3.toUpperCase());
str3 = str3.toUpperCase();
console.log(str3);
str4 = "   Dnyanesh N BHole   ";
console.log(str4.trim());
//assignment Game
//assginment prompt user to enter their fullname and generate a username or them based on the input.
//start Username with @, Followed by full name and ending with fullname length.
let fullName = prompt("Enter your full name");
// fullName = fullName.replaceAll(" ", "");
let username = `@${fullName.replaceAll(" ", "")}${fullName.length}`;
console.log(username);