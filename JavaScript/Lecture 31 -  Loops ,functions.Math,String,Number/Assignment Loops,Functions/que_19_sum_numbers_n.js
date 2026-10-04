// Question 19: sumNumbers(n) function that returns the sum of numbers from 1 to n

function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNumbers(5));
