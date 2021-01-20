const array1 = ['cow', 'dog', 'cat'];
const string1 = array1.join(); //.join takes everything in an array an creates one string with it.
const string1ToArray = string1.split(','); 
// console.log(string1);
// console.log(string1ToArray);

// ****** .push() & .pop() *******
// array1.pop();
// console.log(array1);
// array1.push('cat');
// console.log(array1);

// .unshift() & .shift() 
array1.unshift('cow');
console.log(array1);
array1.shift();
console.log(array1);
