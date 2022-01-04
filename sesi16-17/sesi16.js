// function Button() {
//   //   const name = 'Submit';
//   let name = 'Submit';

//   function changeName() {
//     name = 'Send';
//   }

//   changeName();

//   console.log(name);

//   return 'done';
// }

// Button();

// let numbers = [1, 2, 3, 4, 5];

// let otherNumbers = [
//   [1, 2, 3],
//   [4, 5],
//   [6, 7, 8],
// ];

// console.log(otherNumbers[2][1]);

// const counter = {
//   val: 0,
//   increment() {
//     this.val++;
//   },
// };

// console.log(counter);
// counter.increment();
// console.log(counter);

// function sum(a, b) {
//   return a + b;
// }

// const sumArrow = (a, b) => a + b;

// const thisArrow = () => this;
// const thisFunction = function () {
//   return this;
// };

// console.log(this);
// console.log(thisArrow());
// console.log(thisFunction());

class Participant {
  constructor(name) {
    this.name = name;
  }
}

console.log(new Participant('Oki'));
