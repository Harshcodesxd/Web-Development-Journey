// let cart = [{ name: "apple", catagory: "Fruits" }, { name: "Mango", catagory: "Fruits" }]

// const result = cart.filter( item  => {
//     if (item.catagory === "Fruits"){
//         return item
//     }
// })

// console.log(result);
// OG Example by Nishant Saini Sir


// Question 10

const products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
]


let inStock = products.filter(aval => {
    if (aval.inStock) // apne ap lelega true no need to write (aval.inStock === true)
       return aval
})

console.log(inStock);

