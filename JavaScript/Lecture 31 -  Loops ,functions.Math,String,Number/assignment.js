//                                                                       Section - 1 -  for Loop
// que - 1 Write a program to print numbers from 1 to 10 using a for loop.

// for (let i = 1; i <= 10 ; i++) {
//     console.log(i)
// }

// que - 2 Write a program to print all even numbers from 1 to 20.
// for (let i = 1; i <=20 ; i++){

//  if (i % 2 === 0){

//   console.log(i);
// }
// }

// que - 3 Write a program to print all odd numbers from 1 to 20.
// for (let i = 1; i <=20 ; i++){

//  if (i % 2 !== 0){

//   console.log(i);
// }
// }

// que - 4 Write a program to print numbers from 10 to 1 using a loop

// for ( let i = 10 ; i >= 1 ; i--) { // dont make mistake of ">" will point left side when taking we want reverse no.
// console.log(i);
// }

// que - 5 Write a program to calculate the sum of numbers from 1 to 10.
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum += i;      // sum = sum + i;
// }

// console.log(sum);

// que - 6 take a number and print its multiplication table up to 10

// let num = 9;
// for ( let i = 1 ; i <= 10; i++) {
// console.log(`${num} X ${i} = ${num * i}`);
// }

//                                                                       Section B - while loop

// que - 7 Write a program to print numbers from 1 to 10 using a while loop.

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// que - 8 Write a program to calculate the sum of all even numbers from 1 to 20

// let sum = 0;
// let i = 2;

// while (i <= 20) {
//     sum = sum + i;
//     i += 2;

// }
// console.log(sum);

// que - 9 Write a program using a while loop to print numbers from 1 onwards, but stop the loop when the number reaches 6 using the break statement. 
//         Expected Output: 1 2 3 4 5

// let i = 1;
// while (true) {
//     if(i === 6){
//         break;
//     }
//     console.log(i);
//     i++;
// }


// que - 10  Print numbers from 1 to 10, but skip the number 5 using the continue statement.

// let i = 1;

// while (i <= 10) {
//     if (i === 5) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;

// }

//                                                                       Section 2 - Functions


// que 11    Create a function named greetUser(name) that takes a name as a parameter and displays a greetingmessage.
//           Example: Input: Rahul | Output: Hello, Rahul


// function  greetUser(name){
//     console.log(`Hello, ${name}`);
// }

// greetUser("Harshit Thakral")


// que 12  Create a function that takes two numbers as parameters and returns their sum.

// function addNumbers(a, b) {
//     return a + b;
// }

// let result = addNumbers(5, 7);
// console.log(result);


// que 13  Create a function that takes a number and checks whether it is even or odd.

// function checkEvenOdd(num) {
//     if(num % 2 === 0){
//         console.log("EVEN");
//     }
//     else {
//         console.log("ODD");
//     }
// }

// checkEvenOdd(4)


// que 14 Create a function that takes a number and returns its square.

// function square(num) {
//   return num * num;

// }

// console.log(square(12)); 


// que - 15  Create a function that takes two numbers and returns the greater number 

// function greater(n1 , n2) {
//     if (n1 > n2) {
//         return n1;
//     }
//     else {
//          return n2;
//     }
// }

// let answer = greater(6, 14);
// console.log(`${answer} is Greatest`);



// que - 16  Create a function named calculateTotal(price, quantity) using a function declaration. The functionshould calculate and display the total price.
//           Example: Input: price = 100, quantity = 3 | Output: Total Price: 300

// function calculateTotal(price, quantity) {
//     let total =  price * quantity;
//     console.log(`Total Price : ${total}`);
// }
// calculateTotal(124, 5)



// que - 17  Create a function printNumbers(n) that prints numbers from 1 to n using a loop.
//           Example: Input: 5 | Output: 1 2 3 4 5

// function printNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }

// }
// printNumbers(11)


// que - 18  Create a function printTable(num) that prints the multiplication table of the given number

// function printTable(num) {
// for (i = 1; i <= 10 ; i++){
//     console.log(`${num} x ${i} = ${num*i}`);
// }
// }
// printTable(12)


// que 19 Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n.
//        Example: Input: 5 | Output: 15

// function sumNumbers(n) {
// let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumNumbers(5));