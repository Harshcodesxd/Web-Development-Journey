// Question 16

const productNames = ["Laptop", "Mouse", "Keyboard"];

const countNames = productNames.reduce((acc, cur) => {
    return  acc + 1;
   // return ++acc
}, 0)

console.log(productNames);
console.log(`No. Of Products : ${countNames}`);