const numbers = [2, 3, 4, 3, 4, 5, 19, 15, 43, 21, 45, 87];
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);


// splice to remove an element from and array
/* const numberSpliced = numbers.splice(4, 8);
console.log(numberSpliced);
console.log(numbers) */
console.log(numbers)
const numberSpliced2 = numbers.splice(4, 3, 111, 222, 333);
console.log(numberSpliced2);
console.log(numbers)