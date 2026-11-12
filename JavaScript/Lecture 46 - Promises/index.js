// there are 3 states of Promise - initial, fulfilled, rejected
// Initial state se Promise Settled hoga -> either fulfiled or Rejected
// once Promise becomes fulfilled/rejected it doesn't go back to pending then.
// Creating a Promise is Synchronous. The work inside can be Asynchronous 

const p = new Promise(function(resolve, reject) { //resolve, reject are variables you can use custom names too

    resolve("Done")

    reject("Server Down Hai Beta Kal Ana") // ek bar settled hone k bad age nhi badega so reject nhi aya output m
})

console.log(typeof p); // object
console.log(p);