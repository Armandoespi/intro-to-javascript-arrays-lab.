/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called foods.
*/

const foods = [];  

console.log('Exercise 1 result:', foods);


/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the foods array. 
*/

foods.push('pizza', 'cheeseburger');

console.log('Exercise 2 result:', foods);


/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the foods array.
*/

foods.unshift('taco'); 

console.log('Exercise 3 result:', foods);


/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in the array.  
*/

const favFood = foods[1]; 

console.log('Exercise 4 result:', favFood);


/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.
*/

foods.splice(2, 0, 'tofu'); 

console.log('Exercise 5 result:', foods);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the foods array with 'sushi' and 'cupcake'.
*/

const pizzaIndex = foods.indexOf('pizza');
if (pizzaIndex !== -1) {
    foods.splice(pizzaIndex, 1, 'sushi', 'cupcake'); 
}

console.log('Exercise 6 result:', foods);


/*
Exercise 7: Using the slice() method

1) Use the slice() method to create a new array that contains 'sushi' and 'cupcake'.
*/

const yummy = foods.slice(1, 3); 

console.log('Exercise 7 result:', yummy);


/*
Exercise 8: Finding an index

1) Using the indexOf() method, find the index of the string 'tofu' in the foods array. 
*/

const soyIdx = foods.indexOf('tofu'); 

console.log('Exercise 8 result:', soyIdx);


/*
Exercise 9: Joining elements

1) Use the join() method to concatenate the strings in the foods array, separated by ' -> '. 
*/

const allFoods = foods.join(' -> '); 

console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the foods array contains the string 'soup'.
*/

const hasSoup = foods.includes('soup');

console.log('Exercise 10 result:', hasSoup);


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the numsArray array.
2) Push each odd number to a new array named odds.
*/

const numsArray = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

numsArray.forEach(num => {
  if (num % 2 !== 0) { 
    odds.push(num); }
});

console.log('Exercise 11 result:', odds);


/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the numsArray2 array.
2. As you loop, sort the numbers into new arrays based on the following rules:
   - Push any number evenly divisible by 3 to an array called fizz.
   - Push any number evenly divisible by 5 to an array called buzz.
   - Push any number that is evenly divisible by 3 and 5 to an array called fizzbuzz.
*/

const numsArray2 = [1, 3, 5, 15, 30, 9, 10, 21, 25, 60, 11]; 
const fizz = [];
const buzz = [];
const fizzbuzz = [];

numsArray2.forEach(num => {
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num);  
  } else if (num % 3 === 0) {
    fizz.push(num);     
  } else if (num % 5 === 0) {
    buzz.push(num);      
  }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the numArrays below to a variable named numList.
*/

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]
];
const numList = numArrays[numArrays.length - 1];

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number 66 from the numArrays array. As part of this process
   do not alter the original numArrays array.

2) Assign it to a variable called num.
*/

const numArrays1 = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
  ];
  
  const num = numArrays1[2][1];
  
  console.log('Exercise 14 result:', num);  
  /*
Exercise 15: Nested array sum

1) Use nested loops or forEach() methods to sum up all numbers within 
   numArrays nested arrays.
   
2) Assign the sum to a variable called total.

Hint: Be sure to declare and initialize the total variable before the iterations.
*/

const numArrays2 = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
  ];
  
  let total = 0;
  
  numArrays.forEach(innerArray => {
    innerArray.forEach(num => {
      total += num; 
    });
  });
  
  console.log('Exercise 15 result:\n', total);