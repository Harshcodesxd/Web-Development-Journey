// console.log("Hi, Harshit");
// console.log(5 + 4);
// console.log("4 * 5 =", 4 * 5 );


// age = 17
// name = "Harshit"

// console.log(age);
// console.log(name) 

// console.log(age, name)


// var, let and const

// var age;         // declaration -> box created without value 
// age = 17;       // initialization -> box mai value de di
// var age = 24;  // both together declaration and initialization

// compiler reads code line by line below example

// var  age = 17;
// console.log(age)
// var age = 24; // re-declaration
// age = 18 // updation
// console.log(age)



/* Let starts  */

// let name = "Harshit";
// console.log(name);
// let name = "Coder";  // re-declaration not allowed
// name = Harshitthakral // updation allowed
//console.log(name);



/* const startss :> */

// const phoneno = "1234567890";
// console.log(phoneno);
// const phoneno = "1234567890"; // re-declaration not allowed
// phoneno = "14141414" // no updation allowed
// console.log(phoneno);


/* Variable naming rules 
1. meaning full variable names
2. variable name must start with either a letter or an underscore(_) or dollar $ sign
3. reserved keywords ko bhi use nhi kr sakte as a variable name (let, if, for etc.)
4. uppercase allowed
*/

/* camelCase (Good practise) used in java
Normal case -> HarshitThakral
camelCase   -> harshitThakral
2nd word 1st letter will be capital.
*/

/* snake-case (Good practise) used in python
all small letters join 2 words with (_)
eg.
1.first_name
2.harshit_thakral
*/

/* PascalCase
Just like camelCase but the first letter will be bigger in this
eq.
1. HarshitThakral
2. FirstName
 */

/* SCREAMING-SNAKE
 all letters capital and where 2 words joining use a (_)
 eq.
 DB_URL
*/



// let collgename = "london University";
// let phoneno = 9419491491
// let discount = 45.23
// console.log(typeof collgename)
// console.log(typeof phoneno)
// console.log(typeof discount)

// discount = "hello";
// console.log(typeof discount)


// const doubleQuote = "hii dostioo";
// const singleQuote = 'hii';
// const templateLiteral = `My name 
// is Harshit`; /* It supports multi line counts all spaces */

// console.log(doubleQuote);
// console.log(singleQuote);
// console.log(templateLiteral);


// const userName = "harsh" /* Any username you put here will get print*/
// const greetingMessage = `Hii, ${userName}`
// console.log(greetingMessage)


// undefine
// let user;
// console.log(user); // eq for undefined


// null
// let products = null;
// console.log(products); // example for null
// console.log(typeof products); // it will render object thats an developers mistake

// boolean 
// let isLoggedIn = true;
// console.log(typeof isLoggedIn);