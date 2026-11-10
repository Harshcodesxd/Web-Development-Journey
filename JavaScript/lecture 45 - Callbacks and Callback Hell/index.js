// Always find from where code beggin instead get scared by looking at big code

// function fun1(callback) {
//     console.log("Hi");
//     callback()
// }

// function cb(){
//     console.log("This is callback Function");
// }

// fun1(cb)

//  HIGH ORDER FUNCTION
//  anyfunction that takes a function as an argument || Any function that Returns a function




function searchPizza(cb1) {
    console.log("Searching Pizza...");
    setTimeout(function () {
        console.log("Here is your Pizza Menu");
        let price = 500;
        cb1(price);
    }, 1000);

}

function addToCart(cb2) {
    console.log("Pizza adding to cart...");
    setTimeout(function () {
        console.log("Pizza Added to Cart");
        cb2()
    }, 3000)
}


function payment(price, cb3) {
    console.log(`Payment Initiated , Amount : ${price}`);
    setTimeout(function () {
        console.log(`Payment Completed, Amount : ${price}`);
        cb3()
    }, 4000)
}

searchPizza(function (price) {
    addToCart(function () {
        payment(price, function () {
            console.log("Just there");
        })
    })
});


