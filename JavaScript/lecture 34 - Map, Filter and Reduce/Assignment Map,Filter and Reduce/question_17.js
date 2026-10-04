// Question 17

const productNames = [
    { name: "Laptop", quantity: 3 },
    { name: "Mouse", quantity: 2 }
]

const totalQuantity = productNames.reduce((acc, {name ,quantity}) =>{
    return acc + quantity;
},0)


console.log(productNames);
console.log(totalQuantity);
/* console.log(`Quantity Of Products : ${totalQuantity}`); */