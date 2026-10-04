
// let originalPrices = [463, 654, 2346];

// let discountPrices = [];

// for (value of originalPrices) {
//     let discount = value * 10 / 100
//     discountPrices.push(value - discount);
// BOTH ARE SAME UPPER AND BELOW METHODS
//     // discountPrices.push(value * 0.9);
// }

// console.log(originalPrices);
// console.log(discountPrices);


//        MAP
// const discountPrices3 = originalPrices.map((value) => value * 0.9 ) // Short method

/* const discountPrices2 = originalPrices.map((value) => {
   return value * 0.9
}); */

// console.log(discountPrices3);


// student = [
//     {
//         name: "harsh",
//         marks: 99
//     },
//     {
//         name: "shagun",
//         marks: 100
//     },
//     {
//         name: "suvo",
//         marks: 70
//     },
//     {
//         name: "vegeta",
//         marks: 32
//     },
//     {
//         name: "madhav",
//         marks: 29
//     },
    
    
// ]

// const studentNames = student.map((student) => student.name)
// const studentMarks = student.map((student) => student.marks)


// console.log(studentNames);
// console.log(studentMarks);

// let boostedMarks = student.map((student) => ({ ...student, marks: student.marks + 10 }));

// console.log(boostedMarks);

// const failedStudents = student.filter((student) => student.marks < 33).map((student) => student.name )

// console.log(failedStudents);






// map method
// let arr1 = [41, 35, 22, 52];

// let a = arr1.map((value, index , array) => {
//     console.log(value , index , array);
//     return value + 10
// })

// console.log(a);


// filter method
// let arr2 = [41, 35, 2, 9 , 5];

// let a2 = arr2.filter((a) => {
//     return a < 10
// });

// console.log(a2);


// reduce method
let arr3 = [56, 24, 62, 73, 78]

let newarr3 = arr3.reduce((h1 , h2) => { // h1 , h2 just variable generaly we take accumulator and currentvalue.
return h1 + h2
}, 0)

console.log(newarr3);