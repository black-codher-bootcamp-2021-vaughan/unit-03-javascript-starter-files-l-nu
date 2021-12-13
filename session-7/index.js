// ****************************************************TASK 1****************************************************

// Array containing list of animals
const animals = ['dog', 'cat', 'fox', 'lion', 'eagle', 'zebra'] ;

animals.pop() ; 

console.log(animals) ;




// ****************************************************TASK 2****************************************************



animals.sort().reverse() ;

console.log(animals) ;

const names = ['Jane', 'chloe', 'sam', 'chris', 'kevin', 'timothy', 'dan', 'kelly', 'nay', 'grace'] ;

 names.sort() ;

console.log(names) ;

names.sort().reverse() ;

console.log(names) ;

const numbers = [5, 325, 67, 100000, 150] ;

numbers.sort() ;

console.log(numbers) ;

// What do you think will happen if we call reverse() after the sort() on an 
// array? e.g. animals.sort().reverse();
// ● Create an array of 10 names
// ○ Intentionally put the names in a random order (i.e. not alphabetically)
// ● Sort the names in ascending order
// ● Sort the names in descending order
// ● Commit and push to GitHub
// ● BONUS - create an array with these numbers - 5, 325, 67, 100000, 150 and 
// sort them
// ○ What order do you expect them to be in?







// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? true : false;
}
