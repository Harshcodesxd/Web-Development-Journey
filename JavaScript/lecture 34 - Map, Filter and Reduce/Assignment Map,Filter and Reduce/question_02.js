// Question 2

const price = [100, 250, 500];

const symbolAdd = price.map(symbol => {
return "₹" + symbol
})

console.log(symbolAdd);