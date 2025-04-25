//Arrays
let heroes = ['spiderman', 'batman', 'superman'];
console.log(heroes);
//Array is special type of object where we using key value pair using index of values.
//accessing the specific element of array based on index number use arr[0]
console.log(heroes[0]);
//changing the value of array
heroes[0] = 'blackpanther';
console.log(heroes);
//arrays are mutable
//looping over array
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
//push method
heroes.push('captain america');
console.log(heroes);
//pop method
heroes.pop();// rempoving last element of array
console.log(heroes);
//for of
for (let hero of heroes) {
    console.log(hero);
}
let cities = ['bangalore', 'mumbai', 'delhi'];
for (let city of cities) {
    console.log(city.toUpperCase());
}
let marks = [10, 20, 30, 40, 50];
console.log(marks);
//sum of marks
let sum = 0;
for (let mark of marks) {
    sum += mark;
}
console.log(sum);
//average of marks
let average = sum / marks.length;
console.log(`average marks of students = ${average}`);

//practice assignment
//for a given array with price of 5 items -> [250, 300, 100,400, 600]
//all items have offer of 10% discount
//change the price of items after discount
let items = [250, 300, 100, 400, 600];
console.log(items);
for (let i = 0; i < items.length; i++) {
    items[i] = items[i] - items[i] * 0.1;
}
console.log(items);

//using for of
let items1 = [250, 300, 100, 400, 600];
console.log(items1);
let index = 0;
for (let item of items1) {
    item = item - item * 0.1;
    index++;
    console.log(`price of item ${index} after discount = ${item}`);
}

//Array methods
//push method
let fruits = ['apple', 'banana', 'mango'];
console.log(fruits);
fruits.push('orange');
console.log(fruits);

//pop method
fruits.pop();//removing last element of array
console.log(fruits);

