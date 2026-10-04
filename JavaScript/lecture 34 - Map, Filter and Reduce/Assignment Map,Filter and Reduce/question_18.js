// Question 18

const order = [
    { amount: 500 },
    { amount: 1000 },
    { amount: 750 }
]

const totalOrderAmount = order.reduce((acc, {amount} ) => {
    return acc + amount
} ,0)

console.log(`Total Amount : ${totalOrderAmount}`);
