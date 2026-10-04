// Question 2: Generate random integer (1 to 10 and min to max range)

// Random integer from 1 to 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

// Extra: Random integer between min and max inclusive
let min = 5;
let max = 8;
let rangeRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rangeRandomNumber);
