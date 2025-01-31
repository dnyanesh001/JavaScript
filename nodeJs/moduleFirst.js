// const simple =require('./moduleSecond.mjs');
//// import without using es6 module
// import {simple2 as simple} from './moduleSecond.mjs';
// simple();   //way to import fuction using mjs
// import simple from './moduleSecond.mjs';
// simple();
import * as a2 from './moduleSecond.mjs';
console.log(a2.simple());