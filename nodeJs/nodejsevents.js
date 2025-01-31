const EventEmitter = require('events');

// import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterFull', () => {
  console.log('Please Turn off the motor');
  setTimeout(()=>{
    console.log('Motor is off');
  },3000);
});

console.log('Event is emitted');    
myEmitter.emit('waterFull');
console.log('The script is still running');
// myEmitter.emit('events');