import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('overheat', () => {
  console.log('Please turn off car');
  setTimeout(() => {

  }, 3000);
  console.log('Please turn on car');
}); 
console.log("the car is on")

myEmitter.emit('overheat');
console.log("the car is off")




//myEmitter.emit('event');