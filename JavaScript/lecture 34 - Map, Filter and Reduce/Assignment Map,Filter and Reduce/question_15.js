// Question 15

const cart = [500, 1200 , 300];

const totalPrice = cart.reduce((a, b) => { // originaly we take acc, curr in this instead of a ,b
        return a + b;
} ,0 )  

console.log(totalPrice);