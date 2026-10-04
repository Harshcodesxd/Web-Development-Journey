// Question 12

const products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
]

let expensiveProducts = products.filter(({price}) => { // 
        return price > 1000;
})

console.log(expensiveProducts);