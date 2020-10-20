console.log('we are in test7.js and are going to learn array in java script')
let marks = [25,4,34,75,95];
const fruits = ['Orange','Apple', 'Pineapple'];
const mixed = ['str',89,[2,5]];

const arr = new Array(23,123,23,'Orange');
// console.log(arr);
// console.log(mixed);
// console.log(fruits);
// console.log(arr.length)
// console.log(Array.isArray('arr'))

// arr[1]= 'pawan';
let arrElement = arr[0];    
// console.log('element :',arrElement);
// console.log(arr)

let value = marks.indexOf(34)
// console.log(value)
// marks.push(3523); //this push is done at the last

// marks.unshift(2344); //pushing at first of the array

// marks.splice(1,2); //first argument tells that from which position, have to remove the element and the second argument tells that how many element have to remove.

// marks.reverse(); // it reverse the whole array and set the new values of array
// let marks2 = [34,5,2,5,6,9]
// marks = marks.concat(marks2); //it gives an error because variables must have same assignment, which are going to concat with each other.
let marks2 = [34,5,2,5,6,9]
marks = marks.concat(marks2);

let myobj = {
    name:  'pawan',
    domain: 'Web Development',
    isActive: true,
    marks: [4,65,78,6]
}
console.log(myobj)
console.log(myobj['marks'])