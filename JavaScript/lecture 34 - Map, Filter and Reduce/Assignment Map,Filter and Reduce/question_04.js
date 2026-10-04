// Question 4

const productPrices = [100, 200, 300];

const updatedPrice = productPrices.map(update => {
    return update + (update * 10) /100;
})



console.log(productPrices);
console.log(updatedPrice);