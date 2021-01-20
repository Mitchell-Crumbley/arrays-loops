const students = ['Jim', 'John', 'Matthew', 'Chie'];
//console.log(students.length);

// ************** ACCESSING ITEMS IN ARRAY ******

//console.log(students[1]);
//console.log(students[students.length -1]); //Chie. Console log the last name in the array. must have student.length within the brackets. 


// Reassign a value within an array
// students[0] = 'Jesse';
// console.log(students);

// const valuePrinter = (array, index) => {
//   return array[index];
// }

// console.log(valuePrinter(students, 2)); //returns the 2 spot of the variable within the array defined as students. 


//Write a function that takens an array of something and tells you if the name 'Greg' is in that array. 

// const isGregHere = (array) => {
//   return array.inclues('Greg');
// };
// console.log(isGregHere(students));

// const students = ['Greg', 'Matthew', 'Jim'];
// const isGregHere = () => {
//     return students.inclues('Greg');
//   };

console.log(students.includes('Greg'));
