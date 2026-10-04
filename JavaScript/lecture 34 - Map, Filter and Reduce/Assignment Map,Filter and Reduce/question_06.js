// Question 6

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 }
]

const addStock = products.map(add => {
    return {...add , inStock : true}
})


console.log(products);
console.log(addStock);