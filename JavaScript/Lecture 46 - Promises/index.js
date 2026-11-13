// there are 3 states of Promise - initial, fulfilled, rejected
// Initial state se Promise Settled hoga -> either fulfiled or Rejected
// once Promise becomes fulfilled/rejected it doesn't go back to pending then.
// Creating a Promise is Synchronous. The work inside can be Asynchronous 

// const p = new Promise(function (resolve, reject) { //resolve, reject are variables you can use custom names too

//   //  resolve("Done")

//     reject("Server Down Hai Beta Kal Ana") // ek bar settled hone k bad age nhi badega so reject nhi aya output m
// })

// console.log(typeof p); // object
// console.log(p);


// error handling(reject) = catch krna (should be last 2nd or last) if finally then 2nd last thne last

// const res = p.then(function onfulfilled(val) {
//     console.log(val);
// }, function (val) {
//     console.log(val);
// }).then(function onfulfilled(val) {
//     console.log(val);
// }).then(function onfulfilled(val) {
//     console.log(val);
// }).then(function onfulfilled(val) {
//     console.log(val);
// }).catch(function (val) { //catch krne k liye reject ko
//     console.log(val);
// }).finally(function () {// final will run always
//     console.log("Ye Tho Hamesha Chalega");
// })

 
console.log("a");

const p2 = new Promise(function f1(resolve, reject){
    console.log("b");
    resolve("Hello hogya")
})

p2.then(function f2(val) {
    console.log("Then");
    console.log(val);
}).catch(function f3() {
    console.log("Catch");
}).finally(function f4(){
    console.log("Finally");
})

console.log("C");
   